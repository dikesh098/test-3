"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MapPin, Calendar, TrendingUp, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  WORK_CLIENTS,
  OVERALL_STATS,
  PLATFORM_ICONS,
  PLATFORM_LABELS,
  PLATFORM_COLORS,
  Platform,
} from "@/lib/data/ourwork";
import { whatsappLink } from "@/lib/constants";

const CATEGORY_FILTERS = [
  { key: "all", label: "All Work" },
  { key: "college", label: "🏫 Colleges" },
  { key: "brand", label: "🚀 Brands" },
  { key: "business", label: "💼 Businesses" },
];

const PLATFORM_FILTERS: { key: Platform | "all"; label: string }[] = [
  { key: "all", label: "All Platforms" },
  { key: "instagram", label: "📸 Instagram" },
  { key: "facebook", label: "📘 Facebook" },
  { key: "linkedin", label: "💼 LinkedIn" },
];

export default function OurWorkClient() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState<Platform | "all">("all");

  const visible = useMemo(() => {
    return WORK_CLIENTS.filter((c) => {
      const matchCategory = categoryFilter === "all" || c.category === categoryFilter;
      const matchPlatform =
        platformFilter === "all" || c.platforms.includes(platformFilter as Platform);
      return matchCategory && matchPlatform;
    });
  }, [categoryFilter, platformFilter]);

  return (
    <>
      {/* Overall Stats Banner */}
      <section className="bg-gradient-to-br from-brand-dark to-brand px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {OVERALL_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-line bg-white px-5 py-6 sm:px-8">
        <div className="mx-auto max-w-6xl space-y-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setCategoryFilter(f.key)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  categoryFilter === f.key
                    ? "bg-brand text-white shadow-md shadow-brand/25"
                    : "border border-line bg-white text-ink-2 hover:border-brand hover:text-brand"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {PLATFORM_FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setPlatformFilter(f.key as Platform | "all")}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  platformFilter === f.key
                    ? "bg-ink text-white"
                    : "border border-line bg-white text-ink-2 hover:border-ink hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Cards */}
      <section className="bg-surface-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          {visible.length === 0 ? (
            <p className="text-center text-ink-3">No projects match the selected filters.</p>
          ) : (
            <div className="grid gap-7 md:grid-cols-2">
              {visible.map((client, i) => (
                <Reveal key={client.id} delay={0.06 * i}>
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
                    <div className="h-1.5 w-full" style={{ background: client.accentColor }} />
                    <div className="flex flex-1 flex-col p-7">
                      {/* Header */}
                      <div className="mb-4 flex items-start gap-3">
                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl"
                          style={{ background: `${client.accentColor}18` }}
                        >
                          {client.icon}
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-bold text-brand-dark">
                            {client.name}
                          </h3>
                          <span
                            className="inline-block rounded-full px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wide text-white"
                            style={{ background: client.accentColor }}
                          >
                            {client.categoryLabel}
                          </span>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="mb-4 flex flex-wrap gap-3 text-xs text-ink-3">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {client.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> Since {client.since}
                        </span>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-ink-2">
                        {client.description}
                      </p>

                      {/* Platform badges */}
                      <div className="mb-5 flex flex-wrap gap-2">
                        {client.platforms.map((p) => (
                          <span
                            key={p}
                            className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold text-white ${PLATFORM_COLORS[p]}`}
                          >
                            {PLATFORM_ICONS[p]} {PLATFORM_LABELS[p]}
                          </span>
                        ))}
                      </div>

                      {/* Achievement stats */}
                      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {client.achievements.map((a) => (
                          <div
                            key={a.label}
                            className="rounded-xl border border-line bg-surface-2 p-3 text-center"
                          >
                            <div
                              className="font-display text-lg font-extrabold"
                              style={{ color: client.accentColor }}
                            >
                              {a.value}
                            </div>
                            <div className="mt-0.5 text-[0.65rem] leading-tight text-ink-3">
                              {a.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Platform breakdown */}
                      <div className="mb-5 space-y-2.5">
                        {client.platformStats.map((ps) => (
                          <div
                            key={ps.platform}
                            className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 px-4 py-3"
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm text-white ${PLATFORM_COLORS[ps.platform]}`}
                            >
                              {PLATFORM_ICONS[ps.platform]}
                            </span>
                            <div className="flex flex-1 flex-wrap gap-x-4 gap-y-0.5">
                              <span className="text-xs font-semibold text-ink-2">
                                {PLATFORM_LABELS[ps.platform]}
                              </span>
                              <span className="text-xs text-ink-3">👥 {ps.followers}</span>
                              <span className="text-xs text-ink-3">❤️ {ps.engagement}</span>
                              <span className="text-xs text-ink-3">📄 {ps.posts} posts</span>
                              {ps.reach && (
                                <span className="text-xs text-ink-3">📡 {ps.reach}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Highlight */}
                      <div
                        className="flex items-start gap-2 rounded-xl px-4 py-3 text-sm font-medium"
                        style={{
                          background: `${client.accentColor}12`,
                          color: client.accentColor,
                          border: `1px solid ${client.accentColor}30`,
                        }}
                      >
                        <TrendingUp size={16} className="mt-0.5 shrink-0" />
                        {client.highlight}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How We Work */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="What We Do"
            title="How We Grow Your Social Media"
            subtitle="Our process for every client — college or brand."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", icon: "🎯", title: "Strategy", desc: "We study your audience, competitors, and goals — then build a content plan that fits your brand." },
              { n: "02", icon: "🎨", title: "Content Creation", desc: "Posts, reels, stories, and banners — designed in your brand style, published on schedule." },
              { n: "03", icon: "💬", title: "Engagement", desc: "We reply to comments and DMs professionally, so your audience feels heard and connected." },
              { n: "04", icon: "📊", title: "Monthly Report", desc: "Clear numbers every month — followers, reach, engagement, and what's working best." },
            ].map((s) => (
              <Reveal key={s.n} delay={0.07}>
                <div className="rounded-2xl border border-line bg-white p-6 text-center shadow-[var(--shadow-card)]">
                  <div className="font-display mb-2 text-2xl font-extrabold text-brand-light">{s.n}</div>
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="font-display mt-2 text-base font-bold text-brand-dark">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-dark to-brand px-5 py-16 text-center sm:px-8">
        <Reveal>
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
            Work With Us
          </span>
          <h2 className="font-display mx-auto mt-4 max-w-xl text-3xl font-extrabold text-white">
            Want Results Like These for Your Brand?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/75">
            We manage Instagram, Facebook, and LinkedIn for colleges, brands, and businesses across Maharashtra. Free consultation — no commitment.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            
              href={whatsappLink("Hi eSakha! I saw your work page and I'm interested in social media management.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              <MessageCircle size={17} /> WhatsApp Us Now
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Get Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
