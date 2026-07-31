import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import PrivateEventsWizard from "@/components/PrivateEventsWizard";
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
        image={img.heroPatio}
        overlay={0.65}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
          <div className="md:pt-4">
            <SectionLabel label="Private Dining" />
            <h2 className="font-serif text-cream text-[28px] sm:text-[36px] md:text-[44px] leading-tight">
              Host your next celebration with us.
            </h2>
            <p className="mt-8 text-muted text-[16px] leading-[1.8]">
              Birthdays, anniversaries, corporate dinners, and private
              celebrations — tell us a little about your event and our team
              will follow up with details.
            </p>
            <p className="mt-6 text-muted text-[14px]">
              Prefer to talk?{" "}
              <a
                href={site.phoneHref}
                className="text-accent hover:text-accent-hover transition-colors"
              >
                Call {site.phone}
              </a>
            </p>
          </div>
          <PrivateEventsWizard />
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
