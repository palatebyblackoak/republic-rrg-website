import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import DishCard from "@/components/DishCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatBar from "@/components/StatBar";
import EClubSection from "@/components/EClubSection";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import HeroSlideshow from "@/components/HeroSlideshow";
import { ArrowRight } from "@/components/Icons";

const heroSlides = [
  { src: img.heroPatio, alt: "Republic of the Rio Grande patio at night" },
  {
    src: img.pizzaOven,
    alt: "Wood-fired Republic pizza on branded stone at the brick oven",
  },
  {
    src: img.cantinaCocktail,
    alt: "Tropical cantina cocktail with pomegranate, chiles, and pineapple",
  },
  { src: img.patioLights, alt: "Covered patio under string lights" },
];

const dishes = [
  {
    name: "Stuffed Bacon Wrapped Quail",
    description:
      "Anaheim peppers, cream cheese, grill veggies, loaded mashed potatoes, port reduction.",
    price: "$20",
    image: img.quail,
  },
  {
    name: "Grilled Ribeye",
    description:
      "12 oz ribeye, potato au-gratin, bacon wrapped jalapeño, seasonal vegetables.",
    price: "$34",
    image: img.ribeye,
  },
  {
    name: "Ahi Tuna Ceviche",
    description:
      "Ahi tuna, jicama, avocado, serrano peppers, ginger vinaigrette, tortilla chips.",
    price: "$19",
    image: img.ceviche,
  },
  {
    name: "Avocado Salmon",
    description:
      "Grilled salmon fillet, creamy avocado sauce, parmesan, cilantro rice, seasonal vegetables.",
    price: "$25",
    image: img.salmon,
  },
  {
    name: "Avocado Chicken",
    description:
      "Grilled chicken breast, creamy avocado sauce, parmesan, cilantro rice, seasonal vegetables.",
    price: "$18",
    image: img.chicken,
  },
  {
    name: "Chimichurri Steak Salad",
    description:
      "Fajita, chimichurri sauce, mixed lettuce, asparagus, portobello mushrooms, avocado.",
    price: "$19",
    image: img.steakSalad,
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
      <section className="relative h-screen min-h-[640px] md:min-h-[720px] flex items-center justify-center overflow-hidden">
        <HeroSlideshow images={heroSlides} />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p
            className="text-[11px] uppercase tracking-widest-3 text-gold font-medium"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
          >
            Est. 1998 · McAllen, Texas
          </p>
          <h1
            className="mt-6 font-serif text-cream font-normal text-[44px] sm:text-[64px] md:text-[88px] leading-[1.05] md:leading-[1.02]"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}
          >
            Bask in the History
            <br />
            of the Republic.
          </h1>
          <p
            className="mt-6 md:mt-8 text-cream/90 font-light text-[15px] md:text-[18px] max-w-xl mx-auto leading-[1.7]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}
          >
            An iconic McAllen dining experience since 1998. Fire-crafted
            cuisine, a legendary covered patio, and a menu worth returning to.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            <a
              href={site.reservation}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[12px] md:text-[13px] px-7 md:px-9 py-4 transition-colors text-center"
            >
              Reserve a Table <ArrowRight />
            </a>
            <Link
              href="/menu"
              className="border border-cream text-cream hover:bg-cream hover:text-bg uppercase tracking-[0.15em] text-[12px] md:text-[13px] px-7 md:px-9 py-4 transition-colors text-center"
            >
              View the Menu <ArrowRight />
            </Link>
          </div>
          <p
            className="mt-8 md:mt-10 text-[10px] md:text-[11px] uppercase tracking-widest-2 text-cream/80"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
          >
            Open Mon–Sat · 11AM–Late · Closed Sunday
          </p>
        </div>
        <div className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 z-10 h-14 w-px bg-gold animate-scroll-line" />
      </section>

      {/* STATS */}
      <StatBar
        stats={[
          { number: "27+", label: "Years Serving McAllen" },
          { number: "1998", label: "Established" },
          { number: "#9", label: "Ranked in McAllen · TripAdvisor" },
          { number: "4.5★", label: "Yelp Rating · 277+ Reviews" },
        ]}
      />

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
        <div className="bg-bg flex items-center px-8 md:px-20 py-20">
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

      {/* FEATURED DISHES */}
      <section className="bg-bg py-24 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="text-center flex flex-col items-center">
            <SectionLabel label="Most Ordered" centered />
            <h2 className="font-serif text-cream text-[40px] md:text-[52px] leading-[1.1]">
              The dishes people come back for.
            </h2>
          </FadeIn>
          <div className="mt-16 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d, i) => (
              <FadeIn key={d.name} delay={i * 80}>
                <DishCard {...d} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/menu"
              className="inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
            >
              Explore the Full Menu <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* THE PATIO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={img.patioLights}
          alt="Outdoor covered patio with warm string lights"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/55" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="flex flex-col items-center">
            <SectionLabel label="The Patio" centered />
          </div>
          <h2 className="font-serif text-cream text-[42px] md:text-[64px] leading-[1.05]">
            McAllen&apos;s Most Beloved
            <br />
            Outdoor Dining Experience.
          </h2>
          <p className="mt-8 text-muted text-[16px] md:text-[18px] leading-[1.8] max-w-xl mx-auto">
            Our covered patio has hosted countless anniversaries, celebrations,
            and late nights under the Texas sky. Come for the food. Stay for
            the atmosphere.
          </p>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="bg-surface py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <SectionLabel label="Reservations" centered />
          <h2 className="font-serif text-cream text-[40px] md:text-[56px] leading-[1.1]">
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
      <section className="bg-bg py-24 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="text-center flex flex-col items-center">
            <SectionLabel label="What Guests Are Saying" centered />
            <h2 className="font-serif text-cream text-[38px] md:text-[48px] leading-[1.1]">
              A McAllen institution
              <br />
              for a reason.
            </h2>
          </FadeIn>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
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
