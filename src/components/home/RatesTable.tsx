"use client";

import { Info, CreditCard } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { usePayModal } from "@/components/payment/PayModalProvider";

const RATES = [
  { svc: "Logo & Brand Kit", chip: "₹4,000", note: "Logo, colors, type", pay: "Logo & Brand Kit", amt: 4000 },
  { svc: "Single Landing Page", chip: "₹8,000", note: "1 page, launch-ready", pay: "Single Landing Page", amt: 8000 },
  { svc: "SEO Audit", chip: "₹3,000", note: "Full technical report", pay: "SEO Audit", amt: 3000 },
  { svc: "Chatbot / AI Agent Integration", chip: "₹10,000+", note: "Per workflow", pay: "AI Agent Integration", amt: 10000 },
  { svc: "CRM Module Setup", chip: "₹1,500", note: "Per module", pay: "CRM Module Setup", amt: 1500 },
  {
    svc: "⭐ CRM SaaS — Starter Plan",
    chip: "₹2,499",
    note: "Best entry point!",
    pay: "CRM SaaS Platform",
    amt: 2499,
    combo: true,
  },
  { svc: "App Store Submission", chip: "₹2,000", note: "Play Store or App Store", pay: "App Store Submission", amt: 2000 },
  { svc: "Cloud / Server Setup", chip: "₹3,500", note: "Hosting & deployment", pay: "Cloud Server Setup", amt: 3500 },
  { svc: "Bug-fix / Hotfix Hour", chip: "₹800", note: "Priority turnaround", pay: "Bug-fix Hour", amt: 800 },
  { svc: "UI/UX Audit", chip: "₹2,500", note: "Full review + report", pay: "UI/UX Audit", amt: 2500 },
];

export default function RatesTable() {
  const { openPay } = usePayModal();
  return (
    <section className="bg-surface-2 px-5 py-20 sm:px-8" id="rates">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Quick Add-On Rates"
          title="Simple, Clear Rate Card"
          subtitle="No hidden charges. Complex work is scoped separately. Free consultation before anything begins."
        />
        <Reveal>
          <div className="glass mt-12 overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 border-b border-line bg-accent-light px-6 py-3.5 text-sm text-ink-2">
              <Info size={16} className="shrink-0 text-accent" />
              Rates below are for standalone add-ons. Bundled packages are quoted after a free consultation.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse">
                <thead>
                  <tr className="edge-gradient">
                    <th className="font-display px-5 py-3.5 text-left text-[0.82rem] font-semibold tracking-wide text-[#04150f]">Service</th>
                    <th className="font-display px-5 py-3.5 text-left text-[0.82rem] font-semibold tracking-wide text-[#04150f]">Charge</th>
                    <th className="font-display px-5 py-3.5 text-left text-[0.82rem] font-semibold tracking-wide text-[#04150f]">Note</th>
                    <th className="font-display px-5 py-3.5 text-left text-[0.82rem] font-semibold tracking-wide text-[#04150f]">Pay Now</th>
                  </tr>
                </thead>
                <tbody>
                  {RATES.map((r) => (
                    <tr
                      key={r.svc}
                      className={`border-b border-line last:border-none hover:bg-brand-light ${
                        r.combo ? "bg-accent-light" : ""
                      }`}
                    >
                      <td className={`px-5 py-3 text-sm text-ink ${r.combo ? "font-semibold" : ""}`}>{r.svc}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                            r.combo ? "bg-accent text-[#04150f]" : "bg-brand-light text-brand"
                          }`}
                        >
                          {r.chip}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-[0.8rem] text-ink-2">{r.note}</td>
                      <td className="px-5 py-3">
                        <button
                          onClick={() => openPay(r.pay, r.amt)}
                          className="flex items-center gap-1.5 whitespace-nowrap rounded-md edge-gradient px-3 py-1.5 text-xs font-semibold text-[#04150f] transition hover:opacity-90"
                        >
                          <CreditCard size={12} /> Pay
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
