import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
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
        label="Find Us"
        headline="Come Find Us."
        image={img.contactHero}
        overlay={0.65}
      />

      <section className="bg-surface">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
          <div className="p-12 md:p-16">
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
                <div className="flex items-center gap-5 text-muted">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-accent transition-colors"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-accent transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={site.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-accent transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={site.social.tripadvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TripAdvisor"
                    className="hover:text-accent transition-colors"
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
          </div>

          <div className="min-h-[420px] md:min-h-full relative bg-bg">
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
    </>
  );
}
