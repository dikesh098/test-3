"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, CreditCard } from "lucide-react";
import { usePayModal } from "@/components/payment/PayModalProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { openPay } = usePayModal();

  return (
    <>
      <header className="sticky top-0 z-[200] flex h-[68px] items-center border-b border-line bg-white/96 px-5 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/brand/esakha-icon-192.png"
              alt="eSakha logo"
              width={34}
              height={34}
              className="rounded-lg"
              priority
            />
            <span className="font-display text-2xl font-extrabold tracking-tight text-brand">
              e<span className="text-accent">S</span>akha
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-brand ${
                    active ? "text-brand" : "text-ink-2"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded bg-brand" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openPay()}
              className="hidden items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-dark sm:flex"
            >
              <CreditCard size={15} /> Pay Online
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-md text-ink lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 top-[68px] z-[199] flex flex-col border-b border-line bg-white px-5 py-2 shadow-lg lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3 text-sm font-medium text-ink-2 last:border-none hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openPay();
            }}
            className="my-3 flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
          >
            <CreditCard size={15} /> Pay Online
          </button>
        </div>
      )}
    </>
  );
}
