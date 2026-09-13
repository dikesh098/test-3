"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data/services";
import { ServiceCategory } from "@/lib/data/types";

const FILTERS: { key: ServiceCategory | "all"; label: string }[] = [
  { key: "all", label: "All Services" },
  { key: "digital", label: "🌐 Digital" },
  { key: "ai", label: "🤖 AI Agents" },
  { key: "saas", label: "📈 CRM & Support" },
];

const CATEGORY_BADGE: Record<string, string> = {
  digital: "Digital",
  ai: "AI",
  saas: "SaaS",
};

const CATEGORY_COLOR: Record<string, string> = {
  digital: "bg-accent-light text-accent",
  ai: "bg-brand-light text-brand",
  saas: "bg-brand-light text-brand",
};

export default function ServicesHubPage() {
  const [filter, setFilter] = useState<ServiceCategory | "all">("all");

  const visible = useMemo(() => {
    if (filter !== "all") return SERVICES.filter((s) => s.category === filter);
    // "All" view: digital first, then ai, then saas
    const digital = SERVICES.filter((s) => s.category === "digital");
    const ai = SERVICES.filter((s) => s.category === "ai");
    const saas = SERVICES.filter((s) => s.category === "saas");
    return [...digital, ...ai, ...saas];
  }, [filter]);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything Your Business Needs, One Team"
        description="Web, app, marketing, AI, and CRM — handled by specialists. Tap any service to see what's included, pricing, and process."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filter === f.key
                    ? "edge-gradient text-[#04150f] shadow-md shadow-brand/20"
                    : "border border-line bg-surface-2 text-ink-2 hover:border-brand hover:text-brand"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s, i) => (
              <Reveal key={s.slug} delay={0.04 * i}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass glass-hover group flex h-full flex-col rounded-2xl p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)]"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-2xl">
                      {s.icon}
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide ${
                        CATEGORY_COLOR[s.category] ?? "bg-surface-2 text-ink-2"
                      }`}
                    >
                      {CATEGORY_BADGE[s.category] ?? s.category}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-ink">{s.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-2">{s.shortDesc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-gradient">{s.priceDisplay}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                      Details <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
