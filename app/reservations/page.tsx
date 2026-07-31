import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Reservations · Republic of the Rio Grande",
  description:
    "Reserve your table online through OpenTable or call us directly. Walk-ins welcome based on availability.",
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        label="Reservations"
        headline="Reserve Your Table."
        subhead="We recommend reserving in advance, especially for Friday and Saturday evenings."
        image={img.salmonWide}
        overlay={0.88}
      />

      <section className="bg-bg py-2">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-0.5">
          <div className="bg-surface p-10 sm:p-14 md:p-16 flex flex-col">
            <SectionLabel label="Reserve Online" />
            <p className="text-muted text-[16px] leading-[1.8] max-w-md">
              Book your table instantly through OpenTable.
            </p>
            <div className="mt-auto pt-10">
              <a
                href={site.reservation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
              >
                Reserve a Table <ArrowRight />
              </a>
            </div>
          </div>

          <div className="bg-surface p-10 sm:p-14 md:p-16 flex flex-col">
            <SectionLabel label="Call to Reserve" />
            <p className="text-muted text-[16px] leading-[1.8] max-w-md">
              Prefer to speak with us directly? Give us a call — especially
              recommended for Friday and Saturday.
            </p>
            <p className="mt-8 font-serif text-cream text-[28px] sm:text-[36px]">
              {site.phone}
            </p>
            <div className="mt-auto pt-10">
              <a
                href={site.phoneHref}
                className="inline-block border border-cream text-cream hover:bg-cream hover:text-bg uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <SectionLabel label="Hours" centered />
          <ul className="space-y-3 text-[16px] w-full max-w-sm">
            {site.hours.map((h) => (
              <li
                key={h.day}
                className="flex justify-between border-b border-divider pb-2"
              >
                <span className="text-muted">{h.day}</span>
                <span className="text-cream">{h.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[12px] uppercase tracking-widest-2 text-muted">
            Walk-ins welcome based on availability.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <SectionLabel label="Gift Cards" centered />
          <h2 className="font-serif text-cream text-[28px] sm:text-[36px] md:text-[48px] leading-tight">
            Give the Gift of Republic.
          </h2>
          <p className="mt-6 text-muted text-[16px] leading-[1.7] max-w-lg">
            Perfect for birthdays, anniversaries, and every celebration in
            between.
          </p>
          <a
            href={site.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
          >
            Purchase a Gift Card <ArrowRight />
          </a>
        </div>
      </section>
    </>
  );
}
