"use client";

import { CreditCard, Star, Wallet, PenLine } from "lucide-react";
import { usePayModal } from "@/components/payment/PayModalProvider";

export default function QuickPayBanner() {
  const { openPay } = usePayModal();
  return (
    <div className="bg-gradient-to-br from-brand to-brand-mid px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-display flex items-center justify-center gap-2 text-xl font-extrabold text-white sm:justify-start">
            <CreditCard size={22} /> Pay Online Instantly
          </h2>
          <p className="mt-1 text-sm text-white/80">
            UPI · Credit / Debit Cards · Net Banking · Wallets — all accepted securely via Razorpay
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => openPay("GST + Udyam + Gumasta Combo", 2000)}
            className="flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark transition hover:-translate-y-0.5"
          >
            <Star size={15} /> Combo ₹2,000
          </button>
          <button
            onClick={() => openPay("PF Withdrawal (Form 31)", 300)}
            className="flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark transition hover:-translate-y-0.5"
          >
            <Wallet size={15} /> PF Withdrawal ₹300
          </button>
          <button
            onClick={() => openPay("", 0)}
            className="flex items-center gap-1.5 rounded-full border-2 border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <PenLine size={15} /> Custom Amount
          </button>
        </div>
      </div>
    </div>
  );
}
