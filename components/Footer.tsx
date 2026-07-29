import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GoogleIcon,
  TripAdvisorIcon,
  YelpIcon,
} from "./Icons";

const socialLinks = [
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.twitter, label: "X", Icon: TwitterIcon },
  { href: site.social.google, label: "Google", Icon: GoogleIcon },
  { href: site.social.tripadvisor, label: "TripAdvisor", Icon: TripAdvisorIcon },
  { href: site.social.yelp, label: "Yelp", Icon: YelpIcon },
];

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Reservations", href: "/reservations" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-bg border-t-2 border-accent">
      <div className="max-w-[1400px] mx-auto px-6 py-20 grid gap-14 md:grid-cols-3">
        <div className="flex flex-col items-start">
          <Image
            src="/images/logo-footer.png"
            alt="Republic of the Rio Grande — Revolución!"
            width={300}
            height={500}
            className="w-40 md:w-48 h-auto"
          />
          <p className="font-serif italic text-[18px] text-muted mt-5">
            Grill &amp; Cantina
          </p>
          <div className="mt-4 space-y-1 text-[10px] uppercase tracking-widest-2 text-muted leading-relaxed">
            <p>Brick Oven · Steaks</p>
            <p>Seafood · Cantina</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-widest-2 text-accent">
            Explore
          </p>
          <div className="w-10 h-px bg-accent my-3" />
          <ul className="space-y-3">
            {footerNav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[12px] uppercase tracking-[0.15em] text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.giftCards}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] uppercase tracking-[0.15em] text-muted hover:text-accent transition-colors"
              >
                Gift Cards
              </a>
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-4 text-muted">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-accent transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-widest-2 text-accent">
            Hours
          </p>
          <div className="w-10 h-px bg-accent my-3" />
          <ul className="space-y-2 text-[13px] text-muted">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between max-w-[240px]">
                <span>{h.day}</span>
                <span className="text-cream">{h.time}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[11px] uppercase tracking-widest-2 text-accent">
            Contact
          </p>
          <div className="w-10 h-px bg-accent my-3" />
          <p className="text-[13px] text-muted">{site.address}</p>
          <a
            href={site.phoneHref}
            className="block text-[13px] text-muted hover:text-accent transition-colors mt-1"
          >
            {site.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-divider py-6">
        <p className="text-center text-[11px] uppercase tracking-widest-2 text-muted">
          © 2025 Republic of the Rio Grande · McAllen, Texas · All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
