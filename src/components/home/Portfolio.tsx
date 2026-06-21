import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PORTFOLIO } from "@/lib/data/portfolio";

export default function Portfolio() {
  return (
    <section className="px-5 py-20 sm:px-8" id="portfolio">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Our Portfolio"
          title="Real Brands, Real Results"
          subtitle="Here's what we've built and grown for our clients."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.name} delay={0.07 * i}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)]">
                <span className="absolute inset-x-0 top-0 h-1" style={{ background: p.accent }} />
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-2xl">
                    {p.icon}
                  </div>
                  <span className="rounded-full bg-surface-3 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-ink-2">
                    {p.badgeText}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-base font-bold text-brand-dark">{p.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{p.desc}</p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
                  {p.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className={`font-display text-sm font-bold ${s.growing ? "text-brand" : "text-brand-dark"}`}>
                        {s.value}
                      </div>
                      <div className="mt-0.5 text-[0.65rem] text-ink-3">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
