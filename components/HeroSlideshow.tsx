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
  // Keep the transform in sync with `active` whenever we're not dragging.
  // We manage transform via ref (never the style prop) so drag → snap
  // transitions cleanly without React fighting the inline style.
  useEffect(() => {
    if (mobileDragging) return;
    if (!mobileStripRef.current || !mobileContainerRef.current) return;
    const width = mobileContainerRef.current.getBoundingClientRect().width;
    mobileStripRef.current.style.transform = `translate3d(${-active * width}px, 0, 0)`;
  }, [active, mobileDragging]);

  const resistDrag = (delta: number, width: number) => {
    // Cap normal travel at one slide width.
    const capped = Math.max(-width, Math.min(width, delta));
    // Rubber-band at the first/last slide (30% of movement).
    if (active === 0 && delta > 0) return delta * 0.3;
    if (active === images.length - 1 && delta < 0) return delta * 0.3;
    return capped;
  };

  const onMobilePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    mobileDragStart.current = e.clientX;
    setMobileDragging(true);
    try {
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const onMobilePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (mobileDragStart.current === null || !mobileStripRef.current || !mobileContainerRef.current) return;
    const width = mobileContainerRef.current.getBoundingClientRect().width;
    const delta = e.clientX - mobileDragStart.current;
    const effective = resistDrag(delta, width);
    mobileStripRef.current.style.transform = `translate3d(${-active * width + effective}px, 0, 0)`;
  };

  const onMobilePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (mobileDragStart.current === null) return;
    const delta = e.clientX - mobileDragStart.current;
    mobileDragStart.current = null;

    const width = mobileContainerRef.current?.getBoundingClientRect().width ?? 300;
    const threshold = width * MOBILE_SWIPE_RATIO;

    let next = active;
    if (Math.abs(delta) > threshold) {
      next = Math.max(0, Math.min(images.length - 1, active + (delta < 0 ? 1 : -1)));
    }

    setMobileDragging(false);
    if (next !== active) {
      setActive(next);
    } else if (mobileStripRef.current) {
      // No advance — snap back to current slide with transition
      mobileStripRef.current.style.transform = `translate3d(${-active * width}px, 0, 0)`;
    }
  };

  const cancelMobileDrag = () => {
    if (mobileDragStart.current === null) return;
    mobileDragStart.current = null;
    setMobileDragging(false);
    // useEffect will re-sync transform to current active
    if (mobileStripRef.current && mobileContainerRef.current) {
      const width = mobileContainerRef.current.getBoundingClientRect().width;
      mobileStripRef.current.style.transform = `translate3d(${-active * width}px, 0, 0)`;
    }
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
          className={`flex h-full w-full will-change-transform ${
            mobileDragging ? "" : "transition-transform duration-[400ms] ease-out"
          }`}
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

        {/* Prev/next arrow buttons — always visible, subtle by default, prominent on hover */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goToWrap(active - 1)}
              className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border border-cream/25 bg-bg/30 backdrop-blur-sm text-cream/85 opacity-60 hover:opacity-100 hover:bg-bg/50 hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goToWrap(active + 1)}
              className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center border border-cream/25 bg-bg/30 backdrop-blur-sm text-cream/85 opacity-60 hover:opacity-100 hover:bg-bg/50 hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
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
