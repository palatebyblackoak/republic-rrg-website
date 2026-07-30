"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

const focusRing =
  "focus-visible:outline-1 focus-visible:outline focus-visible:outline-accent focus-visible:outline-offset-4";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setOpen(false);
    hamburgerRef.current?.focus();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <a
        href="#main"
        className={`sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-[12px] focus:uppercase focus:tracking-[0.15em] ${focusRing}`}
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 backdrop-blur-sm">
        {/* Gradient scrim — always visible; extends below header for soft fade over hero */}
        <div className="absolute inset-x-0 top-0 h-24 md:h-32 pointer-events-none bg-gradient-to-b from-bg via-bg/70 to-transparent" />
        {/* Solid bg — fades in on scroll or drawer open */}
        <div
          className={`absolute inset-0 pointer-events-none bg-bg transition-opacity duration-300 ${
            scrolled || open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className={`flex items-center ${focusRing}`}
              aria-label="Republic of the Rio Grande — Home"
            >
              <Image
                src="/images/logo-nav.png"
                alt="Republic of the Rio Grande"
                width={400}
                height={100}
                priority
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {nav.map((link) => {
                const isReserve = link.href === "/reservations";
                const active = isActive(link.href);
                const base = `group relative text-[12px] uppercase tracking-[0.15em] transition-colors ${focusRing} ${
                  active ? "text-accent" : "text-cream hover:text-accent"
                }`;

                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={base}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={base}
                  >
                    {link.label}
                    {isReserve ? (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 block h-[1.5px] w-6 bg-accent group-hover:w-full transition-all duration-500" />
                    ) : active ? (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 block h-[1.5px] w-6 bg-cream/40" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <button
              ref={hamburgerRef}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className={`lg:hidden text-cream w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${focusRing}`}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`block w-6 h-px bg-cream transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-cream transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-px bg-cream transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          id="mobile-drawer"
          aria-hidden={!open}
          className={`lg:hidden absolute inset-x-0 top-full overflow-hidden bg-bg border-t border-divider transition-all duration-300 ease-out ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 pt-2 pb-8">
            <nav className="flex flex-col gap-1 pt-4">
              {nav.map((link) => {
                const isReserve = link.href === "/reservations";
                const active = isActive(link.href);
                const tabIndex = open ? 0 : -1;
                const base = `flex items-center gap-3 py-3 text-sm uppercase tracking-[0.15em] transition-colors ${focusRing} ${
                  isReserve
                    ? "text-accent"
                    : active
                    ? "text-cream"
                    : "text-cream hover:text-accent"
                }`;
                const indicator = (
                  <span
                    className={`block h-1.5 w-1.5 rounded-full shrink-0 ${
                      active && !isReserve ? "bg-accent" : "bg-transparent"
                    }`}
                    aria-hidden
                  />
                );

                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={tabIndex}
                      className={base}
                    >
                      {indicator}
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    tabIndex={tabIndex}
                    aria-current={active ? "page" : undefined}
                    className={base}
                  >
                    {indicator}
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close menu"
        aria-hidden={!open}
        tabIndex={-1}
        onClick={closeMenu}
        className={`lg:hidden fixed top-16 md:top-20 inset-x-0 bottom-0 z-30 bg-bg/65 backdrop-blur-sm transition-opacity duration-300 focus:outline-none ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}
