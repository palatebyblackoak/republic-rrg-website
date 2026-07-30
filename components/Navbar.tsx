"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
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
          <Link href="/" className="flex items-center" aria-label="Republic of the Rio Grande — Home">
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
              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-[0.15em] text-cream hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                );
              }
              if (isReserve) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group inline-flex flex-col items-center"
                  >
                    <span
                      className={`text-[11px] uppercase tracking-[0.15em] transition-colors ${
                        isActive(link.href)
                          ? "text-accent"
                          : "text-cream group-hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="mt-1.5 block h-[1.5px] w-6 bg-accent group-hover:w-full transition-all duration-500" />
                  </Link>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.15em] transition-colors ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-cream hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden text-cream w-10 h-10 flex flex-col items-center justify-center gap-1.5"
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

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 pb-8 border-t border-divider">
            <nav className="flex flex-col gap-1 pt-4">
              {nav.map((link) => {
                const isReserve = link.href === "/reservations";
                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 text-sm uppercase tracking-[0.15em] text-cream hover:text-accent"
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`py-3 text-sm uppercase tracking-[0.15em] ${
                      isActive(link.href) || isReserve
                        ? "text-accent"
                        : "text-cream hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
