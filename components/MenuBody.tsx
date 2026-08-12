"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { menu, type MenuItem } from "@/lib/menu";

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="py-5 border-b border-divider last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif font-semibold text-cream text-[20px]">
          {item.name}
        </h3>
        <span className="text-[14px] text-cream whitespace-nowrap">
          {item.price}
        </span>
      </div>
      {item.description && (
        <p className="mt-2 text-[14px] text-muted leading-[1.6]">
          {item.description}
        </p>
      )}
    </div>
  );
}

const edgeMask = {
  maskImage:
    "linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
};

const focusRing =
  "focus-visible:outline-1 focus-visible:outline focus-visible:outline-accent focus-visible:outline-offset-4";

export default function MenuBody() {
  const [activeId, setActiveId] = useState<string>(menu[0].id);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (menu.some((s) => s.id === hash)) setActiveId(hash);

    const onHash = () => {
      const h = window.location.hash.slice(1);
      if (menu.some((s) => s.id === h)) setActiveId(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentHash = window.location.hash.slice(1);
    if (currentHash !== activeId) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}#${activeId}`
      );
    }
  }, [activeId]);

  useEffect(() => {
    const container = scrollerRef.current;
    const el = tabRefs.current[activeId];
    if (!container || !el) return;
    const cr = container.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    const scrollDelta = er.left + er.width / 2 - (cr.left + cr.width / 2);
    container.scrollTo({
      left: container.scrollLeft + scrollDelta,
      behavior: "smooth",
    });
  }, [activeId]);

  const selectTab = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    const el = document.getElementById("menu-content");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 160;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const active = menu.find((s) => s.id === activeId) ?? menu[0];
  const activeIdx = menu.findIndex((s) => s.id === activeId);
  const nextSection = menu[activeIdx + 1] ?? null;

  return (
    <>
      <div className="sticky top-16 lg:top-24 z-30 bg-surface border-y border-divider">
        <div className="max-w-[1400px] mx-auto">
          <div
            ref={scrollerRef}
            className="overflow-x-auto no-scrollbar"
            style={edgeMask}
          >
            <div className="flex gap-5 md:gap-8 py-3 md:py-4 px-6 min-w-max">
              {menu.map((s) => {
                const isActive = activeId === s.id;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabRefs.current[s.id] = el;
                    }}
                    onClick={() => selectTab(s.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`text-[12px] md:text-[13px] uppercase tracking-[0.15em] py-2 md:py-2.5 border-b-2 transition-colors whitespace-nowrap ${focusRing} ${
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

      <section id="menu-content" className="bg-bg py-10 md:py-16 min-h-[70vh]">
        <div className="max-w-5xl mx-auto px-6">
          <div key={activeId} className="animate-menuFade">
            {active.note && (
              <p className="text-center max-w-2xl mx-auto mb-10 md:mb-12 text-muted text-[13px] italic leading-[1.7]">
                {active.note}
              </p>
            )}

            {active.groups ? (
              <div className="flex flex-col gap-10 md:gap-14">
                {active.groups.map((group, gi) => (
                  <div key={group.heading ?? `group-${gi}`}>
                    {group.heading && (
                      <div className="mb-6 md:mb-8 flex items-center gap-4">
                        <span className="h-px flex-1 bg-divider" aria-hidden />
                        <h3 className="font-serif text-cream text-[18px] md:text-[20px] uppercase tracking-[0.15em]">
                          {group.heading}
                        </h3>
                        <span className="h-px flex-1 bg-divider" aria-hidden />
                      </div>
                    )}
                    <div className="grid gap-x-14 md:grid-cols-2">
                      {group.items.map((item) => (
                        <MenuItemRow key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-x-14 md:grid-cols-2">
                {active.items?.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            )}

            {nextSection && (
              <div className="mt-14 md:mt-20 flex justify-center">
                <button
                  type="button"
                  onClick={() => selectTab(nextSection.id)}
                  className={`group inline-flex flex-col items-center ${focusRing}`}
                  aria-label={`Next: ${nextSection.label}`}
                >
                  <span className="text-[11px] uppercase tracking-widest-2 text-muted">
                    Up Next
                  </span>
                  <span className="mt-2 font-serif text-cream text-[22px] md:text-[28px] group-hover:text-accent transition-colors">
                    {nextSection.label}
                  </span>
                  <span className="mt-2 block h-[1.5px] w-8 bg-accent group-hover:w-16 transition-all duration-500" />
                </button>
              </div>
            )}

            <div className={`${nextSection ? "mt-14 md:mt-20" : "mt-14 md:mt-20"} pt-10 md:pt-14 border-t border-divider`}>
              <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                <span className="text-[11px] uppercase tracking-widest-2 text-muted">
                  Beyond the table
                </span>
                <h3 className="mt-3 font-serif text-cream text-[22px] md:text-[28px] leading-tight">
                  Private events and catering.
                </h3>
                <p className="mt-3 text-muted text-[14px] leading-[1.7]">
                  Host with us for birthdays, rehearsals, and corporate dinners, or let us cater your next gathering off-site.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
                  <Link
                    href="/events"
                    className={`group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-cream border border-divider hover:border-accent hover:text-accent px-5 py-3 transition-colors ${focusRing}`}
                  >
                    Plan an event
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    href="/events"
                    className={`group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-cream border border-divider hover:border-accent hover:text-accent px-5 py-3 transition-colors ${focusRing}`}
                  >
                    Catering inquiries
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
