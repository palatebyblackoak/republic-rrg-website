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
        headline="Events at Republic."
        subhead="Private dining, special programming, and celebrations worth remembering."
        image={img.heroPatio}
        overlay={0.88}
      />

      <section className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-8 items-stretch">
          <div className="-mx-6 md:mx-0 px-6 md:px-10 py-12 md:py-14 bg-parchment">
            <SectionLabel label="Private Dining & Catering" />
            <h2 className="font-serif text-ink text-[28px] sm:text-[36px] md:text-[42px] leading-tight">
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
