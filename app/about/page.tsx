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

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
          <FadeIn className="flex flex-col items-center">
            <div className="relative w-20 md:w-24 aspect-square mb-8 md:mb-10">
              <Image
                src={img.rrgSeal}
                alt="Republic of the Rio Grande seal"
                fill
                priority
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain opacity-90"
              />
            </div>
            <h1 className="font-serif text-ink text-[32px] md:text-[44px] leading-[1.15]">
              A name with a story.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ATMOSPHERIC BREAK */}
      <section className="bg-parchment">
        <FadeIn>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={img.patioNight}
              alt="Republic of the Rio Grande patio at night, firepit glowing"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* NAMESAKE — 1840 */}
      <section className="bg-bg border-t border-divider py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col items-center mb-14 md:mb-20">
              <h2 className="font-serif text-cream text-[96px] md:text-[160px] leading-none tracking-tight">
                1840
              </h2>
              <p className="mt-4 md:mt-5 text-muted text-[10px] md:text-[12px] uppercase tracking-[0.35em]">
                Republic of the Rio Grande
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="max-w-2xl mx-auto space-y-6 text-muted text-[15px] md:text-[17px] leading-[1.8]">
              <p className="drop-cap drop-cap-cream">
                On January 7, 1840, a constitutional convention along the Rio
                Grande declared an independent republic. Laredo was named the
                capital. Antonio Canales led the army. Jesús Cárdenas of Reynosa
                was chosen president.
              </p>
              <p>
                Their cause was federalism, a rebellion against the centralist
                government in Mexico City. Their front stretched from Saltillo
                to the Nueces. Battles followed all summer along the river,
                villages taken and retaken.
              </p>
              <p>
                By November, it was over. Canales surrendered at Camargo. The
                republic dissolved after 283 tumultuous days.
              </p>
              <p>
                One hundred and fifty-eight years later, in 1998, the name came
                back to a table on 10th Street in McAllen.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="mt-14 md:mt-20 flex flex-col items-center">
              <div
                className="flag-sway relative w-60 md:w-96 aspect-[4/3]"
                style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))" }}
              >
                <Image
                  src={img.rrgFlag}
                  alt="Flag of the Republic of the Rio Grande — red, white, and black with three white stars"
                  fill
                  sizes="(max-width: 768px) 240px, 384px"
                  className="object-contain"
                />
              </div>
              <p className="mt-6 md:mt-8 font-serif italic text-muted text-[13px] md:text-[14px] text-center">
                Flag of the Republic of the Rio Grande · 1840
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* RESTAURANT — 1998 */}
      <section className="bg-parchment py-20 md:py-32">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col items-center mb-14 md:mb-20">
              <h2 className="font-serif text-ink text-[96px] md:text-[160px] leading-none tracking-tight">
                1998
              </h2>
              <p className="mt-4 md:mt-5 text-ink-muted text-[10px] md:text-[12px] uppercase tracking-[0.35em]">
                Grill &amp; Cantina
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="max-w-2xl mx-auto space-y-6 text-ink-muted text-[15px] md:text-[17px] leading-[1.8]">
              <p className="drop-cap drop-cap-ink">
                Republic of the Rio Grande Grill &amp; Cantina opened in 1998
                on 10th Street in McAllen. Fire-crafted cooking, Texas and
                Latin traditions, a covered patio worth returning to.
              </p>
              <p>
                Twenty-seven years later, we&apos;re still locally owned, still
                cooking over fire, still setting tables where McAllen
                celebrates.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ROOM + FIRE — paired */}
      <section className="bg-bg py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-4 md:gap-6">
          <FadeIn>
            <div className="relative aspect-[4/5]">
              <Image
                src={img.patioLights}
                alt="Patio lights at Republic of the Rio Grande"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="relative aspect-[4/5] md:mt-16">
              <Image
                src={img.filetTexas}
                alt="Fire-crafted filet plated at Republic of the Rio Grande"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CLOSE */}
      <section className="bg-bg border-t border-divider">
        <FadeIn>
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={img.heroPatio}
              alt="Republic of the Rio Grande — a table waiting"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
        <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center flex flex-col items-center">
          <FadeIn className="flex flex-col items-center">
            <p className="font-serif italic text-cream text-[24px] md:text-[32px] leading-tight">
              Come find your seat.
            </p>
            <Link
              href="/reservations"
              className="group inline-flex flex-col items-center mt-8"
            >
              <span className="text-[12px] uppercase tracking-[0.25em] text-cream transition-colors group-hover:text-accent">
                Reserve a Table
              </span>
              <span className="mt-2.5 block h-[1.5px] w-10 bg-accent group-hover:w-full transition-all duration-500" />
            </Link>
            <div className="relative w-40 md:w-48 aspect-[2/1] mt-12 md:mt-14 opacity-80">
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
