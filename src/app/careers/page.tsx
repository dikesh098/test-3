"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";
import { JOB_OPENINGS } from "@/lib/data/jobs";

export default function CareersPage() {
  const [selectedTitle, setSelectedTitle] = useState<string | undefined>();

  const handleApply = (title: string) => {
    setSelectedTitle(title);
    setTimeout(() => {
      document.getElementById("career-form")?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers at eSakha"
        title="Build Real Things, From Day One"
        description="We bring on interns and team members across technology, AI, security, and digital marketing — and put them on real client work immediately."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading label="Open Positions" title="Current Openings & Internships" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {JOB_OPENINGS.map((job, i) => (
              <Reveal key={job.id} delay={0.06 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-ink-3">{job.dept}</span>
                    <span className="rounded-full bg-brand-light px-2.5 py-1 text-[0.68rem] font-bold text-brand">
                      {job.badge}
                    </span>
                  </div>
                  <h3 className="font-display mt-2 text-lg font-bold text-brand-dark">{job.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{job.desc}</p>

                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-ink-3">Skills</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {job.skills.map((s) => (
                        <span key={s} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-ink-2">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-xs text-ink-2">
                        <span className="mt-0.5 text-brand">•</span> {r}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-ink-3">
                    <span>⏱ {job.duration}</span>
                    <span>💰 {job.stipend}</span>
                  </div>

                  <button
                    onClick={() => handleApply(job.title)}
                    className="mt-4 rounded-xl bg-brand py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
                  >
                    Apply for this role
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="career-form" className="bg-surface-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <CareerApplicationForm selectedTitle={selectedTitle} />
        </div>
      </section>
    </>
  );
}
