import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import StarDivider from "./StarDivider";
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
    <footer className="bg-bg">
      <StarDivider variant="dark" className="pt-14 md:pt-20" />
      <div className="max-w-[1400px] mx-auto px-6 pt-12 md:pt-16 pb-14 md:pb-20 grid gap-10 md:gap-14 md:grid-cols-3">
        <div className="flex flex-col items-start">
          <Image
            src="/images/logo-footer.png"
            alt="Republic of the Rio Grande — Revolución!"
            width={300}
            height={500}
            className="w-40 md:w-48 h-auto"
          />
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
              <Link
                href="/gift-cards"
                className="text-[12px] uppercase tracking-[0.15em] text-muted hover:text-accent transition-colors"
              >
                Gift Cards
              </Link>
            </li>
            <li>
              <Link
                href="/employment"
                className="text-[12px] uppercase tracking-[0.15em] text-muted hover:text-accent transition-colors"
              >
                Employment
              </Link>
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-4 text-cream">
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

      <div className="bg-parchment">
        <div className="py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6 max-w-[1400px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-widest-2 text-ink-muted text-center md:text-left">
            © 2026 Republic of the Rio Grande · McAllen, Texas · All Rights Reserved
          </p>
          <a
            href="https://palatebyblackoak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] uppercase tracking-widest-2 text-ink-muted hover:text-ink transition-colors"
            aria-label="Design by Palate"
          >
            <span>Design by</span>
            <Image
              src="/images/palate-logo.png"
              alt="Palate"
              width={2000}
              height={759}
              className="w-16 h-auto invert opacity-80"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
