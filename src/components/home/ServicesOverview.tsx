import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const COLUMNS = [
  {
    icon: "🌐",
    title: "Build & Launch",
    desc: "Websites, apps, and brand launches that actually ship on time.",
    items: [
      "Website Development & Design",
      "Mobile App Development",
      "Brand & Launch Strategy",
      "Video Production & Reels",
    ],
    price: "₹60,000 – ₹1,50,000+",
    cta: "Discuss Your Project",
  },
  {
    icon: "📣",
    title: "Grow & Market",
    desc: "Social media, content, and paid ads run by a team that reports what's working.",
    items: [
      "Social Media Management",
      "Content Creation & Paid Ads",
      "Instagram & Facebook Growth",
      "Monthly Performance Reports",
    ],
    price: "₹15,000/month onwards",
    cta: "Get a Growth Plan",
  },
  {
    icon: "🤖",
    title: "Automate & Scale",
    desc: "AI agents and a CRM platform so your team spends less time on busywork.",
    items: [
      "AI Agents & Workflow Automation",
      "CRM SaaS Platform",
      "Tech Support & Managed IT",
      "Custom Integrations",
    ],
    price: "₹2,499/month onwards",
    cta: "See the Platform",
    featured: true,
  },
];

export default function ServicesOverview() {
  return (
    <section className="px-5 py-20 sm:px-8" id="services-overview">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="What We Offer"
          title="Three Areas, One Team"
          subtitle="From your first landing page to the AI agent handling your support inbox — eSakha covers it all."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {COLUMNS.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i}>
              <div
                className={`flex h-full flex-col rounded-2xl p-9 ${
                  c.featured
                    ? "border-2 border-brand/40 glass shadow-[var(--shadow-card-lg)]"
                    : "glass glass-hover shadow-[var(--shadow-card)]"
                }`}
              >
                <span className="mb-3 text-4xl">{c.icon}</span>
                <h3 className="font-display text-2xl font-bold text-ink">{c.title}</h3>
                <p className="mt-1.5 text-sm text-ink-2">{c.desc}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {c.items.map((i2) => (
                    <li key={i2} className="flex items-start gap-2 text-sm text-ink-2">
                      <span className="mt-0.5 font-bold text-brand">✓</span> {i2}
                    </li>
                  ))}
                </ul>
                <div className="font-display mt-6 text-lg font-extrabold text-gradient">{c.price}</div>
                <Link
                  href="/contact"
                  className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    c.featured
                      ? "edge-gradient text-[#04150f] hover:opacity-90"
                      : "glass glass-hover text-ink"
                  }`}
                >
                  {c.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
