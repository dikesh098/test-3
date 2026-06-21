"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Script from "next/script";
import { X, ShieldCheck, CheckCircle2, CreditCard } from "lucide-react";
import { RAZORPAY_KEY_ID, SITE, whatsappLink } from "@/lib/constants";
import { RAZORPAY_SERVICES } from "@/lib/data/razorpay-services";
import { getSupabaseClient } from "@/lib/supabase/client";

interface PayModalState {
  open: boolean;
  service: string;
  amount: number;
}

interface PayModalContextValue {
  openPay: (service?: string, amount?: number) => void;
  closePay: () => void;
}

const PayModalContext = createContext<PayModalContextValue | null>(null);

export function usePayModal() {
  const ctx = useContext(PayModalContext);
  if (!ctx) throw new Error("usePayModal must be used inside PayModalProvider");
  return ctx;
}

export function PayModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PayModalState>({ open: false, service: "", amount: 0 });

  const openPay = useCallback((service = "", amount = 0) => {
    setState({ open: true, service, amount });
  }, []);
  const closePay = useCallback(() => setState((s) => ({ ...s, open: false })), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePay();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closePay]);

  const value = useMemo(() => ({ openPay, closePay }), [openPay, closePay]);

  return (
    <PayModalContext.Provider value={value}>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      {children}
      <PayModal
        isOpen={state.open}
        onClose={closePay}
        initialService={state.service}
        initialAmount={state.amount}
      />
    </PayModalContext.Provider>
  );
}

function PayModal({
  isOpen,
  onClose,
  initialService,
  initialAmount,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialService: string;
  initialAmount: number;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(initialService || "");
  const [amount, setAmount] = useState<string | number>(initialAmount > 0 ? initialAmount : "");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [txnId, setTxnId] = useState("");

  useEffect(() => {
    setService(initialService || "");
    setAmount(initialAmount > 0 ? initialAmount : "");
    setSuccess(false);
    setName("");
    setPhone("");
    setEmail("");
  }, [initialService, initialAmount, isOpen]);

  if (!isOpen) return null;

  const displayPrice = Number(amount) > 0 ? `₹${Number(amount).toLocaleString("en-IN")}` : "Custom";

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const opt = RAZORPAY_SERVICES.find((s) => s.value === e.target.value);
    setService(e.target.value);
    if (opt && opt.price > 0) setAmount(opt.price);
    else setAmount("");
  };

  const logPayment = async (paymentId: string) => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    await supabase.from("payments").insert({
      name,
      phone,
      email,
      service: service || "Custom Payment",
      amount: Number(amount),
      razorpay_payment_id: paymentId,
      status: "success",
    });
  };

  const initiatePayment = () => {
    if (!name.trim()) return alert("Please enter your name.");
    if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone))
      return alert("Please enter a valid 10-digit mobile number.");
    if (!email || !/\S+@\S+\.\S+/.test(email)) return alert("Please enter a valid email address.");
    if (!service) return alert("Please select a service.");
    if (!amount || Number(amount) < 1) return alert("Please enter a valid amount (minimum ₹1).");

    setLoading(true);

    if (typeof window === "undefined" || !window.Razorpay) {
      alert("Payment gateway is still loading — please try again in a moment.");
      setLoading(false);
      return;
    }

    const rzp = new window.Razorpay({
      key: RAZORPAY_KEY_ID,
      amount: Number(amount) * 100,
      currency: "INR",
      name: SITE.name,
      description: `${service} — ${SITE.legalName}, Nagpur`,
      prefill: { name, contact: `+91${phone}`, email },
      notes: { service, customer_name: name, customer_phone: phone },
      theme: { color: "#0f7a4a" },
      modal: { ondismiss: () => setLoading(false) },
      handler: (response) => {
        setLoading(false);
        setTxnId(response.razorpay_payment_id);
        setSuccess(true);
        logPayment(response.razorpay_payment_id);
        const waMsg = `${SITE.name} Payment Received!\n\nCustomer: ${name}\nMobile: ${phone}\nService: ${service}\nAmount: ₹${amount}\nPayment ID: ${response.razorpay_payment_id}`;
        setTimeout(() => window.open(whatsappLink(waMsg), "_blank"), 1500);
      },
    });
    rzp.on("payment.failed", (r) => {
      alert("Payment failed: " + (r.error.description || "Please try again."));
      setLoading(false);
    });
    rzp.open();
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="relative bg-gradient-to-br from-brand-dark to-brand px-8 pb-6 pt-8">
          <button
            onClick={onClose}
            aria-label="Close payment dialog"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
          >
            <X size={18} />
          </button>
          <h2 className="font-display text-xl font-extrabold text-white">Pay for Service</h2>
          <p className="mt-1 text-sm text-white/75">Secure online payment powered by Razorpay</p>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
            <ShieldCheck size={14} /> 256-bit SSL Encrypted
          </div>
        </div>

        {success ? (
          <div className="px-8 py-10 text-center">
            <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full border-[3px] border-brand bg-gradient-to-br from-brand-light to-line-2">
              <CheckCircle2 className="text-brand" size={32} />
            </div>
            <h3 className="font-display text-lg font-extrabold text-brand-dark">Payment Successful!</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Thank you for your payment. Our team will contact you within 24 hours to proceed with your
              service.
            </p>
            <div className="mt-4 break-all rounded-lg border border-line-2 bg-brand-light px-4 py-2 text-xs font-semibold text-brand">
              Payment ID: {txnId}
            </div>
            <button
              onClick={onClose}
              className="mt-6 rounded-xl bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="px-8 py-7">
            <div className="mb-5 flex items-center justify-between rounded-xl border border-line bg-surface-2 px-4 py-3">
              <div>
                <div className="text-sm font-medium text-ink-2">{service || "Custom Payment"}</div>
                <div className="mt-0.5 text-xs text-ink-3">
                  {SITE.name} — Nagpur
                </div>
              </div>
              <div className="font-display text-xl font-extrabold text-brand">{displayPrice}</div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="field-label">Your Full Name *</label>
                <input
                  className="field-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="field-label">Mobile Number *</label>
                <input
                  className="field-input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                />
              </div>
              <div>
                <label className="field-label">Email Address *</label>
                <input
                  className="field-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="field-label">Service</label>
                  <select className="field-input" value={service} onChange={handleServiceChange}>
                    {RAZORPAY_SERVICES.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="field-label">Amount (₹) *</label>
                  <input
                    className="field-input"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                  />
                </div>
              </div>

              <button
                onClick={initiatePayment}
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand to-brand-mid py-3.5 font-display text-base font-bold text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <CreditCard size={18} />
                {loading ? "Opening payment..." : "Pay Securely via Razorpay"}
              </button>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-ink-3">
                <ShieldCheck size={13} /> Secured by Razorpay · UPI · Cards · Netbanking · Wallets
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

