"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, CreditCard, ArrowRight } from "lucide-react";
import { Service } from "@/lib/data/types";
import { usePayModal } from "@/components/payment/PayModalProvider";
import Reveal from "@/components/ui/Reveal";

export default function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const [open, setOpen] = useState(false);
  const { openPay } = usePayModal();

  return (
    <Reveal delay={delay}>
      <div className="glass glass-hover flex h-full flex-col rounded-2xl p-7 shadow-[var(--shadow-card)]">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-2xl">
          {service.icon}
        </div>
        <h3 className="font-display text-base font-bold text-ink">{service.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-2">{service.shortDesc}</p>
        <span className="mt-3 inline-block font-display text-sm font-bold text-gradient">
          {service.priceDisplay}
        </span>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-4 flex items-center justify-center gap-1 rounded-lg border border-line py-2 text-xs font-semibold text-ink-2 transition hover:border-brand hover:text-brand"
        >
          {open ? "Hide What's Included" : "What's Included"}
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {open && (
          <ul className="mt-3 space-y-1.5 rounded-lg bg-surface-2 p-3 text-xs text-ink-2">
            {service.documents.slice(0, 5).map((d) => (
              <li key={d} className="flex items-start gap-1.5">
                <span className="text-brand">•</span> {d}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={`/services/${service.slug}`}
          className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-brand hover:underline"
        >
          View Full Details <ArrowRight size={13} />
        </Link>

        <button
          onClick={() => openPay(service.name, service.payAmount)}
          className="mt-3 flex items-center justify-center gap-1.5 rounded-xl edge-gradient py-2.5 text-xs font-semibold text-[#04150f] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          <CreditCard size={14} />
          {service.payAmount > 0 ? `Pay Online — ₹${service.payAmount.toLocaleString("en-IN")}` : "Pay Advance / Custom"}
        </button>
      </div>
    </Reveal>
  );
}
