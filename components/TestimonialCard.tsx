type Props = {
  quote: string;
  reviewer: string;
  platform: string;
};

export default function TestimonialCard({ quote, reviewer, platform }: Props) {
  return (
    <div className="bg-surface p-10 border-l-2 border-accent h-full flex flex-col">
      <span
        className="font-serif text-[80px] text-gold leading-none block h-8"
        aria-hidden
      >
        “
      </span>
      <p className="font-serif italic text-[18px] text-cream leading-[1.7] flex-1">
        {quote}
      </p>
      <div className="mt-6">
        <p className="text-[11px] uppercase tracking-[0.15em] text-muted">
          {reviewer}
        </p>
        <p className="text-[11px] uppercase tracking-[0.15em] text-accent mt-1">
          {platform}
        </p>
      </div>
    </div>
  );
}
