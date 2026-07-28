import Image from "next/image";

type Props = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function DishCard({ name, description, price, image }: Props) {
  return (
    <div className="group bg-surface border-b-2 border-transparent hover:border-accent transition-colors">
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-bg/0 to-bg/0" />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-[22px] text-cream leading-tight">
            {name}
          </h3>
          <span className="font-sans text-[14px] text-gold whitespace-nowrap">
            {price}
          </span>
        </div>
        <p className="mt-3 text-[13px] text-muted leading-[1.6]">
          {description}
        </p>
      </div>
    </div>
  );
}
