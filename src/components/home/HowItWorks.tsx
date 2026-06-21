import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { n: 1, icon: "🚶", title: "Visit / Enquiry", desc: "Walk in or WhatsApp us. Tell us what you need — we'll guide you completely." },
  { n: 2, icon: "💬", title: "Free Consultation", desc: "We explain the full process, documents needed & charges — no surprises ever." },
  { n: 3, icon: "📄", title: "Submit Documents", desc: "Provide required documents. We verify everything carefully before proceeding." },
  { n: 4, icon: "✅", title: "Work Done!", desc: "We complete your work & hand over the certificate or deliverable with full transparency." },
];

export default function HowItWorks() {
  return (
    <section className="px-5 py-20 sm:px-8" id="how">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Our Process" title="How eSakha Works" subtitle="Simple, transparent, and completely hassle-free." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i}>
              <div className="relative rounded-2xl border border-line bg-white p-7 text-center shadow-[var(--shadow-card)]">
                <div className="font-display mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white shadow-lg shadow-brand/30">
                  {s.n}
                </div>
                <span className="mb-2 block text-3xl">{s.icon}</span>
                <h3 className="font-display mb-1.5 text-base font-bold text-brand-dark">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
