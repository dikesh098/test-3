"use client";

import { MapPin, Phone, Globe, Clock, MessageCircle, Video, CreditCard } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { CONTACT, whatsappLink } from "@/lib/constants";
import { usePayModal } from "@/components/payment/PayModalProvider";

export default function ContactSection() {
  const { openPay } = usePayModal();
  return (
    <section className="bg-white px-5 py-20 sm:px-8" id="contact">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Get In Touch" title="Contact eSakha" subtitle="Visit us, call us, or connect online — we're here to help." />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="left">
            <div>
              <h3 className="font-display mb-5 text-xl font-bold text-brand-dark">Visit Us / Call Us</h3>
              <ContactRow icon={<MapPin size={18} />} label="Address" value={CONTACT.address} />
              <ContactRow icon={<Phone size={18} />} label="Phone / WhatsApp" value={CONTACT.phoneDisplay} />
              <ContactRow icon={<Globe size={18} />} label="Website" value="esakha.in" />

              <div className="my-5 rounded-xl border-l-4 border-brand bg-brand-light px-5 py-4">
                <p className="flex items-center gap-2 text-sm font-medium text-brand-dark">
                  <Clock size={14} /> Mon–Sat: {CONTACT.hours[0].time}
                </p>
                <p className="mt-1.5 text-sm font-medium text-brand-dark">Sunday: {CONTACT.hours[1].time}</p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1db954]"
                >
                  <MessageCircle size={18} /> WhatsApp Us Now
                </a>
                <a
                  href={whatsappLink("I want to book a Google Meet session")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-brand bg-white py-3.5 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand-light"
                >
                  <Video size={18} /> Book Google Meet Session
                </a>
                <button
                  onClick={() => openPay("", 0)}
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-brand bg-white py-3.5 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand-light"
                >
                  <CreditCard size={18} /> Pay Online via Razorpay
                </button>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <EnquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="mb-4 flex items-start gap-3.5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
        {icon}
      </div>
      <div>
        <strong className="block text-[0.72rem] font-semibold uppercase tracking-wide text-ink-3">{label}</strong>
        <span className="text-sm text-ink">{value}</span>
      </div>
    </div>
  );
}
