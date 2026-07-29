type Props = {
  label: string;
  centered?: boolean;
  ruleWidth?: number;
};

export default function SectionLabel({
  label,
  centered = false,
  ruleWidth = 60,
}: Props) {
  return (
    <div className={centered ? "flex flex-col items-center" : ""}>
      <p className="text-[11px] uppercase tracking-widest-2 text-accent font-medium">
        {label}
      </p>
      <div
        className="h-px bg-accent mt-4 mb-6"
        style={{ width: `${ruleWidth}px` }}
      />
    </div>
  );
}
