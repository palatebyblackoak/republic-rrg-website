import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Gift Cards · Republic of the Rio Grande",
  description:
    "Give the gift of Republic — brick oven, steaks, cocktails on the patio. Digital or physical, in any amount.",
};

const heroTriptych = [
  {
    src: img.steakPlated,
    alt: "Grilled ribeye with shishito peppers and mashed potatoes",
    position: "center 50%",
  },
  {
    src: img.cantinaCocktail,
    alt: "Pomegranate-blackberry cantina cocktail",
    position: "center 40%",
  },
  {
    src: img.breadPuddingVanilla,
    alt: "Warm bread pudding with vanilla ice cream and caramel drizzle",
    position: "center 55%",
  },
];

export default function GiftCardsPage() {
  return (
    <>
      <section className="relative h-[65svh] md:h-[70vh] min-h-[440px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 gap-[2px] bg-bg">
          {heroTriptych.map((tile) => (
            <div key={tile.src} className="relative overflow-hidden">
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                priority
                sizes="(max-width: 768px) 33vw, 33vw"
                style={{ objectPosition: tile.position }}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/40 to-bg/80" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-cream font-normal text-[40px] sm:text-[52px] md:text-[72px] leading-[1.05]">
            Give the Gift of Republic.
          </h1>
          <p className="mt-5 md:mt-6 text-muted font-light text-[15px] sm:text-[16px] md:text-[18px] max-w-xl mx-auto leading-[1.7]">
            Brick-oven dinners, cocktails in the cantina, celebrations worth
            remembering.
          </p>
        </div>
      </section>

      <section className="bg-parchment py-20 md:py-28">
        <div className="max-w-xl mx-auto px-6 text-center flex flex-col items-center">
          <p className="text-ink text-[16px] md:text-[17px] leading-[1.9]">
            Digital or physical, in any amount. Redeemable in-restaurant on
            their next visit.
          </p>
          <a
            href={site.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
          >
            Buy a Gift Card <ArrowRight />
          </a>
          <p className="mt-6 text-[11px] uppercase tracking-widest-2 text-ink-muted">
            Secure checkout via QuickGifts
          </p>
        </div>
      </section>
    </>
  );
}
