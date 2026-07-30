import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  href: string;
  cta?: string;
  image: string;
  imageAlt: string;
};

export default function StoryCard({
  eyebrow,
  title,
  href,
  cta = "View Menu",
  image,
  imageAlt,
}: Props) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden aspect-[3/4]"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-bg/10 transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 translate-y-0 transition-transform duration-500 group-hover:-translate-y-1">
        <p className="font-serif italic text-cream/85 text-[18px] md:text-[22px]">
          {eyebrow}
        </p>
        <h3 className="mt-1 font-serif text-cream text-[32px] md:text-[40px] leading-tight tracking-wide uppercase">
          {title}
        </h3>
        <span className="mt-6 inline-flex flex-col items-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-cream">
            {cta}
          </span>
          <span className="mt-2 block h-[1.5px] w-8 bg-accent transition-all duration-500 group-hover:w-16" />
        </span>
      </div>
    </Link>
  );
}
