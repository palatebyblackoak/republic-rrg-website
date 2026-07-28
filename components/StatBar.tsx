type Stat = { number: string; label: string };

type Props = {
  stats: Stat[];
};

export default function StatBar({ stats }: Props) {
  return (
    <section className="bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center px-4 ${
              i > 0 ? "md:border-l md:border-divider" : ""
            }`}
          >
            <p className="font-serif text-[40px] md:text-[48px] text-cream leading-none">
              {s.number}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
