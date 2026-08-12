import Link from "next/link";
import { navUtility, site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="bg-parchment text-ink relative z-50 border-b border-ink/10">
      {/* Mobile: centered — script "Visit us at" + full address */}
      <div className="md:hidden max-w-[1400px] mx-auto px-4 py-1.5 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5">
        <span className="font-serif italic text-accent text-[13px] whitespace-nowrap">
          Visit us at
        </span>
        <a
          href={site.mapsDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase tracking-widest-2 text-[10px] text-ink whitespace-nowrap"
        >
          1411 S 10th St, McAllen, Texas
        </a>
      </div>

      {/* Desktop: address left, quick links + eClub right */}
      <div className="hidden md:flex max-w-[1400px] mx-auto px-6 h-9 items-center justify-between">
        <div className="flex items-baseline gap-2 text-[12px]">
          <span className="font-serif italic text-accent">Visit us at</span>
          <a
            href={site.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest-2 text-[11px] text-ink hover:text-accent transition-colors"
          >
            1411 S 10th St, McAllen, Texas
          </a>
          <span className="text-ink/30">·</span>
          <a
            href={site.phoneHref}
            className="uppercase tracking-widest-2 text-[11px] text-ink hover:text-accent transition-colors"
          >
            {site.phone}
          </a>
        </div>
        <div className="flex items-center gap-6">
          {navUtility.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="uppercase tracking-widest-2 text-[11px] text-ink hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#eclub"
            className="bg-accent hover:bg-accent-hover text-white px-3 py-1 uppercase tracking-widest-2 text-[10px] transition-colors"
          >
            Join eClub
          </Link>
        </div>
      </div>
    </div>
  );
}
