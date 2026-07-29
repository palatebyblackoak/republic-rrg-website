import Image from "next/image";
import type { Metadata } from "next";
import { menu } from "@/lib/menu";
import { img } from "@/lib/images";
import MenuTabs from "@/components/MenuTabs";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Menu · Republic of the Rio Grande",
  description:
    "Fire-crafted steaks, seafood, brick oven pizza, and cantina classics. Served in McAllen since 1998.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative h-[55svh] md:h-[55vh] min-h-[380px] md:min-h-[440px] flex items-center justify-center overflow-hidden">
        <Image
          src={img.menuHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-cream text-[44px] sm:text-[56px] md:text-[80px] leading-[1.05]">
            The Menu
          </h1>
          <p className="mt-5 md:mt-6 text-muted text-[15px] sm:text-[16px] md:text-[18px]">
            Crafted with fire. Served with care.
          </p>
        </div>
      </section>

      <MenuTabs />

      {menu.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`${idx % 2 === 0 ? "bg-bg" : "bg-surface"} py-14 md:py-24 scroll-mt-[9rem]`}
        >
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn className="flex flex-col items-center text-center">
              <SectionLabel label={section.label} centered />
              <h2 className="font-serif text-cream text-[28px] sm:text-[36px] md:text-[44px] leading-tight">
                {section.title}
              </h2>
              {section.note && (
                <p className="mt-4 max-w-2xl text-muted text-[13px] italic">
                  {section.note}
                </p>
              )}
            </FadeIn>

            <div className="mt-10 md:mt-14 grid gap-x-14 md:grid-cols-2">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="py-5 border-b border-divider last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif font-semibold text-cream text-[20px]">
                      {item.name}
                    </h3>
                    <span className="text-[14px] text-cream whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-[14px] text-muted leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
