import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides on GST, MSME, PF withdrawal, and digital growth for small businesses in Nagpur and Maharashtra.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="eSakha Blog"
        title="Practical Guides for Business Owners"
        description="Straight answers on compliance, registrations, and digital growth — no jargon."
      />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-5">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={0.06 * i}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-brand hover:shadow-[var(--shadow-card-lg)]"
              >
                <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-brand">
                  {post.category}
                </span>
                <h2 className="font-display mt-3 text-xl font-bold text-brand-dark group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {post.readMinutes} min read
                  </span>
                  <span className="ml-auto flex items-center gap-1 font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                    Read <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
