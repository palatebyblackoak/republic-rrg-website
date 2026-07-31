import type { Metadata } from "next";
import { site } from "@/lib/site";
import { img } from "@/lib/images";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Gift Cards · Republic of the Rio Grande",
  description:
    "Give the gift of Republic — brick oven, steaks, cocktails on the patio, and celebrations worth remembering. Digital and physical gift cards available.",
};

const uses = [
  {
    label: "Birthdays & Anniversaries",
    body: "The classic. A dinner they'll remember longer than any wrapped box.",
  },
  {
    label: "Thank-Yous",
    body: "For the friend who moved you, the neighbor who watched the dog, the colleague who covered the shift.",
  },
  {
    label: "Just Because",
    body: "Slip it in a card. Text the code. Sometimes the smallest gestures land the hardest.",
  },
];

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        label="Gift Cards"
        headline="Give the Gift of Republic."
        subhead="A night on the patio, a plate from the brick oven, cocktails with someone who matters."
        image={img.patioLights}
        overlay={0.85}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <SectionLabel label="A Gift That Sits at the Table" centered />
          <p className="mt-2 text-muted text-[16px] md:text-[17px] leading-[1.9]">
            Republic gift cards are good for everything we do — brick-oven
            dinners, cocktails in the cantina, private celebrations, and
            weekend nights on the patio. Delivered digitally or as a physical
            card, in any amount you'd like.
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <SectionLabel label="For Every Occasion" centered />
          <div className="mt-4 grid md:grid-cols-3 gap-8 md:gap-12">
            {uses.map((u) => (
              <div key={u.label} className="text-center md:text-left">
                <h3 className="font-serif text-cream text-[22px] md:text-[26px] leading-tight">
                  {u.label}
                </h3>
                <p className="mt-4 text-muted text-[15px] leading-[1.8]">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <SectionLabel label="Ready When You Are" centered />
          <h2 className="font-serif text-cream text-[28px] sm:text-[36px] md:text-[44px] leading-tight">
            Purchase in under a minute.
          </h2>
          <p className="mt-6 text-muted text-[15px] leading-[1.8] max-w-lg">
            Choose your amount, add a personal note, and send it instantly by
            email — or mail a physical card. Redeemable in-restaurant on your
            next visit.
          </p>
          <a
            href={site.giftCards}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-accent hover:bg-accent-hover text-white uppercase tracking-[0.15em] text-[13px] px-9 py-4 transition-colors"
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
