"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
};

const panClasses = ["pan-a", "pan-b", "pan-c", "pan-d", "pan-e"];

export default function HeroSlideshow({ images, intervalMs = 6500 }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden">
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
              className="object-cover"
            />
          </div>
        </div>
      ))}

      {/* Base darken keeps photos vivid but readable */}
      <div className="absolute inset-0 bg-bg/20" />
      {/* Bottom-weighted gradient anchors CTAs */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/10 to-bg/85" />
      {/* Cinematic edge vignette adds depth without darkening the subject */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Slide indicators */}
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
