import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Gift Cards · Republic of the Rio Grande",
  description:
    "Give the gift of Republic — brick oven, steaks, cocktails on the patio. Digital or physical, in any amount.",
};

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        label="Gift Cards"
        headline="Give the Gift of Republic."
        subhead="Brick-oven dinners, cocktails in the cantina, celebrations worth remembering."
        image={img.pizzaBrickOven}
        overlay={0.72}
      />

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
