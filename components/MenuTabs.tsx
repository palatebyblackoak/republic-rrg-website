"use client";

import { useEffect, useState } from "react";
import { menu } from "@/lib/menu";

export default function MenuTabs() {
  const [active, setActive] = useState<string>(menu[0].id);

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-surface border-y border-divider">
      <div className="max-w-[1400px] mx-auto px-4 overflow-x-auto">
        <div className="flex gap-6 md:gap-10 py-4 min-w-max">
          {menu.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`text-[11px] uppercase tracking-[0.15em] py-2 border-b-2 transition-colors whitespace-nowrap ${
                active === s.id
                  ? "text-accent border-accent"
                  : "text-cream border-transparent hover:text-accent"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
