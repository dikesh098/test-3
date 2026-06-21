import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        <span className="mt-6 inline-block rounded-full bg-brand-light px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-brand">
          {post.category}
        </span>
        <h1 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight text-brand-dark">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-xs text-ink-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} /> {post.readMinutes} min read
          </span>
        </div>

        <div className="mt-8 space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="leading-relaxed text-ink-2">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line-2 bg-brand-light p-6 text-center">
          <p className="text-sm font-medium text-brand-dark">Need help with this? Talk to our team directly.</p>
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Contact eSakha
          </Link>
        </div>
      </div>
    </article>
  );
}
