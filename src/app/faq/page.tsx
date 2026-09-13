import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FaqAccordion from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about eSakha's web, app, AI, and CRM services, pricing, and refund policy.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Search or browse by category. Can't find your answer? Message us on WhatsApp."
      />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
