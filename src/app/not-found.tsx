import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <span className="font-display text-6xl font-extrabold text-brand-light">404</span>
      <h1 className="font-display mt-3 text-2xl font-bold text-brand-dark">Page Not Found</h1>
      <p className="mt-2 max-w-md text-ink-2">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          <Home size={16} /> Back to Home
        </Link>
        <a
          href={`https://wa.me/${CONTACT.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand-light"
        >
          <MessageCircle size={16} /> Ask on WhatsApp
        </a>
      </div>
    </section>
  );
}
