import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { n: 1, icon: "💬", title: "Tell Us What You Need", desc: "Walk in, call, or WhatsApp us. We'll scope the project and guide you completely." },
  { n: 2, icon: "🧭", title: "Free Consultation", desc: "We explain the full plan, timeline & pricing — no surprises, no hidden add-ons." },
  { n: 3, icon: "⚙️", title: "Build in the Open", desc: "Design, development, or campaign setup happens in short cycles with your feedback." },
  { n: 4, icon: "🚀", title: "Launch & Support", desc: "We ship it, hand it over, and stay reachable through your maintenance or growth plan." },
];

export default function HowItWorks() {
  return (
    <section className="px-5 py-20 sm:px-8" id="how">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Our Process" title="How eSakha Works" subtitle="Simple, transparent, and built around actually shipping." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <div className="glass glass-hover relative rounded-2xl p-7 text-center shadow-[var(--shadow-card)]">
                <div className="font-display mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full edge-gradient text-sm font-extrabold text-[#04150f] shadow-lg shadow-brand/20">
                  {s.n}
                </div>
                <span className="mb-2 block text-3xl">{s.icon}</span>
                <h3 className="font-display mb-1.5 text-base font-bold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
