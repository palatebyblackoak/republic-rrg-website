import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import EClubSection from "@/components/EClubSection";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import HeroSlideshow from "@/components/HeroSlideshow";
import StoryCard from "@/components/StoryCard";
import FoodMarquee from "@/components/FoodMarquee";
import { ArrowRight } from "@/components/Icons";

const heroSlides = [
  {
    src: img.patioLights,
    alt: "Covered patio with firepit, string lights, and white-cloth tables",
  },
  {
    src: img.steakPlated,
    alt: "Grilled ribeye with shishito peppers, corn, and mashed potatoes",
  },
  { src: img.heroPatio, alt: "Republic of the Rio Grande patio at night" },
  {
    src: img.salmonWide,
    alt: "Grilled avocado salmon with pico de gallo, corn relish, and Caymus Chardonnay",
  },
  {
    src: img.filetTexasWide,
    alt: "Texas Filet with mashed potatoes, grilled asparagus, and port mushroom sauce",
  },
  {
    src: img.pizzaOven,
    alt: "Wood-fired Margherita pizza on the branded Republic pewter platter",
  },
  {
    src: img.pizzaSpecialty,
    alt: "Specialty brick-oven pizza with avocado and fresh greens on the branded Republic platter",
  },
  {
    src: img.pizzaMushroom,
    alt: "Wild mushroom brick-oven pizza with basil on the branded Republic platter",
  },
  {
    src: img.cantinaCocktail,
    alt: "Pomegranate-blackberry cantina cocktail with dried chiles on the bar",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[560px] md:min-h-[640px] flex items-end justify-center overflow-hidden pb-20 md:pb-24">
        <HeroSlideshow images={heroSlides} />
        <div className="relative z-10 text-center px-6 w-full max-w-2xl flex flex-col items-center gap-7 md:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 md:gap-12">
            <Link href="/menu" className="group inline-flex flex-col items-center">
              <span
                className="text-[13px] md:text-[14px] uppercase tracking-[0.25em] text-cream transition-colors group-hover:text-accent"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.75)" }}
              >
                See the Menu
              </span>
              <span className="mt-2.5 block h-[2px] w-10 bg-cream/50 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
            </Link>
            <span className="hidden sm:inline text-cream/30 text-sm" aria-hidden>
              ·
            </span>
            <a
              href={site.reservation}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center"
            >
              <span
                className="text-[13px] md:text-[14px] uppercase tracking-[0.25em] text-cream transition-colors group-hover:text-accent"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.75)" }}
              >
                Reserve a Table
              </span>
              <span className="mt-2.5 block h-[2px] w-10 bg-accent group-hover:w-full transition-all duration-500" />
            </a>
          </div>
          <p
            className="text-[10px] md:text-[11px] uppercase tracking-widest-2 text-cream/85"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
          >
            Open Mon–Sat · 11AM–Late · Closed Sunday
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-bg py-16 md:py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="text-center flex flex-col items-center">
            <SectionLabel label="Gallery" centered />
            <h2 className="font-serif text-cream text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1]">
              A table worth returning to.
            </h2>
          </FadeIn>
        </div>
        <div className="mt-10 md:mt-16">
          <FoodMarquee />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 mt-12 md:mt-16 text-center">
          <Link
            href="/menu"
            className="inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
          >
            Explore the Full Menu <ArrowRight />
          </Link>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-bg py-16 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-widest-3 text-accent font-medium">
              Est. 1998
            </p>
            <p className="mt-5 font-serif italic text-cream text-[22px] md:text-[28px]">
              A McAllen Institution
            </p>
          </FadeIn>

          <div className="mt-14 md:mt-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="text-center md:text-left">
              <h2 className="font-serif leading-[0.95]">
                <span className="block text-accent text-[48px] sm:text-[72px] md:text-[104px] font-medium">
                  27 YEARS
                </span>
                <span className="block text-cream text-[48px] sm:text-[72px] md:text-[104px] font-medium mt-1">
                  IN McALLEN
                </span>
                <span className="block italic text-cream/85 text-[22px] sm:text-[28px] md:text-[36px] mt-4 md:mt-5">
                  of history &amp; hospitality
                </span>
              </h2>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="relative aspect-[4/3] md:aspect-square w-full overflow-hidden">
                <Image
                  src={img.pizzaBrickOven}
                  alt="Republic pizza fresh from the brick oven"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-14 md:mt-20 max-w-2xl mx-auto text-center">
            <p className="text-muted text-[16px] md:text-[17px] leading-[1.8]">
              For over two decades, Republic of the Rio Grande has been the
              table where McAllen celebrates. Fire-crafted cuisine, a legendary
              covered patio, and a menu worth returning to.
            </p>
            <p className="mt-5 text-cream text-[16px] md:text-[17px] leading-[1.8]">
              Come find your seat.
            </p>
          </FadeIn>

          <div className="mt-12 md:mt-20 grid gap-4 md:gap-6 md:grid-cols-3">
            <FadeIn delay={0}>
              <StoryCard
                eyebrow="Under the Lights"
                title="The Patio"
                href="/reservations"
                cta="Reserve a Table"
                image={img.heroPatio}
                imageAlt="Republic patio at night"
              />
            </FadeIn>
            <FadeIn delay={120}>
              <StoryCard
                eyebrow="Fire-Crafted"
                title="The Kitchen"
                href="/reservations"
                cta="Reserve a Table"
                image={img.steakPlated}
                imageAlt="Grilled ribeye plated with shishito peppers, corn, and mashed potatoes"
              />
            </FadeIn>
            <FadeIn delay={240}>
              <StoryCard
                eyebrow="After Dark"
                title="The Cantina"
                href="/reservations"
                cta="Reserve a Table"
                image={img.cantinaCocktail}
                imageAlt="Cantina cocktail"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* THE CANTINA */}
      <section className="relative h-[82svh] md:h-[80vh] min-h-[540px] md:min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={img.cantinaSangria}
            alt="Sangria-style cantina cocktail with pomegranate, blackberries, chile, and citrus at the bar"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20 md:from-bg md:via-bg/60 md:to-transparent" />
        <div className="absolute inset-0 md:hidden bg-bg/40" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-20">
          <FadeIn className="max-w-xl">
            <SectionLabel label="The Cantina" />
            <h2 className="font-serif text-cream text-[30px] sm:text-[40px] md:text-[64px] leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)]">
              Where the night
              <br />
              finds its rhythm.
            </h2>
            <p className="mt-5 md:mt-8 text-cream/85 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.75] max-w-lg drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
              Tequila-forward cocktails, house-made mixers, and the flavors of
              the Rio Grande — pomegranate, chile, pineapple, citrus. A cantina
              built for the way McAllen celebrates. Come thirsty. Stay a while.
            </p>
            <Link
              href="/reservations"
              className="inline-block mt-7 md:mt-10 bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-8 md:px-9 py-4 transition-colors"
            >
              Reserve a Table <ArrowRight />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="relative min-h-[560px] md:min-h-[720px] flex items-center py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={img.patioLights}
            alt="Republic covered patio at night — reserve your evening"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-bg/65 md:bg-bg/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-bg/30 to-bg/50 md:from-transparent md:via-bg/20 md:to-bg/80" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-md md:max-w-lg mx-auto md:mx-0 md:ml-auto">
            <FadeIn>
              <div className="bg-surface/95 backdrop-blur-sm border-t-[3px] border-accent p-8 sm:p-10 md:p-12">
                <p className="text-[10px] md:text-[11px] uppercase tracking-widest-3 text-accent font-medium">
                  Reservations
                </p>
                <h2 className="mt-4 md:mt-5 font-serif text-cream text-[30px] sm:text-[38px] md:text-[48px] leading-[1.05]">
                  Reserve the evening.
                </h2>
                <p className="mt-4 md:mt-5 text-muted text-[14px] md:text-[15px] leading-[1.75]">
                  Book instantly through OpenTable or call us. For weekend
                  evenings, we recommend reserving ahead.
                </p>
                <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={site.reservation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[12px] md:text-[13px] px-6 md:px-8 py-4 transition-colors text-center"
                  >
                    Reserve a Table <ArrowRight />
                  </a>
                  <a
                    href={site.phoneHref}
                    className="border border-cream/40 text-cream hover:bg-cream hover:text-bg uppercase tracking-[0.15em] text-[12px] md:text-[13px] px-6 md:px-8 py-4 transition-colors text-center"
                  >
                    Call {site.phone}
                  </a>
                </div>
                <p className="mt-6 md:mt-7 pt-5 md:pt-6 border-t border-divider text-[10px] md:text-[11px] uppercase tracking-widest-2 text-muted">
                  Walk-ins welcome based on availability
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-bg border-t border-divider py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 text-center">
          <p className="text-[10px] md:text-[12px] uppercase tracking-widest-2 text-muted">
            Ranked <span className="text-cream">#9 of 607 in McAllen</span> · TripAdvisor
          </p>
          <span className="hidden md:inline text-divider">|</span>
          <p className="text-[10px] md:text-[12px] uppercase tracking-widest-2 text-accent">
            Travelers Choice Award Winner
          </p>
        </div>
      </section>

      <EClubSection />
    </>
  );
}
