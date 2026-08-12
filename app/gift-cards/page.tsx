import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Gift Cards · Republic of the Rio Grande",
  description:
    "Give the gift of Republic. Brick oven, steaks, cocktails on the patio. Digital or physical, in any amount.",
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
      <section className="bg-bg pt-8 md:pt-12">
        <div className="grid grid-cols-3 gap-[3px] md:gap-[6px] h-[42svh] md:h-[58vh] min-h-[280px] md:min-h-[440px]">
          {heroTriptych.map((tile) => (
            <div key={tile.src} className="relative overflow-hidden">
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                priority
                sizes="33vw"
                style={{ objectPosition: tile.position }}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 pt-14 md:pt-20 pb-20 md:pb-28 text-center flex flex-col items-center">
          <h1 className="font-serif text-cream font-normal text-[40px] sm:text-[52px] md:text-[72px] leading-[1.05]">
            Give the Gift of Republic.
          </h1>
          <p className="mt-6 md:mt-8 text-muted font-light text-[15px] sm:text-[16px] md:text-[18px] max-w-xl leading-[1.7]">
            Brick-oven dinners, cocktails in the cantina, celebrations worth
            remembering. Digital or physical, in any amount, redeemable on
            their next visit.
          </p>
          <a
            href={site.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 md:mt-12 inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
          >
            Buy a Gift Card <ArrowRight />
          </a>
          <p className="mt-6 text-[11px] uppercase tracking-widest-2 text-muted">
            Secure checkout via QuickGifts
          </p>
        </div>
      </section>
    </>
  );
}
