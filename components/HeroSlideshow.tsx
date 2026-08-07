"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
};

const panClasses = ["pan-a", "pan-b", "pan-c", "pan-d", "pan-e"];
const SWIPE_THRESHOLD = 50;
const MOBILE_SWIPE_RATIO = 0.18; // 18% of screen width triggers advance

export default function HeroSlideshow({ images, intervalMs = 6500 }: Props) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Desktop crossfade drag/click ─────────────────────────────
  const desktopDragStart = useRef<number | null>(null);

  // ── Mobile carousel drag ─────────────────────────────────────
  const mobileDragStart = useRef<number | null>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileStripRef = useRef<HTMLDivElement>(null);
  const [mobileDragging, setMobileDragging] = useState(false);

  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (images.length <= 1) return;
    // Only autoplay on desktop — mobile carousel is user-driven, Instagram-style
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) return;
    timerRef.current = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      intervalMs
    );
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, intervalMs]);

  const goToWrap = (idx: number) => {
    const n = images.length;
    setActive(((idx % n) + n) % n);
    startAutoplay();
  };

  const goToClamp = (idx: number) => {
    const n = images.length;
    setActive(Math.max(0, Math.min(n - 1, idx)));
  };

  // ── Desktop handlers ─────────────────────────────────────────
  const onDesktopPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    desktopDragStart.current = e.clientX;
  };
  const onDesktopPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (desktopDragStart.current === null) return;
    const delta = e.clientX - desktopDragStart.current;
    desktopDragStart.current = null;

    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      goToWrap(active + (delta < 0 ? 1 : -1));
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    if (relX < rect.width * 0.33) goToWrap(active - 1);
    else if (relX > rect.width * 0.67) goToWrap(active + 1);
  };
  const cancelDesktopDrag = () => {
    desktopDragStart.current = null;
  };

  // ── Mobile handlers ──────────────────────────────────────────
  const applyMobileTransform = (offsetPx: number) => {
    if (!mobileStripRef.current) return;
    mobileStripRef.current.style.transform = `translate3d(calc(${-active * 100}% + ${offsetPx}px), 0, 0)`;
  };

  const onMobilePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    mobileDragStart.current = e.clientX;
    setMobileDragging(true);
    // Ensure the pointer keeps sending events to this element even if it leaves
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };

  const onMobilePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (mobileDragStart.current === null) return;
    const delta = e.clientX - mobileDragStart.current;
    applyMobileTransform(delta);
  };

  const onMobilePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (mobileDragStart.current === null) return;
    const delta = e.clientX - mobileDragStart.current;
    mobileDragStart.current = null;
    setMobileDragging(false);
    if (mobileStripRef.current) {
      mobileStripRef.current.style.transform = ""; // clear inline; class-based transform takes over
    }

    const width = mobileContainerRef.current?.getBoundingClientRect().width ?? 300;
    const threshold = width * MOBILE_SWIPE_RATIO;
    if (Math.abs(delta) > threshold) {
      goToClamp(active + (delta < 0 ? 1 : -1));
    }
  };

  const cancelMobileDrag = () => {
    if (mobileDragStart.current === null) return;
    mobileDragStart.current = null;
    setMobileDragging(false);
    if (mobileStripRef.current) mobileStripRef.current.style.transform = "";
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ── Mobile carousel (drag-to-slide, Instagram-style) ── */}
      <div
        ref={mobileContainerRef}
        className="md:hidden absolute inset-0 overflow-hidden touch-pan-y select-none"
        onPointerDown={onMobilePointerDown}
        onPointerMove={onMobilePointerMove}
        onPointerUp={onMobilePointerUp}
        onPointerCancel={cancelMobileDrag}
      >
        <div
          ref={mobileStripRef}
          className={`flex h-full w-full ${
            mobileDragging ? "" : "transition-transform duration-500 ease-out"
          }`}
          style={{
            transform: `translate3d(${-active * 100}%, 0, 0)`,
          }}
        >
          {images.map((img, i) => (
            <div key={img.src} className="relative shrink-0 w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                draggable={false}
                className="object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop crossfade (click zones + hover chevrons) ── */}
      <div
        className="hidden md:block group absolute inset-0 overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing"
        onPointerDown={onDesktopPointerDown}
        onPointerUp={onDesktopPointerUp}
        onPointerCancel={cancelDesktopDrag}
        onPointerLeave={cancelDesktopDrag}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`absolute inset-0 kenburns ${panClasses[i % panClasses.length]}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                draggable={false}
                className="object-cover pointer-events-none"
              />
            </div>
          </div>
        ))}

        {/* Prev/next chevron affordances */}
        {images.length > 1 && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-24 flex items-center justify-start pl-4 lg:pl-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <span className="text-cream/80" style={{ filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.6))" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </span>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-24 flex items-center justify-end pr-4 lg:pr-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <span className="text-cream/80" style={{ filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.6))" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </div>
          </>
        )}
      </div>

      {/* ── Shared overlays ── */}
      <div className="absolute inset-0 pointer-events-none bg-bg/20" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bg/10 via-bg/10 to-bg/85" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* ── Shared indicators ── */}
      {images.length > 1 && (
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === active ? "w-10 bg-accent" : "w-5 bg-cream/35 hover:bg-cream/65"
              }`}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .kenburns {
          animation-duration: 22s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          will-change: transform;
        }
        .pan-a {
          animation-name: zoomA;
          transform-origin: 35% 40%;
        }
        .pan-b {
          animation-name: zoomB;
          transform-origin: 65% 55%;
        }
        .pan-c {
          animation-name: zoomA;
          transform-origin: 50% 65%;
        }
        .pan-d {
          animation-name: zoomB;
          transform-origin: 40% 30%;
        }
        .pan-e {
          animation-name: zoomA;
          transform-origin: 60% 45%;
        }
        @keyframes zoomA {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.11);
          }
        }
        @keyframes zoomB {
          from {
            transform: scale(1.11);
          }
          to {
            transform: scale(1.02);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .kenburns {
            animation: none;
            transform: scale(1.03);
          }
        }
      `}</style>
    </div>
  );
}
