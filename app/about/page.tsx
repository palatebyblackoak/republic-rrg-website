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
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center">
          <FadeIn className="flex flex-col items-center">
            <div className="relative w-20 md:w-24 aspect-square mb-8 md:mb-10">
              <Image
                src={img.rrgSeal}
                alt="Republic of the Rio Grande seal"
                fill
                priority
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain invert opacity-90"
              />
            </div>
            <p className="text-[11px] uppercase tracking-widest-3 text-accent">
              About
            </p>
            <h1 className="mt-5 font-serif text-cream text-[32px] md:text-[44px] leading-[1.15]">
              A name with a story.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* NAMESAKE — 1840 */}
      <section className="bg-bg border-t border-divider py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto flex items-center justify-center gap-3 md:gap-6 mb-12 md:mb-16">
              <div className="flex-1 h-px bg-divider" />
              <h2 className="text-cream text-[11px] md:text-[13px] uppercase tracking-[0.2em] md:tracking-[0.25em] font-medium whitespace-nowrap">
                Republic of the Rio Grande · 1840
              </h2>
              <div className="flex-1 h-px bg-divider" />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid gap-x-14 md:grid-cols-2 gap-y-5 text-muted text-[15px] md:text-[16px] leading-[1.8]">
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
                republic dissolved after 283 tumultuous days.
              </p>
              <p>
                One hundred and fifty-eight years later, in 1998, the name came
                back — to a table on 10th Street in McAllen.
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
            <div className="relative w-16 md:w-20 aspect-square mx-auto mb-8 md:mb-10">
              <Image
                src={img.rrgSeal}
                alt=""
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain opacity-80"
              />
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="max-w-3xl mx-auto flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
              <div className="flex-1 h-px bg-ink/15" />
              <h2 className="text-ink text-[12px] md:text-[13px] uppercase tracking-[0.25em] font-medium whitespace-nowrap">
                Grill &amp; Cantina · 1998
              </h2>
              <div className="flex-1 h-px bg-ink/15" />
            </div>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="max-w-2xl mx-auto space-y-5 text-ink-muted text-[15px] md:text-[16px] leading-[1.8] text-center">
              <p>
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

      {/* CLOSE */}
      <section className="bg-bg border-t border-divider py-16 md:py-24">
        <div className="max-w-xl mx-auto px-6 text-center flex flex-col items-center">
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
