type Props = {
  variant?: "dark" | "light";
  className?: string;
};

export default function StarDivider({ variant = "dark", className = "" }: Props) {
  const ruleColor = variant === "dark" ? "bg-cream/25" : "bg-ink/15";
  const starColor = variant === "dark" ? "text-cream/85" : "text-accent";

  return (
    <div
      role="presentation"
      className={`flex items-center justify-center gap-4 md:gap-6 ${className}`}
    >
      <div className={`h-px ${ruleColor} w-20 sm:w-28 md:w-40`} />
      <svg
        viewBox="0 0 24 24"
        className={`w-5 h-5 md:w-6 md:h-6 ${starColor} shrink-0`}
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 1 L14.6 8.9 L23 8.9 L16.2 13.8 L18.8 21.7 L12 16.8 L5.2 21.7 L7.8 13.8 L1 8.9 L9.4 8.9 Z" />
      </svg>
      <div className={`h-px ${ruleColor} w-20 sm:w-28 md:w-40`} />
    </div>
  );
}
