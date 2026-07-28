import Link from "next/link";
import { site } from "@/lib/site";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
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

export default function TopBar() {
  return (
    <div className="hidden md:block bg-surface text-cream text-[11px] tracking-widest-2 uppercase relative z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-9 flex items-center justify-between">
        <div className="flex items-center gap-4 text-muted">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors hover:text-accent"
            >
              <Icon />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-muted normal-case tracking-normal text-[12px]">
            {site.address}
          </span>
          <span className="text-divider">|</span>
          <a
            href={site.phoneHref}
            className="text-muted normal-case tracking-normal text-[12px] hover:text-accent transition-colors"
          >
            {site.phone}
          </a>
          <span className="text-divider">|</span>
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
