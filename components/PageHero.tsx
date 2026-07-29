import Image from "next/image";
import SectionLabel from "./SectionLabel";

type Props = {
  label: string;
  headline: string;
  subhead?: string;
  image: string;
  overlay?: number;
};

export default function PageHero({
  label,
  headline,
  subhead,
  image,
  overlay = 0.65,
}: Props) {
  return (
    <section className="relative h-[65svh] md:h-[70vh] min-h-[440px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-bg"
        style={{ opacity: overlay }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="flex flex-col items-center">
          <SectionLabel label={label} centered />
        </div>
        <h1 className="font-serif text-cream font-normal text-[40px] sm:text-[52px] md:text-[72px] leading-[1.05]">
          {headline}
        </h1>
        {subhead && (
          <p className="mt-5 md:mt-6 text-muted font-light text-[15px] sm:text-[16px] md:text-[18px] max-w-xl mx-auto leading-[1.7]">
            {subhead}
          </p>
        )}
      </div>
    </section>
  );
}
