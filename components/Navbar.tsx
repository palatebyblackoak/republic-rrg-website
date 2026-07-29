"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "bg-bg" : "bg-bg/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
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
            {nav.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.15em] text-cream hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ) : (
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
              )
            )}
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

        {open && (
          <div className="lg:hidden pb-8 pt-2 border-t border-divider">
            <nav className="flex flex-col gap-1 pt-4">
              {nav.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 text-sm uppercase tracking-[0.15em] text-cream hover:text-accent"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`py-3 text-sm uppercase tracking-[0.15em] ${
                      isActive(link.href)
                        ? "text-accent"
                        : "text-cream hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/menu"
                className="mt-4 bg-accent text-white text-center text-[11px] uppercase tracking-[0.15em] px-5 py-3"
              >
                View the Menu
              </Link>
              <a
                href={site.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 border border-accent text-cream hover:bg-accent text-center text-[11px] uppercase tracking-[0.15em] px-5 py-3"
              >
                Reserve a Table
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
