"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
};

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
          <div
            className={`absolute inset-0 ${
              i === active ? "kenburns-active" : ""
            }`}
          >
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

      {/* Light base darken so photos remain vivid */}
      <div className="absolute inset-0 bg-bg/25" />
      {/* Bottom-weighted gradient to anchor buttons */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/10 to-bg/85" />

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-[3px] transition-all duration-500 ${
                i === active ? "w-10 bg-accent" : "w-6 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .kenburns-active {
          animation: kenburns 12s ease-out forwards;
        }
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.08) translate(-1%, -1%);
          }
        }
      `}</style>
    </div>
  );
}
