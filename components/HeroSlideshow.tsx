"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
};

const panClasses = ["pan-a", "pan-b", "pan-c", "pan-d", "pan-e"];
const SWIPE_THRESHOLD = 50;

export default function HeroSlideshow({ images, intervalMs = 6500 }: Props) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Desktop crossfade ─────────────────────────────────────────
  const desktopDragStart = useRef<number | null>(null);

  // ── Mobile scroll-snap carousel ───────────────────────────────
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const suppressScrollSync = useRef(false); // prevents feedback loops during programmatic scrolling

  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      const isMobile =
        typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
      setActive((i) => {
        const next = (i + 1) % images.length;
        if (isMobile) scrollMobileTo(next, true);
        return next;
      });
    }, intervalMs);
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

  // Sync mobile scroll position → active (for indicators)
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (suppressScrollSync.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth;
        if (!w) return;
        const idx = Math.round(el.scrollLeft / w);
        setActive((prev) => (prev !== idx ? idx : prev));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // When active changes via indicator/dot click on mobile, scroll to that slide
  const scrollMobileTo = (i: number, smooth: boolean) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    suppressScrollSync.current = true;
    el.scrollTo({ left: i * el.clientWidth, behavior: smooth ? "smooth" : "auto" });
    // Clear suppression after scroll settles
    window.setTimeout(() => {
      suppressScrollSync.current = false;
    }, smooth ? 500 : 50);
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

  const handleIndicatorClick = (i: number) => {
    const isMobile =
      typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) scrollMobileTo(i, true);
    else setActive(i);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ── Mobile carousel (native CSS scroll-snap for Instagram-grade fluidity) ── */}
      <div
        ref={mobileScrollRef}
        className="md:hidden absolute inset-0 flex overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory overscroll-x-contain"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {images.map((img, i) => (
          <div key={img.src} className="relative shrink-0 w-full h-full snap-start snap-always">
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

      {/* ── Desktop crossfade (click zones + prev/next arrows) ── */}
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
              onClick={() => handleIndicatorClick(i)}
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
