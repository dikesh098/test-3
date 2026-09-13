"use client";

import Link from "next/link";
import { ClipboardList, MessageCircle, CircleDot } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/constants";

const STATS = [
  { num: "50+", lbl: "Clients Shipped" },
  { num: "12K+", lbl: "Social Impressions" },
  { num: "6+", lbl: "Years Building" },
  { num: "99%", lbl: "Uptime SLA" },
];

const PILLS = ["🌐 Web & App Dev", "📣 Digital Marketing", "🤖 AI Agents", "📈 CRM SaaS"];

const CONSOLE_LOG = [
  { label: "lead.captured", tag: "instagram_ad", tone: "brand" },
  { label: "agent.reply_sent", tag: "avg 4.2s", tone: "accent" },
  { label: "deploy.success", tag: "esakha-crm v2.3", tone: "brand" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute -right-36 -top-48 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(34,197,139,0.14),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line-2 bg-brand-light px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
              <span className="animate-blink h-1.5 w-1.5 rounded-full bg-brand" />
              Building Since 2019 — Nagpur
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display mb-5 text-[clamp(2.6rem,5.5vw,4rem)] font-extrabold leading-[1.07] tracking-tight text-ink">
              Your Tech{" "}
              <span className="underline-sweep relative text-gradient">Growth</span> Partner
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-8 max-w-[480px] text-[1.05rem] leading-relaxed text-ink-2">
              eSakha builds websites, apps, and AI agents, runs your digital marketing, and ships a
              CRM platform your team will actually use — with tech support that doesn&apos;t disappear
              after launch.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mb-8 flex flex-wrap gap-2">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className="glass rounded-full px-3 py-1.5 text-[0.78rem] font-semibold text-ink-2"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full edge-gradient px-7 py-3.5 text-sm font-semibold text-[#04150f] shadow-lg shadow-brand/20 transition hover:-translate-y-0.5 hover:opacity-90"
              >
                <ClipboardList size={17} /> Book Free Consultation
              </Link>
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
              >
                <MessageCircle size={17} /> WhatsApp Now
              </a>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal delay={0.1}>
            <div className="glass overflow-hidden rounded-2xl shadow-[var(--shadow-card-lg)]">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="font-mono-tech ml-3 text-[0.7rem] text-ink-3">esakha // live-ops</span>
              </div>
              <div className="space-y-2.5 p-4">
                {CONSOLE_LOG.map((l) => (
                  <div
                    key={l.label}
                    className="flex items-center justify-between rounded-lg border border-line bg-surface-2/60 px-3.5 py-2.5"
                  >
                    <span className="flex items-center gap-2 font-mono-tech text-[0.78rem] text-ink">
                      <CircleDot size={12} className={l.tone === "brand" ? "text-brand" : "text-accent"} />
                      {l.label}
                    </span>
                    <span className="font-mono-tech text-[0.72rem] text-ink-3">{l.tag}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2.5 border-t border-line p-4">
                {STATS.map((s) => (
                  <div key={s.lbl} className="rounded-xl border border-line bg-surface-2/40 p-4">
                    <div className="font-display text-[1.9rem] font-extrabold leading-none text-gradient">
                      {s.num}
                    </div>
                    <div className="mt-1.5 text-[0.78rem] font-medium text-ink-2">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
