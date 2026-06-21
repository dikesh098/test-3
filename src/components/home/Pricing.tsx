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
    icon: "🎯",
    label: "Package",
    name: "Brand Launch",
    tagline: "Complete package",
    amount: "₹1.5L–₹5L",
    per: " project",
    features: [
      "Social setup & strategy",
      "Website development",
      "Content production",
      "Launch coordination",
      "3-month management",
    ],
    btnText: "Custom Quote",
    payLabel: "Pay Advance",
    svc: "Brand Launch Package",
    price: 0,
  },
  {
    icon: "🏛️",
    label: "Government",
    name: "Gov Services",
    tagline: "Affordable & transparent",
    amount: "₹300–₹5K",
    per: " per service",
    features: ["GST / ITR / PF / Udyam", "Gumasta & FSSAI", "PAN Card services", "Free consultation", "Zero hidden charges"],
    btnText: "Enquire",
    outline: true,
    payLabel: "Combo Pay ₹2,000",
    svc: "GST + Udyam + Gumasta Combo",
    price: 2000,
  },
];

function PriceCardView({ p, delay }: { p: PriceCard; delay: number }) {
  const { openPay } = usePayModal();
  return (
    <Reveal delay={delay}>
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)] ${
          p.featured
            ? "border-2 border-brand bg-gradient-to-br from-[#e8f5ed] to-white"
            : "border-line bg-white shadow-[var(--shadow-card)]"
        }`}
      >
        {p.featured && (
          <span className="absolute right-[-32px] top-4 rotate-45 bg-brand px-11 py-1 text-[0.65rem] font-bold tracking-wide text-white">
            ⭐ Most Popular
          </span>
        )}
        <span className="mb-2 text-3xl">{p.icon}</span>
        <div className="text-[0.72rem] font-bold uppercase tracking-widest text-ink-3">{p.label}</div>
        <div className="font-display mt-0.5 text-lg font-bold text-brand-dark">{p.name}</div>
        <div className="mt-0.5 text-[0.8rem] text-ink-2">{p.tagline}</div>
        <div className="font-display mt-4 text-[1.8rem] font-extrabold leading-none text-brand">
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
              : "bg-brand text-white hover:bg-brand-dark"
          }`}
        >
          {p.btnText}
        </Link>
        <button
          onClick={() => openPay(p.svc, p.price)}
          className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-brand to-brand-mid py-3 text-sm font-semibold text-white shadow-md shadow-brand/25 transition hover:-translate-y-0.5"
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
          subtitle="Clear pricing for every need — from social media to full brand launches and development."
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
