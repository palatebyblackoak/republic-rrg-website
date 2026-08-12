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
import StarDivider from "@/components/StarDivider";
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
    src: img.pizzaGreensPlatter,
    alt: "Brick-oven pizza with avocado, arugula, and fresh greens on the branded Republic pewter platter",
  },
  {
    src: img.breadPuddingVanilla,
    alt: "Warm bread pudding with vanilla ice cream, caramel drizzle, and a rosemary sprig in the cantina",
  },
  {
    src: img.keyLimeStrawberry,
    alt: "Key lime dessert with fresh strawberries and strawberry coulis, paired with a sangria in the cantina",
  },
  {
    src: img.chicken,
    alt: "Grilled avocado chicken topped with pico de gallo, tomatillo cream, and micro greens in the cantina",
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
        <div className="relative z-10 text-center px-6 w-full max-w-md flex flex-col items-center">
          <div
            className="relative w-24 md:w-32 aspect-[300/525]"
            style={{ filter: "drop-shadow(0 2px 16px rgba(0,0,0,0.5))" }}
          >
            <Image
              src="/images/logo-hero-stamp.png"
              alt="Republic of the Rio Grande — Revolución!"
              fill
              priority
              sizes="(max-width: 768px) 96px, 128px"
              className="object-contain"
            />
          </div>

          <div className="mt-4 md:mt-5 flex flex-col sm:flex-row items-center gap-5 sm:gap-7">
            <a
              href={site.reservation}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center border border-cream/45 hover:border-accent px-7 md:px-9 py-3.5 md:py-4 transition-colors duration-[800ms] ease-out"
            >
              <span
                className="text-[13px] md:text-[15px] uppercase tracking-[0.25em] text-cream group-hover:text-accent transition-colors duration-[800ms] ease-out"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
              >
                Reserve the Evening
              </span>
            </a>
            <Link href="/menu" className="group inline-flex flex-col items-center">
              <span
                className="text-[13px] md:text-[15px] uppercase tracking-[0.25em] text-cream transition-colors group-hover:text-accent"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
              >
                Explore the Menu
              </span>
              <span className="mt-2.5 block h-[1.5px] w-10 bg-cream/50 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
            </Link>
          </div>
          <a
            href="#explore"
            aria-label="Scroll to explore"
            className="scroll-cue group mt-12 md:mt-16 inline-flex items-center justify-center w-8 h-8 text-cream/70 hover:text-accent transition-colors"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.75))" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section id="explore" className="bg-bg py-20 md:py-32 overflow-hidden scroll-mt-20">
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
          <Link href="/menu" className="group inline-flex flex-col items-center">
            <span className="text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-cream transition-colors group-hover:text-accent">
              Explore the Full Menu
            </span>
            <span className="mt-2.5 block h-[1.5px] w-10 bg-cream/50 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
          </Link>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-bg border-y border-divider py-8 md:py-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 text-center">
          <p className="text-[10px] md:text-[12px] uppercase tracking-widest-2 text-muted">
            Ranked <span className="text-cream">Top 10 of 607 Restaurants in McAllen</span> · TripAdvisor
          </p>
          <span className="hidden md:inline text-divider">|</span>
          <p className="text-[10px] md:text-[12px] uppercase tracking-widest-2 text-accent">
            Travelers Choice Award Winner
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-parchment py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <StarDivider variant="light" className="mb-14 md:mb-20" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <FadeIn className="text-center md:text-left">
              <h2 className="font-serif leading-[0.95]">
                <span className="block text-accent text-[48px] sm:text-[72px] md:text-[104px] font-medium">
                  27 YEARS
                </span>
                <span className="block text-ink text-[48px] sm:text-[72px] md:text-[104px] font-medium mt-1">
                  IN McALLEN
                </span>
                <span className="block italic text-ink/70 text-[22px] sm:text-[28px] md:text-[36px] mt-4 md:mt-5">
                  of history &amp; hospitality
                </span>
              </h2>
              <Link
                href="/about"
                className="group inline-flex flex-col items-center md:items-start mt-8 md:mt-10"
              >
                <span className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-ink transition-colors group-hover:text-accent">
                  Read Our Story
                </span>
                <span className="mt-2 block h-[1.5px] w-8 bg-ink/40 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
              </Link>
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
            <p className="text-ink-muted text-[16px] md:text-[17px] leading-[1.8]">
              For over two decades, Republic of the Rio Grande has been the
              table where McAllen celebrates. Fire-crafted cuisine, a legendary
              covered patio, and a menu worth returning to.
            </p>
            <p className="mt-5 text-ink text-[16px] md:text-[17px] leading-[1.8]">
              Come find your seat.
            </p>
          </FadeIn>

          <div className="mt-12 md:mt-20 grid gap-4 md:gap-6 md:grid-cols-2">
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
                href="/menu"
                cta="See the Menu"
                image={img.steakPlated}
                imageAlt="Grilled ribeye plated with shishito peppers, corn, and mashed potatoes"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* THE CANTINA */}
      <section className="relative h-[72svh] md:h-[80vh] min-h-[520px] md:min-h-[640px] flex items-center overflow-hidden">
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
              finds its <span className="text-accent">rhythm.</span>
            </h2>
            <p className="mt-5 md:mt-8 text-cream/85 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.75] max-w-lg drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
              The classics and our signatures. Wine, whiskey, cold beer.
              House mixers with the flavors of the Rio Grande. A room made
              for the way McAllen celebrates. Come thirsty. Stay a while.
            </p>
            <Link href="/reservations" className="group inline-flex flex-col items-start mt-7 md:mt-10">
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-cream transition-colors group-hover:text-accent">
                Reserve a Table
              </span>
              <span className="mt-2.5 block h-[1.5px] w-10 bg-accent group-hover:w-full transition-all duration-500" />
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
          <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-bg/20 to-bg/60" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn>
            <StarDivider variant="dark" className="mb-10 md:mb-14" />
          </FadeIn>
          <div className="max-w-md md:max-w-lg mx-auto">
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

      <EClubSection />
    </>
  );
}
