"use client";

import { AlertTriangle, CreditCard } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { usePayModal } from "@/components/payment/PayModalProvider";

const RATES = [
  { svc: "PF Form 31 — Simple", chip: "₹300", note: "Advance withdrawal", pay: "PF Withdrawal (Form 31)", amt: 300 },
  { svc: "PF Form 10+19 — Normal", chip: "₹1,200", note: "Full withdrawal", pay: "PF Withdrawal (Form 10+19)", amt: 1200 },
  { svc: "Udyam Registration", chip: "₹300–₹500", note: "MSME certificate", pay: "Udyam Registration", amt: 400 },
  { svc: "Gumasta Licence", chip: "₹400–₹800", note: "Shop Act licence", pay: "Gumasta Licence", amt: 600 },
  { svc: "GST Registration", chip: "₹1,200", note: "GST number", pay: "GST Registration", amt: 1200 },
  {
    svc: "⭐ COMBO — GST + Udyam + Gumasta",
    chip: "₹2,000",
    note: "Best value!",
    pay: "GST + Udyam + Gumasta Combo",
    amt: 2000,
    combo: true,
  },
  { svc: "Food Licence — 1 Year", chip: "₹500", note: "+ Govt fee", pay: "Food Licence FSSAI (1 Year)", amt: 500 },
  { svc: "ITR Filing", chip: "₹1,000+", note: "Income tax return", pay: "ITR Filing", amt: 1000 },
  { svc: "PAN Card — New", chip: "₹300", note: "", pay: "PAN Card (New)", amt: 300 },
  { svc: "PAN Card — Correction", chip: "₹400", note: "", pay: "PAN Card (Correction)", amt: 400 },
  { svc: "Form Filing", chip: "₹200", note: "Govt. forms", pay: "Form Filing", amt: 200 },
  { svc: "NEET / JEE / AIIMS Forms", chip: "₹300", note: "Competitive exams", pay: "NEET/JEE/AIIMS Form", amt: 300 },
  { svc: "Police Clearance Certificate", chip: "₹200", note: "+ Govt fee", pay: "Police Clearance Certificate", amt: 200 },
];

export default function RatesTable() {
  const { openPay } = usePayModal();
  return (
    <section className="bg-surface-2 px-5 py-20 sm:px-8" id="rates">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Govt Service Rates"
          title="Simple, Clear Rate Card"
          subtitle="No hidden charges. Govt. fees are always separate. Free consultation before any work begins."
        />
        <Reveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 border-b border-amber-200 bg-accent-light px-6 py-3.5 text-sm text-amber-900">
              <AlertTriangle size={16} className="shrink-0" />
              Govt. portal fees are separate. Complex cases charged accordingly. Charges non-refundable once paid.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse">
                <thead>
                  <tr className="bg-brand">
                    <th className="font-display px-5 py-3.5 text-left text-[0.82rem] font-semibold tracking-wide text-white">Service</th>
                    <th className="font-display px-5 py-3.5 text-left text-[0.82rem] font-semibold tracking-wide text-white">Charge</th>
                    <th className="font-display px-5 py-3.5 text-left text-[0.82rem] font-semibold tracking-wide text-white">Note</th>
                    <th className="font-display px-5 py-3.5 text-left text-[0.82rem] font-semibold tracking-wide text-white">Pay Now</th>
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
                      <td className={`px-5 py-3 text-sm ${r.combo ? "font-semibold" : ""}`}>{r.svc}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                            r.combo ? "bg-accent text-white" : "bg-brand-light text-brand"
                          }`}
                        >
                          {r.chip}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-[0.8rem] text-ink-2">{r.note}</td>
                      <td className="px-5 py-3">
                        <button
                          onClick={() => openPay(r.pay, r.amt)}
                          className="flex items-center gap-1.5 whitespace-nowrap rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-dark"
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
