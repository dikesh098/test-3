"use client";

import Link from "next/link";
import { CreditCard } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { usePayModal } from "@/components/payment/PayModalProvider";

interface PriceCard {
  icon: string;
  label: string;
  name: string;
  tagline: string;
  amount: string;
  per: string;
  features: string[];
  featured?: boolean;
  btnText: string;
  outline?: boolean;
  payLabel: string;
  svc: string;
  price: number;
}

const ROW1: PriceCard[] = [
  {
    icon: "📣",
    label: "Social Media",
    name: "Social Starter",
    tagline: "Perfect for product launch",
    amount: "₹15,000",
    per: "/month",
    features: ["12–15 posts/month", "4 Reels/month", "Engagement management", "Monthly report"],
    btnText: "Get Started",
    outline: true,
    payLabel: "Pay ₹15,000",
    svc: "Social Media - Starter",
    price: 15000,
  },
  {
    icon: "🚀",
    label: "Social Media",
    name: "Social Premium",
    tagline: "Recommended for growth",
    amount: "₹21,600",
    per: "/month",
    features: [
      "30 posts/month",
      "10 Reels/month (5 video)",
      "Daily engagement",
      "Bi-weekly strategy calls",
      "Advanced analytics",
    ],
    featured: true,
    btnText: "Get Started",
    payLabel: "Pay ₹21,600",
    svc: "Social Media - Premium",
    price: 21600,
  },
  {
    icon: "⚡",
    label: "Social Media",
    name: "Social Ultra",
    tagline: "Full-scale execution",
    amount: "₹58,500",
    per: "/month",
    features: [
      "40+ posts/month",
      "16 Reels/month (10 video)",
      "Paid ads management",
      "Influencer partnerships",
      "Weekly strategy calls",
      "ROI tracking",
    ],
    btnText: "Enterprise",
    outline: true,
    payLabel: "Pay ₹58,500",
    svc: "Social Media - Ultra",
    price: 58500,
  },
];

const ROW2: PriceCard[] = [
  {
    icon: "🌐",
    label: "Development",
    name: "Website Dev",
    tagline: "One-time investment",
    amount: "₹60k–₹1.5L",
    per: " one-time",
    features: ["5–10 page website", "Mobile responsive design", "SEO optimized", "Contact forms", "Analytics setup"],
    btnText: "Discuss",
    outline: true,
    payLabel: "Pay Advance",
    svc: "Website Development",
    price: 0,
  },
  {
    icon: "🤖",
    label: "AI",
    name: "AI Agent Build",
    tagline: "One agent, fully scoped",
    amount: "Custom",
    per: " project",
    features: [
      "Discovery & scoping call",
      "Agent trained on your data",
      "Integration with your tools",
      "Handover & team training",
    ],
    btnText: "Custom Quote",
    payLabel: "Pay Advance",
    svc: "AI Agents & Automation",
    price: 0,
  },
  {
    icon: "📈",
    label: "SaaS",
    name: "CRM Platform",
    tagline: "Affordable & transparent",
    amount: "₹2,499+",
    per: " /month",
    features: ["Lead inbox & pipelines", "Automated follow-ups", "Team onboarding included", "14-day free trial"],
    btnText: "Start Trial",
    outline: true,
    payLabel: "Pay ₹2,499",
    svc: "CRM SaaS Platform",
    price: 2499,
  },
];

function PriceCardView({ p, delay }: { p: PriceCard; delay: number }) {
  const { openPay } = usePayModal();
  return (
    <Reveal delay={delay}>
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)] ${
          p.featured
            ? "border-2 border-brand/50 glass shadow-[var(--shadow-card-lg)]"
            : "glass glass-hover shadow-[var(--shadow-card)]"
        }`}
      >
        {p.featured && (
          <span className="absolute right-[-32px] top-4 rotate-45 edge-gradient px-11 py-1 text-[0.65rem] font-bold tracking-wide text-[#04150f]">
            ⭐ Most Popular
          </span>
        )}
        <span className="mb-2 text-3xl">{p.icon}</span>
        <div className="text-[0.72rem] font-bold uppercase tracking-widest text-ink-3">{p.label}</div>
        <div className="font-display mt-0.5 text-lg font-bold text-ink">{p.name}</div>
        <div className="mt-0.5 text-[0.8rem] text-ink-2">{p.tagline}</div>
        <div className="font-display mt-4 text-[1.8rem] font-extrabold leading-none text-gradient">
          {p.amount}
          <span className="text-[0.85rem] font-medium text-ink-2">{p.per}</span>
        </div>
        <hr className="my-5 border-line" />
        <ul className="mb-6 flex flex-1 flex-col gap-2">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[0.84rem] text-ink-2">
              <span className="mt-0.5 font-bold text-brand">✓</span> {f}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`block rounded-full py-3 text-center text-sm font-semibold transition ${
            p.outline
              ? "border-2 border-brand text-brand hover:bg-brand-light"
              : "edge-gradient text-[#04150f] hover:opacity-90"
          }`}
        >
          {p.btnText}
        </Link>
        <button
          onClick={() => openPay(p.svc, p.price)}
          className="mt-2 flex items-center justify-center gap-1.5 rounded-full edge-gradient py-3 text-sm font-semibold text-[#04150f] shadow-md shadow-brand/20 transition hover:-translate-y-0.5 hover:opacity-90"
        >
          <CreditCard size={15} /> {p.payLabel}
        </button>
      </div>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section className="bg-surface-2 px-5 py-20 sm:px-8" id="pricing">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Transparent Pricing"
          title="Choose Your Plan"
          subtitle="Clear pricing for every need — from social media and websites to AI agents and the CRM platform."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ROW1.map((p, i) => (
            <PriceCardView key={p.name} p={p} delay={0.06 * i} />
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {ROW2.map((p, i) => (
            <PriceCardView key={p.name} p={p} delay={0.06 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
