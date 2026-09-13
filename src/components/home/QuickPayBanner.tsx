"use client";

import { CreditCard, Rocket, Wallet, PenLine } from "lucide-react";
import { usePayModal } from "@/components/payment/PayModalProvider";

export default function QuickPayBanner() {
  const { openPay } = usePayModal();
  return (
    <div className="edge-gradient px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-display flex items-center justify-center gap-2 text-xl font-extrabold text-[#04150f] sm:justify-start">
            <CreditCard size={22} /> Pay Online Instantly
          </h2>
          <p className="mt-1 text-sm text-[#04150f]/75">
            UPI · Credit / Debit Cards · Net Banking · Wallets — all accepted securely via Razorpay
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => openPay("CRM SaaS - Starter Plan", 2499)}
            className="flex items-center gap-1.5 rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            <Rocket size={15} /> CRM Starter ₹2,499
          </button>
          <button
            onClick={() => openPay("Digital Marketing - Starter", 15000)}
            className="flex items-center gap-1.5 rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            <Wallet size={15} /> Marketing ₹15,000
          </button>
          <button
            onClick={() => openPay("", 0)}
            className="flex items-center gap-1.5 rounded-full border-2 border-[#04150f]/40 px-5 py-2.5 text-sm font-semibold text-[#04150f] transition hover:-translate-y-0.5 hover:bg-black/5"
          >
            <PenLine size={15} /> Custom Amount
          </button>
        </div>
      </div>
    </div>
  );
}
