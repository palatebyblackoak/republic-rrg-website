import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import EmploymentForm from "@/components/EmploymentForm";

export const metadata: Metadata = {
  title: "Employment · Republic of the Rio Grande",
  description:
    "Join the Republic of the Rio Grande team in McAllen, TX. We're always hiring — servers, cooks, bar, and more.",
};

export default function EmploymentPage() {
  return (
    <>
      <PageHero
        headline="Join the Republic Team."
        subhead="We're always hiring — servers, cooks, bar, and more."
        image={img.pizzaBrickOven}
        overlay={0.8}
      />

      <section className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="-mx-6 md:mx-0 px-6 md:px-10 py-12 md:py-14 bg-parchment">
            <SectionLabel label="Employment" />
            <h2 className="font-serif text-ink text-[28px] sm:text-[36px] md:text-[42px] leading-tight">
              We&apos;re always hiring.
            </h2>
            <p className="mt-8 text-ink-muted text-[16px] leading-[1.8]">
              Complete the form and one of our team members will be in touch
              shortly. Bring the energy — we&apos;ll bring the training.
            </p>
            <p className="mt-6 text-ink-muted text-[14px]">
              Prefer to email us directly?{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-accent hover:text-accent-hover transition-colors break-all"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-6 text-ink-muted text-[14px]">
              Or call{" "}
              <a
                href={site.phoneHref}
                className="text-accent hover:text-accent-hover transition-colors"
              >
                {site.phone}
              </a>
            </p>
          </div>
          <EmploymentForm />
        </div>
      </section>
    </>
  );
}
