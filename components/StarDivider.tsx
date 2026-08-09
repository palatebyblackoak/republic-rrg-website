type Props = {
  variant?: "dark" | "light";
  className?: string;
};

const P: [number, number][] = [
  [50, 2],
  [95.66, 35.17],
  [78.21, 88.83],
  [21.79, 88.83],
  [4.34, 35.17],
];
const I: [number, number][] = [
  [60.58, 35.44],
  [67.12, 55.56],
  [50, 68],
  [32.88, 55.56],
  [39.42, 35.44],
];

const facets: { d: string; shade: "light" | "dark" }[] = [];
for (let i = 0; i < 5; i++) {
  const iPrev = I[(i + 4) % 5];
  const iNext = I[i];
  const p = P[i];
  facets.push({
    d: `M50,50 L${iPrev[0]},${iPrev[1]} L${p[0]},${p[1]} Z`,
    shade: "dark",
  });
  facets.push({
    d: `M50,50 L${p[0]},${p[1]} L${iNext[0]},${iNext[1]} Z`,
    shade: "light",
  });
}

export default function StarDivider({ variant = "dark", className = "" }: Props) {
  const isLight = variant === "light";
  const ruleColor = isLight ? "#4a1613" : "rgba(245,240,230,0.55)";
  const facetLight = isLight ? "#6b201a" : "#e8d9c3";
  const facetDark = isLight ? "#3a120f" : "#c9b89d";
  const filterId = `stamp-${variant}`;

  return (
    <div
      role="presentation"
      className={`flex items-center justify-center gap-3 md:gap-5 ${className}`}
    >
      <div
        className="h-[2px] md:h-[3px] w-20 sm:w-32 md:w-52"
        style={{ backgroundColor: ruleColor }}
      />
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 md:w-14 md:h-14 shrink-0"
        aria-hidden
      >
        <defs>
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1.6"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 -2.4 1.7"
              result="mask"
            />
            <feComposite in="SourceGraphic" in2="mask" operator="out" />
          </filter>
        </defs>
        <g filter={`url(#${filterId})`}>
          {facets.map((f, idx) => (
            <path
              key={idx}
              d={f.d}
              fill={f.shade === "light" ? facetLight : facetDark}
            />
          ))}
        </g>
      </svg>
      <div
        className="h-[2px] md:h-[3px] w-20 sm:w-32 md:w-52"
        style={{ backgroundColor: ruleColor }}
      />
    </div>
  );
}
