import Image from "next/image";
import { img } from "@/lib/images";

const rowA = [
  { src: img.steakPlated, alt: "Grilled ribeye plated with shishitos and mashed potatoes" },
  { src: img.ceviche, alt: "Ahi tuna ceviche tower with tortilla strings and mango" },
  { src: img.pizzaMushroom, alt: "Wild mushroom brick-oven pizza on the branded platter" },
  { src: img.salmon, alt: "Grilled avocado salmon with pico de gallo and Caymus Chardonnay" },
  { src: img.cantinaCocktail, alt: "Pomegranate-blackberry cantina cocktail" },
  { src: img.pizzaSpecialty, alt: "Specialty brick-oven pizza with avocado and greens" },
];

const rowB = [
  { src: img.filetTexasWide, alt: "Texas Filet with mashed potatoes, asparagus, and port mushroom sauce" },
  { src: img.pizzaOven, alt: "Wood-fired Margherita pizza on the branded Republic platter" },
  { src: img.cantinaSangria, alt: "Sangria-style cocktail with pomegranate, blackberries, and citrus" },
  { src: img.chicken, alt: "Grilled chicken breast with cream sauce, avocado, and pico" },
  { src: img.pizzaBrickOven, alt: "Republic pizza fresh from the brick oven" },
  { src: img.cantinaPineapple, alt: "Tropical cantina cocktail with pineapple, pomegranate, and chile" },
];

type MarqueeItem = { src: string; alt: string };

function Row({ items, reverse = false }: { items: MarqueeItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
      >
        {doubled.map((it, i) => (
          <div
            key={`${it.src}-${i}`}
            className="relative shrink-0 mr-3 md:mr-6 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] overflow-hidden"
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 300px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FoodMarquee() {
  return (
    <div className="space-y-3 md:space-y-6">
      <Row items={rowA} />
      <Row items={rowB} reverse />
    </div>
  );
}
