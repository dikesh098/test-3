import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const DIGITAL_ITEMS = [
  "Social Media Management (Instagram, Facebook)",
  "Website Development & Design",
  "Mobile App Development",
  "Video Production & Reels",
  "Brand Launch Strategy",
  "Content Creation & Paid Ads",
];

const GOVT_ITEMS = [
  "GST Registration & Filing",
  "ITR Filing (Income Tax)",
  "PF Withdrawal (Form 31, 10+19)",
  "Udyam / MSME Registration",
  "Gumasta Licence & FSSAI",
  "PAN Card Services",
];

export default function ServicesOverview() {
  return (
    <section className="bg-surface-2 px-5 py-20 sm:px-8" id="services-overview">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="What We Offer"
          title="Two Core Areas, One Team"
          subtitle="From building your digital presence to staying government-compliant — eSakha covers it all."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-9 shadow-[var(--shadow-card)]">
              <span className="mb-3 text-4xl">🚀</span>
              <h3 className="font-display text-2xl font-bold text-brand-dark">Digital Services</h3>
              <p className="mt-1.5 text-sm text-ink-2">
                Brand launches, social media, website &amp; app development, and video production.
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {DIGITAL_ITEMS.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-2">
                    <span className="mt-0.5 font-bold text-brand">✓</span> {i}
                  </li>
                ))}
              </ul>
              <div className="font-display mt-6 text-lg font-extrabold text-brand">₹15,000 – ₹1,50,000+</div>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Discuss Your Project
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="flex h-full flex-col rounded-2xl border-2 border-brand bg-gradient-to-br from-brand-light to-white p-9 shadow-[var(--shadow-card)]">
              <span className="mb-3 text-4xl">🏛️</span>
              <h3 className="font-display text-2xl font-bold text-brand-dark">Government Services</h3>
              <p className="mt-1.5 text-sm text-ink-2">
                Complete compliance, registration &amp; legal documentation — fast &amp; transparent.
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {GOVT_ITEMS.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-2">
                    <span className="mt-0.5 font-bold text-brand">✓</span> {i}
                  </li>
                ))}
              </ul>
              <div className="font-display mt-6 text-lg font-extrabold text-brand">₹300 – ₹5,000</div>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border-2 border-brand bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand-light"
              >
                Get Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
