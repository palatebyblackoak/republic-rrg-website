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
      <p className="text-[11px] uppercase tracking-widest-2 text-gold font-medium">
        {label}
      </p>
      <div
        className="h-px bg-gold mt-4 mb-6"
        style={{ width: `${ruleWidth}px` }}
      />
    </div>
  );
}
