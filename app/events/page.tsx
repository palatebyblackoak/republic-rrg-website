import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import PrivateEventsWizard from "@/components/PrivateEventsWizard";

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
        overlay={0.88}
      />

      <section className="relative bg-surface overflow-hidden">
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-1/2 bg-parchment pointer-events-none"
          aria-hidden
        />
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
          <div className="-mx-6 md:mx-0 px-6 md:px-0 py-12 md:py-0 bg-parchment md:!bg-transparent md:!bg-none">
            <SectionLabel label="Private Dining & Catering" />
            <h2 className="font-serif text-ink text-[28px] sm:text-[36px] md:text-[44px] leading-tight">
              Host with us — or let us cater to you.
            </h2>
            <p className="mt-8 text-ink-muted text-[16px] leading-[1.8]">
              Private dining for birthdays, anniversaries, corporate dinners,
              and rehearsal dinners — plus off-site catering for events of any
              size. Tell us a little about yours and our team will follow up.
            </p>
            <p className="mt-6 text-ink-muted text-[14px]">
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

    </>
  );
}
