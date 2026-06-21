"use client";

import { useEffect } from "react";
import { RefreshCcw, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <span className="text-5xl">⚠️</span>
      <h1 className="font-display mt-4 text-2xl font-bold text-brand-dark">Something Went Wrong</h1>
      <p className="mt-2 max-w-md text-ink-2">
        An unexpected error occurred while loading this page. Please try again, or reach us directly if it
        persists.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          <RefreshCcw size={16} /> Try Again
        </button>
        <a
          href={`https://wa.me/${CONTACT.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand-light"
        >
          <MessageCircle size={16} /> Contact Us
        </a>
      </div>
    </section>
  );
}
