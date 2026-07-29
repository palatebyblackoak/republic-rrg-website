import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import TestimonialCard from "@/components/TestimonialCard";
import EClubSection from "@/components/EClubSection";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import HeroSlideshow from "@/components/HeroSlideshow";
import StoryCard from "@/components/StoryCard";
import FoodMarquee from "@/components/FoodMarquee";
import { ArrowRight } from "@/components/Icons";

const heroSlides = [
  { src: img.heroPatio, alt: "Republic of the Rio Grande patio at night" },
  {
    src: img.patioLights,
    alt: "Covered patio with firepit, string lights, and white-cloth tables",
  },
  {
    src: img.salmonWide,
    alt: "Grilled avocado salmon with pico de gallo, corn relish, and Caymus Chardonnay",
  },
  {
    src: img.steakPlated,
    alt: "Grilled ribeye with shishito peppers, corn, and mashed potatoes",
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

const testimonials = [
  {
    quote:
      "The patio is beautiful and the food is outstanding. The filet mignon and avocado salmon are must-orders. One of the best restaurants in the Valley.",
    reviewer: "Verified Guest",
    platform: "TripAdvisor",
  },
  {
    quote:
      "Been coming here for years. The stuffed quail is unlike anything else in McAllen. Service is always attentive and the atmosphere is perfect for a special occasion.",
    reviewer: "Verified Guest",
    platform: "Yelp",
  },
  {
    quote:
      "The ahi tuna ceviche is a standout. Handmade tortillas, beautiful patio, and a menu that keeps you coming back. Republic is a McAllen institution.",
    reviewer: "Verified Guest",
    platform: "TripAdvisor",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[560px] md:min-h-[640px] flex items-end justify-center overflow-hidden pb-24 md:pb-28">
        <HeroSlideshow images={heroSlides} />
        <div className="relative z-10 text-center px-6 w-full max-w-xl">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full">
            <Link
              href="/menu"
              className="bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[12px] md:text-[13px] px-7 md:px-9 py-4 transition-colors text-center"
            >
              View the Menu <ArrowRight />
            </Link>
            <a
              href={site.reservation}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream text-cream hover:bg-cream hover:text-bg uppercase tracking-[0.15em] text-[12px] md:text-[13px] px-7 md:px-9 py-4 transition-colors text-center"
            >
              Reserve a Table <ArrowRight />
            </a>
          </div>
          <p
            className="mt-5 md:mt-6 text-[10px] md:text-[11px] uppercase tracking-widest-2 text-cream/85"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
          >
            Open Mon–Sat · 11AM–Late · Closed Sunday
          </p>
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
                href="/menu"
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

      {/* EXPERIENCE */}
      <section className="grid md:grid-cols-2 min-h-[600px]">
        <div className="relative min-h-[400px] md:min-h-full">
          <Image
            src={img.pizzaOven}
            alt="Wood-fired Republic pizza fresh from the brick oven"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="bg-bg flex items-center px-6 md:px-20 py-20">
          <FadeIn>
            <SectionLabel label="The Experience" />
            <h2 className="font-serif text-cream text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1]">
              Where McAllen comes
              <br />
              to celebrate.
            </h2>
            <p className="mt-8 text-muted text-[17px] leading-[1.8] max-w-lg">
              For over 27 years, Republic of the Rio Grande has been the table
              where McAllen&apos;s most memorable moments happen. From our
              fire-crafted steaks to our legendary covered patio, every detail
              is designed to make you linger a little longer.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-[13px] uppercase tracking-[0.15em] text-accent hover:underline"
            >
              Our Story <ArrowRight />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-bg py-16 md:py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="text-center flex flex-col items-center">
            <SectionLabel label="Gallery" centered />
            <h2 className="font-serif text-cream text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1]">
              This is why they keep
              <br />
              coming back.
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

      {/* THE CANTINA */}
      <section className="grid md:grid-cols-2 min-h-[600px]">
        <div className="bg-surface flex items-center px-6 md:px-20 py-20 md:py-24 order-2 md:order-1">
          <FadeIn>
            <SectionLabel label="The Cantina" />
            <h2 className="font-serif text-cream text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1]">
              Where the night
              <br />
              finds its rhythm.
            </h2>
            <p className="mt-6 md:mt-8 text-muted text-[16px] md:text-[17px] leading-[1.8] max-w-lg">
              Tequila-forward cocktails, house-made mixers, and the flavors of
              the Rio Grande — pomegranate, chile, pineapple, citrus. A cantina
              built for the way McAllen celebrates. Come thirsty. Stay a while.
            </p>
            <Link
              href="/menu"
              className="inline-block mt-8 text-[13px] uppercase tracking-[0.15em] text-accent hover:underline"
            >
              See the Menu <ArrowRight />
            </Link>
          </FadeIn>
        </div>
        <div className="relative min-h-[380px] md:min-h-full order-1 md:order-2">
          <Image
            src={img.cantinaSangria}
            alt="Sangria-style cantina cocktail with pomegranate, blackberries, chile, and citrus at the bar"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* THE PATIO */}
      <section className="relative h-[100svh] min-h-[540px] md:min-h-[600px] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 animate-slow-pan">
          <Image
            src={img.patioLights}
            alt="Outdoor covered patio with warm string lights"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 via-40% to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl pb-16 md:pb-24">
          <div className="flex flex-col items-center">
            <SectionLabel label="The Patio" centered />
          </div>
          <h2 className="font-serif text-cream text-[34px] sm:text-[42px] md:text-[64px] leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            McAllen&apos;s Most Beloved
            <br />
            Outdoor Dining Experience.
          </h2>
          <p className="mt-8 text-cream/85 text-[16px] md:text-[18px] leading-[1.8] max-w-xl mx-auto drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)]">
            Our covered patio has hosted countless anniversaries, celebrations,
            and late nights under the Texas sky. Come for the food. Stay for
            the atmosphere.
          </p>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="bg-surface py-16 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <SectionLabel label="Reservations" centered />
          <h2 className="font-serif text-cream text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1]">
            Your table is waiting.
          </h2>
          <p className="mt-6 text-muted text-[17px] max-w-xl leading-[1.7]">
            Reserve online through OpenTable or call us directly. For Friday and
            Saturday, we recommend calling ahead.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href={site.reservation}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
            >
              Reserve a Table <ArrowRight />
            </a>
            <a
              href={site.phoneHref}
              className="border border-cream text-cream hover:bg-cream hover:text-bg uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
            >
              Call {site.phone}
            </a>
          </div>
          <p className="mt-6 text-[12px] uppercase tracking-widest-2 text-muted">
            Walk-ins welcome based on availability.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-bg py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="text-center flex flex-col items-center">
            <SectionLabel label="What Guests Are Saying" centered />
            <h2 className="font-serif text-cream text-[30px] sm:text-[38px] md:text-[48px] leading-[1.1]">
              A McAllen institution
              <br />
              for a reason.
            </h2>
          </FadeIn>
          <div className="mt-10 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.quote} delay={i * 120}>
                <TestimonialCard {...t} />
              </FadeIn>
            ))}
          </div>
          <p className="mt-12 text-center text-[13px] text-muted">
            Ranked #9 of 607 Restaurants in McAllen · TripAdvisor
            <br />
            Travelers Choice Award Winner
          </p>
        </div>
      </section>

      <EClubSection />
    </>
  );
}
