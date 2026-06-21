import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How eSakha collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: [
      "When you use our website, contact forms, service application forms, the careers page, or make a payment, we may collect: your name, phone number, email address, the service you're interested in, any message or requirement details you provide, and documents you choose to upload (such as a resume or supporting documents for a service application).",
      "When you make a payment, your transaction is processed by Razorpay. We do not store your card, UPI, or banking credentials — we only record the service, amount, and a payment reference ID for our own records.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you provide to respond to your enquiry, process your service application or government filing, process payments, evaluate job/internship applications, and contact you about the status of your request via phone, WhatsApp, or email.",
      "We do not sell your personal information to third parties, and we do not use it for purposes unrelated to the service you've requested.",
    ],
  },
  {
    title: "3. Document & File Storage",
    body: [
      "Resumes and service-related documents you upload are stored securely using Supabase, our backend data platform. Access to submitted data is restricted to eSakha's team for the purpose of processing your request.",
    ],
  },
  {
    title: "4. Third-Party Services",
    body: [
      "We use Razorpay for payment processing, Supabase for data storage, and may use Google services (such as Maps, for showing our office location) and standard website analytics. Each of these providers has its own privacy practices governing the data that passes through their systems.",
    ],
  },
  {
    title: "5. Cookies",
    body: [
      "Our website may use minimal cookies or local storage required for basic functionality (such as remembering form progress) and, where enabled, anonymous analytics to understand site usage. We do not use cookies for cross-site advertising tracking.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We retain enquiry, application, and payment records for as long as reasonably necessary to provide our services, meet legal/accounting obligations, and resolve any disputes. You can request deletion of your personal data by contacting us, subject to any legal retention requirements (e.g., financial records).",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information you've shared with us by contacting us using the details below. We'll respond to verified requests within a reasonable timeframe.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "Our services are intended for individuals who are at least 18 years old or otherwise legally able to enter into the services we offer (such as competitive exam form filing, which may be submitted by a parent/guardian on a minor's behalf). We do not knowingly collect personal information directly from children.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The \"Last Updated\" date below will reflect the most recent revision.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description={`Last Updated: June 2026 · ${SITE.name} — ${SITE.legalName}`} />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-brand-dark">{s.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-2">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-line-2 bg-brand-light p-6">
            <h2 className="font-display text-lg font-bold text-brand-dark">10. Contact Us</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              For any privacy-related questions or requests, reach us at:
            </p>
            <p className="mt-2 text-sm text-ink-2">
              📍 {CONTACT.address}
              <br />
              📞 {CONTACT.phoneE164}
              <br />
              ✉️ {CONTACT.email}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
