type Props = {
  variant?: "dark" | "light";
  className?: string;
};

export default function StarDivider({ variant = "dark", className = "" }: Props) {
  const isLight = variant === "light";
  const ruleColor = isLight ? "#4a1613" : "rgba(245,240,230,0.55)";
  const starColor = isLight ? "#4a1613" : "#f5f0e6";

  return (
    <div
      role="presentation"
      className={`flex items-center justify-center gap-3 md:gap-5 ${className}`}
    >
      <div
        className="h-[2px] md:h-[3px] w-20 sm:w-32 md:w-52"
        style={{ backgroundColor: ruleColor }}
      />
      <span
        aria-hidden
        className="shrink-0 w-10 h-10 md:w-14 md:h-14 block"
        style={{
          backgroundColor: starColor,
          WebkitMaskImage: "url(/images/star-crest.png)",
          maskImage: "url(/images/star-crest.png)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
      <div
        className="h-[2px] md:h-[3px] w-20 sm:w-32 md:w-52"
        style={{ backgroundColor: ruleColor }}
      />
    </div>
  );
}
