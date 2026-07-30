"use client";

import { useEffect, useRef, useState } from "react";
import { menu } from "@/lib/menu";

const edgeMask = {
  maskImage:
    "linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
};

export default function MenuTabs() {
  const [active, setActive] = useState<string>(menu[0].id);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const sections = menu
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollerRef.current;
    const el = tabRefs.current[active];
    if (!container || !el) return;
    const cr = container.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    const scrollDelta = er.left + er.width / 2 - (cr.left + cr.width / 2);
    container.scrollTo({
      left: container.scrollLeft + scrollDelta,
      behavior: "smooth",
    });
  }, [active]);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-surface border-y border-divider">
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={scrollerRef}
          className="overflow-x-auto no-scrollbar"
          style={edgeMask}
        >
          <div className="flex gap-5 md:gap-8 py-3 md:py-4 px-6 min-w-max">
            {menu.map((s) => {
              const isActive = active === s.id;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabRefs.current[s.id] = el;
                  }}
                  onClick={() => scrollTo(s.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-[12px] md:text-[13px] uppercase tracking-[0.15em] py-2 md:py-2.5 border-b-2 transition-colors whitespace-nowrap focus-visible:outline-1 focus-visible:outline focus-visible:outline-accent focus-visible:outline-offset-4 ${
                    isActive
                      ? "text-accent border-accent"
                      : "text-cream border-transparent hover:text-accent"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
