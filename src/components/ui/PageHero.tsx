import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-brand-light to-white px-5 py-16 text-center sm:px-8 sm:py-20">
      <Reveal>
        <span className="inline-block rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="font-display mx-auto mt-3 max-w-2xl text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-tight tracking-tight text-brand-dark">
          {title}
        </h1>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="mx-auto mt-4 max-w-xl text-ink-2">{description}</p>
        </Reveal>
      )}
    </section>
  );
}
