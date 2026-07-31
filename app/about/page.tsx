import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About · Republic of the Rio Grande",
  description:
    "The name comes from a 283-day republic declared along the Rio Grande in 1840. The restaurant carries that name forward — McAllen, since 1998.",
};

const timeline = [
  { year: "Jan 1840", event: "The Republic of the Rio Grande is proclaimed. Laredo named capital." },
  { year: "Jan 17", event: "Jesús Cárdenas, a lawyer from Reynosa, is chosen president." },
  { year: "Summer", event: "Battles along the Rio Grande. Villages taken, retaken, and lost." },
  { year: "Nov 1840", event: "Canales surrenders at Camargo. The republic dissolves after 283 days." },
  { year: "1998", event: "The name comes back — to a table in McAllen." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-bg overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center">
          <FadeIn className="flex flex-col items-center">
            <div className="relative w-24 md:w-32 aspect-square mb-8 md:mb-10">
              <Image
                src={img.rrgSeal}
                alt="Republic of the Rio Grande seal"
                fill
                priority
                sizes="(max-width: 768px) 96px, 128px"
                className="object-contain invert opacity-90"
              />
            </div>
            <p className="text-[11px] uppercase tracking-widest-3 text-accent">
              About
            </p>
            <h1 className="mt-5 font-serif italic text-cream text-[36px] sm:text-[52px] md:text-[72px] leading-[1.05] max-w-3xl">
              A name.
              <br />
              A story.
              <br />
              A table.
            </h1>
            <p className="mt-8 md:mt-10 text-muted text-[15px] md:text-[17px] leading-[1.8] max-w-xl">
              The Republic of the Rio Grande lasted 283 days in 1840. The name
              endured. In 1998, we brought it back — to a table in McAllen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE NAMESAKE — 1840 */}
      <section className="relative bg-surface py-20 md:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 grid gap-12 md:gap-20 md:grid-cols-2 items-center">
          <FadeIn className="order-2 md:order-1">
            <p className="text-[11px] uppercase tracking-widest-3 text-accent">
              The Namesake · 1840
            </p>
            <h2 className="mt-5 font-serif text-cream text-[36px] sm:text-[48px] md:text-[64px] leading-[1.02]">
              <span className="block text-accent">283 days.</span>
              <span className="block">One republic.</span>
            </h2>
            <div className="mt-8 md:mt-10 space-y-5 text-muted text-[16px] md:text-[17px] leading-[1.85]">
              <p>
                On January 7, 1840, a constitutional convention along the Rio
                Grande declared an independent republic. Laredo was named the
                capital. Antonio Canales led the army. Jesús Cárdenas of Reynosa
                was chosen president.
              </p>
              <p>
                Their cause was federalism — a rebellion against the centralist
                government in Mexico City. Their front stretched from Saltillo
                to the Nueces. Battles followed all summer along the river,
                villages taken and retaken.
              </p>
              <p>
                By November, it was over. Canales surrendered at Camargo. The
                republic dissolved. Two hundred and eighty-three days from
                proclamation to end.
              </p>
              <p className="pt-3 font-serif italic text-cream text-[20px] md:text-[24px]">
                &ldquo;¡Viva la Revolución!&rdquo;
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120} className="order-1 md:order-2">
            <div
              className="flag-sway relative w-full aspect-[4/3] md:aspect-square"
              style={{ filter: "drop-shadow(0 12px 40px rgba(0,0,0,0.5))" }}
            >
              <Image
                src={img.rrgFlag}
                alt="Flag of the Republic of the Rio Grande — red, white, and black with three white stars"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-bg border-y border-divider py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-widest-3 text-accent">
              The Timeline
            </p>
            <p className="mt-4 font-serif italic text-cream text-[20px] md:text-[24px]">
              From proclamation to a table in McAllen.
            </p>
          </FadeIn>
          <div className="mt-12 md:mt-16 grid gap-8 md:gap-6 md:grid-cols-5">
            {timeline.map((t, i) => (
              <FadeIn key={t.year} delay={i * 80}>
                <div className="text-center md:text-left border-t border-divider pt-5 md:pt-6">
                  <p className="font-serif text-accent text-[22px] md:text-[26px] leading-none">
                    {t.year}
                  </p>
                  <p className="mt-3 text-muted text-[13px] md:text-[14px] leading-[1.65]">
                    {t.event}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THE RESTAURANT — TODAY */}
      <section className="bg-bg py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 grid gap-14 md:grid-cols-2 md:gap-20 items-center">
          <FadeIn className="order-2 md:order-1">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={img.heroPatio}
                alt="Republic of the Rio Grande covered patio at night"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={120} className="order-1 md:order-2">
            <p className="text-[11px] uppercase tracking-widest-3 text-accent">
              The Restaurant · Est. 1998
            </p>
            <h2 className="mt-5 font-serif text-cream text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05]">
              The name comes back to the table.
            </h2>
            <div className="mt-8 space-y-5 text-muted text-[16px] md:text-[17px] leading-[1.85]">
              <p>
                Republic of the Rio Grande Grill &amp; Cantina opened in 1998
                on 10th Street in McAllen. The mission was simple: bring
                fire-crafted cooking, Texas and Latin traditions, and a covered
                patio worth returning to — under a name that belongs to this
                border.
              </p>
              <p>
                Twenty-seven years later, we&apos;re still locally owned, still
                cooking over fire, and still setting tables on the patio where
                McAllen has celebrated for more nights than we can count.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PHILOSOPHY — 3 PILLARS */}
      <section className="bg-surface py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-widest-3 text-accent">
              The Philosophy
            </p>
            <h2 className="mt-5 font-serif italic text-cream text-[32px] sm:text-[42px] md:text-[52px] leading-[1.05]">
              Fire. Patio. Hospitality.
            </h2>
          </FadeIn>
          <div className="mt-14 md:mt-20 grid gap-10 md:gap-12 md:grid-cols-3">
            {[
              {
                eyebrow: "Fire",
                title: "Cooked over flame.",
                copy: "Ribeyes, filets, brick-oven pizzas, wood-charred vegetables. Fire is not a technique here — it&apos;s the technique.",
              },
              {
                eyebrow: "Patio",
                title: "Under the lights.",
                copy: "Our covered patio has hosted anniversaries, first dates, last dinners, and everything between. It&apos;s the heart of the restaurant.",
              },
              {
                eyebrow: "Hospitality",
                title: "McAllen-made.",
                copy: "Locally owned since day one. The same standard that filled our tables in 1998 fills them tonight.",
              },
            ].map((p, i) => (
              <FadeIn key={p.eyebrow} delay={i * 100}>
                <div className="text-center md:text-left">
                  <p className="text-[11px] uppercase tracking-widest-3 text-accent">
                    {p.eyebrow}
                  </p>
                  <h3 className="mt-4 font-serif text-cream text-[24px] md:text-[28px] leading-tight">
                    {p.title}
                  </h3>
                  <p
                    className="mt-4 text-muted text-[15px] md:text-[16px] leading-[1.8]"
                    dangerouslySetInnerHTML={{ __html: p.copy }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <FadeIn className="max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-widest-3 text-accent">
              Recognition
            </p>
            <h2 className="mt-5 font-serif italic text-cream text-[28px] sm:text-[36px] md:text-[44px] leading-[1.1]">
              A table McAllen keeps recommending.
            </h2>
          </FadeIn>
          <div className="mt-14 md:mt-16 grid gap-10 md:grid-cols-2 max-w-3xl mx-auto">
            <FadeIn>
              <p className="font-serif text-cream text-[44px] md:text-[56px] leading-none">
                #9
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-widest-2 text-muted">
                of 607 Restaurants in McAllen
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-widest-2 text-accent">
                TripAdvisor
              </p>
            </FadeIn>
            <FadeIn delay={120}>
              <p className="font-serif italic text-cream text-[36px] md:text-[44px] leading-none">
                Travelers Choice
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-widest-2 text-muted">
                Award Winner
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-widest-2 text-accent">
                TripAdvisor
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
          <FadeIn className="flex flex-col items-center">
            <p className="font-serif italic text-cream text-[28px] sm:text-[36px] md:text-[44px] leading-tight">
              Come find your seat.
            </p>
            <Link
              href="/reservations"
              className="group inline-flex flex-col items-center mt-10"
            >
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.25em] text-cream transition-colors group-hover:text-accent">
                Reserve a Table
              </span>
              <span className="mt-2.5 block h-[1.5px] w-10 bg-accent group-hover:w-full transition-all duration-500" />
            </Link>
            <div className="relative w-40 md:w-48 aspect-[2/1] mt-14 md:mt-16 opacity-70">
              <Image
                src={img.rrgSignature}
                alt="Republic of the Rio Grande — Grill & Cantina"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                className="object-contain invert"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
