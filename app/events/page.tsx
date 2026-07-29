import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Events · Republic of the Rio Grande",
  description:
    "Private dining, corporate events, and celebrations at Republic of the Rio Grande in McAllen, TX.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Events"
        headline="Events at Republic."
        subhead="Private dining, special programming, and celebrations worth remembering."
        image={img.eventsHero}
        overlay={0.65}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div>
            <SectionLabel label="Private Dining" />
            <h2 className="font-serif text-cream text-[28px] sm:text-[36px] md:text-[48px] leading-tight">
              Host your next celebration with us.
            </h2>
            <p className="mt-8 text-muted text-[17px] leading-[1.8]">
              Republic of the Rio Grande is the perfect setting for birthdays,
              anniversaries, corporate dinners, and private celebrations. Our
              team will work with you to create an experience your guests will
              never forget.
            </p>
            <a
              href={site.phoneHref}
              className="mt-10 inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
            >
              Call to Inquire — {site.phone}
            </a>
          </div>
          <div className="relative w-full h-[320px] md:h-[440px]">
            <Image
              src={img.interior}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <SectionLabel label="Upcoming Events" centered />
          <h2 className="font-serif text-cream text-[28px] sm:text-[36px] md:text-[48px] leading-tight">
            More events coming soon.
          </h2>
          <p className="mt-6 text-muted text-[17px] leading-[1.8] max-w-lg">
            Follow us on social media to stay up to date on special
            programming, seasonal menus, and exclusive dining events.
          </p>
          <div className="mt-10 flex items-center gap-6 text-accent">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-accent-hover transition-colors"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent-hover transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href={site.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-accent-hover transition-colors"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
