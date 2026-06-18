import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ChatWidget from "@/components/chat/ChatWidget";
import { PayModalProvider } from "@/components/payment/PayModalProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Business Consultancy & Digital Services in Nagpur`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "eSakha",
    "GST registration Nagpur",
    "MSME registration",
    "company registration Nagpur",
    "website development Nagpur",
    "digital marketing Nagpur",
    "trademark registration",
    "business consultancy Maharashtra",
  ],
  openGraph: {
    title: `${SITE.name} — Business Consultancy & Digital Services`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Business Consultancy & Digital Services`,
    description: SITE.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: "+918669845548",
    email: "esakha.nagpur@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pili Nadi, Kamptee Road",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: ["Nagpur", "Maharashtra", "Mumbai", "India"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "15:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/esakha_in",
      "https://www.linkedin.com/company/ny-all-in-one-solutions-and-services-ltd/",
      "https://www.facebook.com/share/1BVZSNoKBx/",
    ],
  };

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-ink antialiased">
        <PayModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <ChatWidget />
        </PayModalProvider>
      </body>
    </html>
  );
}
