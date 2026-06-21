import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8" id="testimonials">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Client Love"
          title="What Our Clients Say"
          subtitle="Real feedback from real businesses we've helped grow."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.07 * i}>
              <div className="rounded-2xl border border-line bg-surface-2 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-card-lg)]">
                <div className="mb-1.5 tracking-widest text-accent">★★★★★</div>
                <div className="font-display text-4xl font-extrabold leading-none text-brand opacity-35">&ldquo;</div>
                <p className="mb-5 text-sm italic leading-relaxed text-ink-2">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-base font-extrabold text-white">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-dark">{t.name}</div>
                    <div className="text-xs text-ink-3">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
