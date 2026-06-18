import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "eSakha's refund policy and terms of service for government and digital services.",
};

interface TermsSection {
  num: string;
  title: string;
  icon: string;
  content?: string;
  bullets?: string[];
  isContact?: boolean;
}

const SECTIONS: TermsSection[] = [
  {
    num: "1",
    title: "General Policy",
    icon: "📋",
    content:
      "Due to the nature of digital, consulting, marketing, and government-related services, all payments made to eSakha are generally non-refundable once work has been initiated. By purchasing or confirming any service, the client acknowledges and agrees to this policy.",
  },
  {
    num: "2",
    title: "Government & Compliance Services",
    icon: "🏛️",
    content:
      "For services such as GST Registration, ITR Filing, PF Services, Udyam/MSME Registration, FSSAI Registration, Gumasta Licence, PAN-related services, and Documentation assistance:",
    bullets: [
      "Government fees, portal charges, consultancy fees, and processing costs are non-refundable once the application or process has started.",
      "Refunds cannot be provided for government rejection, delays from departments, incorrect information submitted by the client, or changes in government policies.",
      "Clients are responsible for providing accurate documents and information.",
    ],
  },
  {
    num: "3",
    title: "Digital Marketing & Social Media Services",
    icon: "📱",
    content:
      "For services including Social Media Management, Branding, Content Creation, Reels & Video Production, Paid Advertising, Marketing Strategy, and Lead Generation, refunds are not applicable once strategy planning has started, creatives/content have been produced, advertisements have been launched, or work execution has begun.",
    bullets: [
      "Marketing outcomes such as followers, reach, engagement, leads, or sales depend on multiple market factors and cannot be guaranteed.",
    ],
  },
  {
    num: "4",
    title: "Website Development Services",
    icon: "🌐",
    content:
      "For website and digital development projects, advance payments are non-refundable once project planning, design, development, or domain/hosting setup begins.",
    bullets: [
      "If a project is paused or cancelled by the client after work initiation, the amount paid for completed work and resources utilized will not be refunded.",
      "Custom work, designs, source files, and development efforts are considered billable work.",
    ],
  },
  {
    num: "5",
    title: "Cancellation Policy",
    icon: "❌",
    content:
      "Clients may request cancellation before work begins. If no work, registration process, consultation, design, or execution has started, partial refunds may be considered at the sole discretion of eSakha.",
  },
  {
    num: "6",
    title: "Duplicate Payments",
    icon: "🔄",
    bullets: [
      "In case of accidental duplicate payment, verified duplicate transactions may be refunded after confirmation.",
      "Processing time may take 7–15 business days depending on banking/payment systems.",
    ],
  },
  {
    num: "7",
    title: "No Guarantee Clause",
    icon: "⚠️",
    content: "eSakha provides professional services with honest effort and execution. However, we do not guarantee:",
    bullets: [
      "Business growth, social media virality, or customer acquisition",
      "Search rankings, sales revenue, or government approval timelines",
      "Refunds will not be issued based on unmet business expectations beyond our direct operational control.",
    ],
  },
  {
    num: "8",
    title: "Chargebacks & Payment Disputes",
    icon: "💳",
    content: "Clients are encouraged to contact eSakha directly before initiating payment disputes or chargebacks.",
    bullets: [
      "Fraudulent chargebacks after successful delivery of services may result in service suspension, legal recovery action, and permanent refusal of future services.",
    ],
  },
  { num: "9", title: "Contact for Refund Queries", icon: "📞", isContact: true },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms &amp; Refund Policy" description="Last Updated: May 2026 · eSakha — NY All in One Solutions & Services" />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.num}>
              <h2 className="font-display text-lg font-bold text-brand-dark">
                {s.icon} {s.num}. {s.title}
              </h2>
              {s.isContact ? (
                <div className="mt-3 rounded-xl border border-line-2 bg-brand-light p-5 text-sm leading-relaxed text-ink-2">
                  <p>📍 Nagpur, Maharashtra, India</p>
                  <p>📞 {CONTACT.phoneE164}</p>
                  <p>🌐 esakha.in</p>
                  <p className="mt-2">
                    For any billing or refund-related questions, please contact us through our official
                    communication channels.
                  </p>
                </div>
              ) : (
                <>
                  {s.content && <p className="mt-3 text-sm leading-relaxed text-ink-2">{s.content}</p>}
                  {s.bullets && (
                    <ul className="mt-3 space-y-2">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-ink-2">
                          <span className="mt-0.5 text-brand">•</span> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
