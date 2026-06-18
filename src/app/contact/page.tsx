import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactPageForm from "@/components/forms/ContactPageForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with eSakha in Nagpur — call, WhatsApp, visit our office, or send a message online.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="We're Here to Help"
        description="Call, WhatsApp, visit our office, or fill in the form below — whichever's easiest for you."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="left">
            <div className="space-y-5">
              <InfoCard icon={<MapPin size={18} />} label="Office Address" value={CONTACT.address} />
              <InfoCard icon={<Phone size={18} />} label="Phone / WhatsApp" value={CONTACT.phoneDisplay} href={`tel:${CONTACT.phoneE164}`} />
              <InfoCard icon={<Mail size={18} />} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
              <InfoCard
                icon={<Clock size={18} />}
                label="Business Hours"
                value={`Mon–Sat: ${CONTACT.hours[0].time}\nSunday: ${CONTACT.hours[1].time}`}
              />
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1db954]"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>

              <div className="overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-card)]">
                <iframe
                  src={CONTACT.mapsEmbedUrl}
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="eSakha office location"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="rounded-2xl border border-line bg-surface-2 p-7 shadow-[var(--shadow-card)] sm:p-9">
              <h3 className="font-display mb-5 text-xl font-bold text-brand-dark">Send Us a Message</h3>
              <ContactPageForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3.5 rounded-xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
        {icon}
      </div>
      <div>
        <div className="text-[0.72rem] font-bold uppercase tracking-wide text-ink-3">{label}</div>
        <div className="mt-0.5 whitespace-pre-line text-sm text-ink">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
