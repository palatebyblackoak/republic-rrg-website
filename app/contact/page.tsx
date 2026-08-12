import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  TripAdvisorIcon,
} from "@/components/Icons";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact · Republic of the Rio Grande",
  description:
    "Come find us at 1411 S 10th St, McAllen, TX 78501. Call (956) 994-8385 or email us anytime.",
};

const mapEmbed =
  "https://www.google.com/maps?q=1411+S+10th+St,+McAllen,+TX+78501&output=embed";

export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Come Find Us."
        image={img.patioNight}
        overlay={0.88}
      />

      <section className="bg-surface">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="p-8 sm:p-12 md:p-16">
            <SectionLabel label="Republic of the Rio Grande" />

            <div className="space-y-8 text-[15px]">
              <div>
                <p className="text-[11px] uppercase tracking-widest-2 text-muted mb-2">
                  Address
                </p>
                <p className="text-cream">{site.addressLine1}</p>
                <p className="text-cream">{site.addressLine2}</p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest-2 text-muted mb-2">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="text-cream hover:text-accent transition-colors"
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest-2 text-muted mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-cream hover:text-accent transition-colors break-all"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest-2 text-muted mb-2">
                  Hours
                </p>
                <ul className="space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between max-w-xs">
                      <span className="text-muted">{h.day}</span>
                      <span className="text-cream">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest-2 text-muted mb-3">
                  Follow
                </p>
                <div className="-ml-2 flex items-center gap-1 text-cream">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center w-11 h-11 hover:text-accent transition-colors"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center w-11 h-11 hover:text-accent transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={site.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="inline-flex items-center justify-center w-11 h-11 hover:text-accent transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={site.social.tripadvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TripAdvisor"
                    className="inline-flex items-center justify-center w-11 h-11 hover:text-accent transition-colors"
                  >
                    <TripAdvisorIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <a
              href={site.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
            >
              Get Directions <ArrowRight />
            </a>

            <p className="mt-10 text-[13px] text-muted">
              Interested in joining the team?{" "}
              <Link
                href="/employment"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                Apply for a position →
              </Link>
            </p>
          </div>

          <div className="min-h-[340px] md:min-h-full relative bg-bg">
            <iframe
              title="Republic of the Rio Grande location map"
              src={mapEmbed}
              className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="-mx-6 md:mx-0 px-6 md:px-10 py-12 md:py-14 bg-parchment">
            <SectionLabel label="Get in Touch" />
            <h2 className="font-serif text-ink text-[28px] sm:text-[36px] md:text-[42px] leading-tight">
              Questions or feedback?
            </h2>
            <p className="mt-8 text-ink-muted text-[16px] leading-[1.8]">
              Send us a note and our team will be in touch shortly. For
              reservations, please{" "}
              <Link
                href="/reservations"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                book a table
              </Link>
              . For private dining or catering, use our{" "}
              <Link
                href="/events"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                events form
              </Link>
              .
            </p>
            <p className="mt-6 text-ink-muted text-[14px]">
              Prefer to call?{" "}
              <a
                href={site.phoneHref}
                className="text-accent hover:text-accent-hover transition-colors"
              >
                {site.phone}
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
