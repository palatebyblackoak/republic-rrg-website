import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import StatBar from "@/components/StatBar";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About · Republic of the Rio Grande",
  description:
    "A McAllen institution since 1998. Fire-crafted cuisine, a legendary covered patio, and 27 years of local craft.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        headline={"27 Years at the Heart\nof McAllen."}
        image={img.aboutHero}
        overlay={0.6}
      />

      <section className="bg-bg py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 grid gap-14 md:grid-cols-2 md:gap-20 items-center">
          <FadeIn>
            <SectionLabel label="Since 1998" />
            <div className="space-y-6 text-muted text-[17px] leading-[1.8]">
              <p>
                Republic of the Rio Grande has been a McAllen institution since
                1998. What started as a vision to bring elevated, fire-crafted
                cuisine to the Rio Grande Valley has grown into one of the most
                beloved dining experiences in South Texas.
              </p>
              <p>
                Our menu is a celebration of Texas and Latin culinary traditions
                — steaks cut and cooked over fire, enchiladas made with care,
                handmade tortillas, and a patio that has hosted more
                celebrations than we can count.
              </p>
              <p>
                We are proud to be locally owned, locally rooted, and committed
                to the same standard of quality that has kept our tables full
                for over two decades.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="relative w-full h-[360px] md:h-[520px]">
              <Image
                src={img.interior}
                alt="Republic of the Rio Grande interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <StatBar
        stats={[
          { number: "27+", label: "Years in McAllen" },
          { number: "Locally Owned", label: "Since Day One" },
          { number: "Est. 1998", label: "McAllen, Texas" },
        ]}
      />

      <section className="relative h-[65svh] md:h-[70vh] min-h-[440px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src={img.patioNight}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="flex flex-col items-center">
            <SectionLabel label="The Patio" centered />
          </div>
          <h2 className="font-serif text-cream text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1]">
            The heart of Republic.
          </h2>
          <p className="mt-5 md:mt-6 text-muted text-[15px] sm:text-[17px] leading-[1.8] max-w-xl mx-auto">
            Our covered outdoor patio is the soul of the restaurant. Whether
            it&apos;s a quiet dinner for two or a celebration with the whole
            family — the patio is where Republic comes alive.
          </p>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <SectionLabel label="Part of the Family" centered />
          </div>
          <h2 className="font-serif text-cream text-[26px] sm:text-[32px] md:text-[40px] leading-tight">
            A family of McAllen dining traditions.
          </h2>
          <div className="mt-10 md:mt-12 grid gap-6 md:grid-cols-2">
            <div className="bg-bg p-8 md:p-10 border border-divider">
              <p className="text-[11px] uppercase tracking-widest-2 text-accent">
                Sister Restaurant
              </p>
              <h3 className="mt-3 font-serif text-cream text-[28px]">
                Santa Fe Steakhouse
              </h3>
            </div>
            <div className="bg-bg p-8 md:p-10 border border-divider">
              <p className="text-[11px] uppercase tracking-widest-2 text-accent">
                Sister Restaurant
              </p>
              <h3 className="mt-3 font-serif text-cream text-[28px]">
                University Draft House
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
