import { BlogPost } from "./types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "gst-vs-udyam-which-first",
    title: "GST or Udyam Registration — Which Should You Get First?",
    excerpt:
      "New business owners in Nagpur often ask us this in the first five minutes. Here's the short answer and the reasoning behind it.",
    date: "2026-02-10",
    readMinutes: 4,
    category: "Government Services",
    content: [
      "If you're starting a small business in Maharashtra, the two registrations that come up almost immediately are GST and Udyam (MSME). They serve different purposes, and which one you need first depends on your situation.",
      "Udyam registration is free to be eligible for and unlocks MSME benefits: priority lending, government scheme access, and protection against delayed payments from larger buyers. There's no turnover threshold to register — you can do it from day one.",
      "GST registration, on the other hand, becomes mandatory once your turnover crosses the threshold for your state and business type, or immediately if you sell on e-commerce platforms or across state lines. Many businesses register voluntarily earlier than required because clients and marketplaces ask for a GSTIN before they'll work with you.",
      "Our usual advice: get Udyam registered as soon as you start operating — there's no downside and it strengthens your position for loans later. Register for GST as soon as you cross the threshold, or earlier if a client or marketplace requires it. If you need both, our GST + Udyam + Gumasta combo covers all three in a single visit.",
    ],
  },
  {
    slug: "common-pf-withdrawal-rejections",
    title: "5 Reasons PF Withdrawal Claims Get Rejected (and How to Avoid Them)",
    excerpt:
      "Most PF claim rejections come down to small, fixable KYC mismatches — not big problems. Here's what to check before you file.",
    date: "2026-01-22",
    readMinutes: 5,
    category: "Government Services",
    content: [
      "We see the same handful of issues behind most PF withdrawal rejections, and almost all of them are fixable in advance.",
      "Aadhaar-UAN name mismatch: even a small spelling difference between your Aadhaar and EPFO records can trigger a rejection. Date of exit not updated: if your previous employer hasn't marked your date of exit, your claim may be held up regardless of how correctly you've filled the form. Bank account not seeded or IFSC mismatch: your bank account must be linked and verified against your UAN before filing. Mobile number not linked to Aadhaar: OTP-based steps will fail without this. KYC not approved by the employer: some KYC updates need employer approval on the EPFO portal before they're reflected.",
      "Before filing any PF claim, we check all five of these on your UAN and fix what's broken first — which is why most of our clients' claims go through cleanly on the first attempt.",
    ],
  },
  {
    slug: "website-redesign-signs",
    title: "5 Signs Your Business Website Needs a Redesign",
    excerpt:
      "Your website is often a customer's first impression of your business. Here's how to tell if it's helping or hurting.",
    date: "2025-12-05",
    readMinutes: 4,
    category: "Digital Services",
    content: [
      "A website that looked fine three years ago can quietly be costing you customers today. A few signs worth taking seriously: it doesn't look right on a phone (most of your visitors are on mobile), it loads slowly, the contact form doesn't actually reach your inbox, there's no clear next step for a visitor (call, WhatsApp, or enquire), and it hasn't been updated to reflect your current services or pricing.",
      "A redesign doesn't have to mean starting from zero — sometimes a faster, mobile-first rebuild of your existing structure and content is enough. The right starting point depends on what's actually broken, which is exactly what we cover on a free consultation call.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
