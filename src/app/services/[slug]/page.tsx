import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, FileText, ListChecks, HelpCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ServiceApplicationForm from "@/components/forms/ServiceApplicationForm";
import { SERVICES, getServiceBySlug } from "@/lib/data/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDesc,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow={service.category === "ai" ? "AI Solutions" : service.category === "digital" ? "Digital Services" : "Government Services"} title={service.name} description={service.shortDesc} />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-12">
            <Reveal>
              <div>
                <h2 className="font-display text-xl font-bold text-brand-dark">Overview</h2>
                <p className="mt-3 leading-relaxed text-ink-2">{service.overview}</p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-display flex items-center gap-2 text-xl font-bold text-brand-dark">
                  <CheckCircle2 size={20} className="text-brand" /> Benefits
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink-2">
                      <span className="mt-0.5 font-bold text-brand">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {service.eligibility.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="font-display flex items-center gap-2 text-xl font-bold text-brand-dark">
                    <ListChecks size={20} className="text-brand" /> Eligibility
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {service.eligibility.map((e) => (
                      <li key={e} className="flex items-start gap-2.5 text-sm text-ink-2">
                        <span className="mt-0.5 font-bold text-brand">•</span> {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            <Reveal>
              <div>
                <h2 className="font-display flex items-center gap-2 text-xl font-bold text-brand-dark">
                  <FileText size={20} className="text-brand" /> Required Documents
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {service.documents.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 rounded-lg bg-surface-2 px-4 py-3 text-sm text-ink-2"
                    >
                      <span className="mt-0.5 font-bold text-brand">📄</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="font-display text-xl font-bold text-brand-dark">Process</h2>
                <div className="mt-5 space-y-5">
                  {service.process.map((p, i) => (
                    <div key={p} className="flex gap-4">
                      <div className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                        {i + 1}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ink-2">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {service.faqs.length > 0 && (
              <Reveal>
                <div>
                  <h2 className="font-display flex items-center gap-2 text-xl font-bold text-brand-dark">
                    <HelpCircle size={20} className="text-brand" /> FAQ
                  </h2>
                  <div className="mt-4 space-y-3">
                    {service.faqs.map((f) => (
                      <div key={f.question} className="rounded-xl border border-line bg-white p-5">
                        <h3 className="text-sm font-semibold text-brand-dark">{f.question}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-5 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="text-xs font-bold uppercase tracking-widest text-ink-3">Pricing</div>
              <div className="font-display mt-1 text-2xl font-extrabold text-brand">{service.priceDisplay}</div>
              <p className="mt-2 text-xs text-ink-3">
                {service.payAmount > 0
                  ? "Pay online securely, or apply below and pay later."
                  : "Custom-quoted after a free consultation."}
              </p>
            </div>
            <ServiceApplicationForm
              serviceSlug={service.slug}
              serviceName={service.name}
              payAmount={service.payAmount}
            />
          </div>
        </div>
      </section>
    </>
  );
}
