import Reveal from "./Reveal";

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal>
        <span className="inline-block rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-3 text-[clamp(1.9rem,3.8vw,2.8rem)] font-bold leading-tight tracking-tight text-brand-dark">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.14}>
          <p className={`mt-2 max-w-xl text-ink-2 ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
