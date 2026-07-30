import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import MenuBody from "@/components/MenuBody";

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

      <MenuBody />
    </>
  );
}
