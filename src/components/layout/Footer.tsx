import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Facebook, Phone, Globe, MapPin } from "lucide-react";
import { CONTACT, SITE, SOCIAL } from "@/lib/constants";

const DIGITAL_LINKS = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
];

const GOVT_LINKS = [
  { label: "GST Registration", href: "/services/gst-registration" },
  { label: "MSME / Udyam", href: "/services/udyam-msme-registration" },
  { label: "Company Registration", href: "/services/company-registration" },
  { label: "ITR Filing", href: "/services/itr-filing" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark px-5 pb-8 pt-16 text-white/65 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-3 flex items-center gap-2.5">
            <Image
              src="/brand/esakha-icon-192.png"
              alt="eSakha logo"
              width={34}
              height={34}
              className="rounded-lg"
            />
            <span className="font-display text-2xl font-extrabold tracking-tight text-white">
              e<span className="text-accent">S</span>akha
            </span>
          </Link>
          <p className="max-w-[280px] text-sm leading-7">
            {SITE.legalName}
            <br />
            {CONTACT.address}
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm">
            <Phone size={14} /> {CONTACT.phoneDisplay}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm">
            <Globe size={14} /> esakha.in
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] transition hover:-translate-y-0.5"
            >
              <Instagram size={16} color="white" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0077b5] transition hover:-translate-y-0.5"
            >
              <Linkedin size={16} color="white" />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2] transition hover:-translate-y-0.5"
            >
              <Facebook size={16} color="white" />
            </a>
          </div>
        </div>

        <FooterColumn title="Digital Services" links={DIGITAL_LINKS} />
        <FooterColumn title="Govt Services" links={GOVT_LINKS} />
        <FooterColumn title="Quick Links" links={QUICK_LINKS} />
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 pt-6 text-sm">
        <p className="flex items-center gap-2">
          <MapPin size={14} /> © {new Date().getFullYear()} {SITE.name} — {SITE.legalName}, Nagpur. Trusted
          Since {SITE.foundedYear}.
        </p>
        <p className="text-white/50">
          Designed &amp; Developed by{" "}
          <a
            href="https://dikeshgautam.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent transition hover:text-white"
          >
            Dikesh Gautam
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display mb-4 text-xs font-bold uppercase tracking-widest text-white">{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
