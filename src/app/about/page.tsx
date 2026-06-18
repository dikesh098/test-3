import type { Metadata } from "next";
import { Target, Eye, ShieldCheck, Heart } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "eSakha is a Nagpur-based business consultancy helping small businesses with government registrations and digital growth since 2019.",
};

const VALUES = [
  { icon: <Target size={20} />, title: "Mission", text: "Make business compliance and digital growth simple, honest, and accessible for every small business in Nagpur and beyond." },
  { icon: <Eye size={20} />, title: "Vision", text: "To be the most trusted single point of contact for any business owner navigating government paperwork or building a digital presence." },
  { icon: <ShieldCheck size={20} />, title: "Transparency", text: "No hidden charges, no inflated promises. We tell you exactly what a service costs and how long it takes — upfront." },
  { icon: <Heart size={20} />, title: "Care", text: "We treat every client's paperwork and brand like our own — because a missed deadline or a botched filing has real consequences for real people." },
];

const TIMELINE = [
  { year: "2019", text: "eSakha founded in Nagpur with a focus on government registration and compliance services for local businesses." },
  { year: "2021", text: "Expanded into digital services — websites, social media management, and brand launches — as more clients asked for help going online." },
  { year: "2023", text: "Crossed 50+ businesses served across GST, Udyam, FSSAI, ITR, and digital projects, with growing repeat and referral business." },
  { year: "2026", text: "Launched eSakha 2.0 — a refreshed website, expanded service catalogue (company registration, trademarks, GeM, AI solutions), and a more structured digital process for every client." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About eSakha"
        title="Your Digital Business Partner, Since 2019"
        description="We started as a government registration desk in Nagpur. Today we're a full consultancy covering compliance and digital growth — without losing the personal, transparent way we've always worked."
      />

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div>
              <span className="inline-block rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
                Our Story
              </span>
              <h2 className="font-display mt-3 text-2xl font-bold text-brand-dark sm:text-3xl">
                Built on Nagpur&apos;s Kamptee Road, for businesses just like yours
              </h2>
              <p className="mt-4 text-ink-2 leading-relaxed">
                eSakha — operated by NY All in One Solutions &amp; Services — started by solving one
                frustrating problem: government paperwork is confusing, slow, and full of small mistakes
                that cause big delays. We built a service around getting it right the first time, with
                honest pricing and no surprises.
              </p>
              <p className="mt-4 text-ink-2 leading-relaxed">
                As clients came back asking for help with websites, social media, and branding, we built
                that capability too. Today, eSakha is the one team businesses in Nagpur call whether they
                need a GST number this week or a new website this quarter.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="rounded-2xl border border-line bg-surface-2 p-6 shadow-[var(--shadow-card)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-light text-brand">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-dark">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{v.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-2 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading label="A Note From Our Team" title="Why We Do This" align="center" />
          <Reveal delay={0.1}>
            <blockquote className="mt-8 rounded-2xl border border-line bg-white p-8 text-ink-2 shadow-[var(--shadow-card)]">
              <p className="text-lg italic leading-relaxed">
                &ldquo;Most of our clients are first-time business owners. They don&apos;t need jargon —
                they need someone to tell them exactly what&apos;s required, what it costs, and how long
                it&apos;ll take, and then actually deliver that. That&apos;s the whole job, and we take it
                seriously.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-brand-dark">— The eSakha Team</footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading label="Our Journey" title="Company Timeline" align="center" />
          <div className="mt-12 space-y-8">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={0.08 * i}>
                <div className="flex gap-5">
                  <div className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {t.year}
                  </div>
                  <p className="mt-2 text-ink-2 leading-relaxed">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-2 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="Our Team" title="Specialists Across Compliance &amp; Digital" align="center" subtitle="Every request is handled by someone who actually specializes in it — not a generalist juggling everything." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "🏛️", role: "Compliance & Registrations", desc: "GST, MSME, company formation, and licensing." },
              { icon: "🌐", role: "Web & App Development", desc: "Design, build, and ship digital products." },
              { icon: "📣", role: "Digital Marketing", desc: "Social media, content, and paid campaigns." },
              { icon: "🤝", role: "Client Relations", desc: "Your single point of contact, start to finish." },
            ].map((m) => (
              <div key={m.role} className="rounded-2xl border border-line bg-white p-6 text-center shadow-[var(--shadow-card)]">
                <span className="text-3xl">{m.icon}</span>
                <h3 className="font-display mt-3 text-sm font-bold text-brand-dark">{m.role}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
