import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import { getFeaturedServices } from "@/lib/data/services";

export default function ServicesGrid() {
  const services = getFeaturedServices();
  return (
    <section className="px-5 py-20 sm:px-8" id="services">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="All Services"
          title="Complete Service List"
          subtitle="Click any card to see required documents, or pay directly online."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} delay={0.05 * i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand px-7 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand-light"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
