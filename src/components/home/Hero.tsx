"use client";

import Link from "next/link";
import { ClipboardList, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/constants";

const STATS = [
  { num: "50+", lbl: "Happy Clients" },
  { num: "12K+", lbl: "Social Impressions" },
  { num: "6+", lbl: "Years Experience" },
  { num: "99%", lbl: "Honest Work" },
];

const PILLS = ["🌐 Website Development", "📱 App Development", "📊 Social Media", "🏛️ Govt Services"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f5ed] via-white to-[#fff8e6] px-5 py-28 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute -right-36 -top-48 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(15,122,74,0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(240,165,0,0.07),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-light px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
              <span className="animate-blink h-1.5 w-1.5 rounded-full bg-brand" />
              Trusted Since 2019 — Nagpur
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display mb-5 text-[clamp(2.6rem,5.5vw,4rem)] font-extrabold leading-[1.07] tracking-tight text-brand-dark">
              Your Digital{" "}
              <span className="underline-sweep relative text-brand">Business</span> Partner
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-8 max-w-[480px] text-[1.05rem] leading-relaxed text-ink-2">
              eSakha builds brands, develops websites &amp; apps, manages social media, and handles all your
              government registrations — everything under one roof.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mb-8 flex flex-wrap gap-2">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-line-2 bg-white px-3 py-1.5 text-[0.78rem] font-semibold text-brand shadow-sm"
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
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <ClipboardList size={17} /> Book Free Consultation
              </Link>
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand bg-white px-7 py-3.5 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand-light"
              >
                <MessageCircle size={17} /> WhatsApp Now
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          {STATS.map((s, i) => (
            <Reveal key={s.lbl} delay={0.1 * i}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)]">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand to-brand-mid" />
                <div className="font-display text-[2.4rem] font-extrabold leading-none text-brand">{s.num}</div>
                <div className="mt-1.5 text-[0.82rem] font-medium text-ink-2">{s.lbl}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
