"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { FAQS } from "@/lib/data/faqs";

export default function FaqAccordion() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = useMemo(() => ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))], []);
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return FAQS.filter((f) => {
      const matchesCategory = category === "All" || f.category === category;
      const matchesQuery =
        !query.trim() ||
        f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="relative mx-auto mb-8 max-w-xl">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-3" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs..."
          className="field-input pl-11"
        />
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              category === c
                ? "bg-brand text-white"
                : "border border-line bg-white text-ink-2 hover:border-brand hover:text-brand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-2xl space-y-3">
        {filtered.length === 0 && (
          <p className="text-center text-sm text-ink-3">No FAQs match your search. Try a different term.</p>
        )}
        {filtered.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.question} className="overflow-hidden rounded-xl border border-line bg-white">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-brand-dark">{f.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-ink-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && <p className="px-5 pb-4 text-sm leading-relaxed text-ink-2">{f.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
