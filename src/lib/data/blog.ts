import { BlogPost } from "./types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-agent-vs-chatbot",
    title: "AI Agent or Just a Chatbot? Here's the Real Difference",
    excerpt:
      "Every vendor calls their product an 'AI agent' now. Here's how to tell what you're actually buying.",
    date: "2026-03-04",
    readMinutes: 4,
    category: "AI & Automation",
    content: [
      "A scripted chatbot follows a fixed decision tree: if the visitor's message matches a known pattern, it returns a canned reply. It's fast to build and fine for simple FAQs, but it breaks the moment a question falls outside its script.",
      "An AI agent reasons over your actual data — your docs, your product catalogue, your past conversations — and can take multi-step actions: looking something up, filling a form, escalating to a human, or updating a record in your CRM. It's not just answering; it's doing.",
      "The practical test we use with clients: list the five most common support requests you get. If a scripted chatbot can handle all five with a fixed flow, you probably don't need an agent yet. If even two of them require judgment or a lookup against live data, an agent pays for itself quickly.",
      "We typically start small — automate one real workflow, prove it works against your actual data, then expand. That's usually a smaller, cheaper first step than most businesses expect.",
    ],
  },
  {
    slug: "signs-you-need-a-crm",
    title: "5 Signs Your Business Has Outgrown Spreadsheets for Leads",
    excerpt:
      "Spreadsheets work great until they don't. Here's how to tell it's time to move your pipeline into a CRM.",
    date: "2026-02-12",
    readMinutes: 4,
    category: "CRM & SaaS",
    content: [
      "A few signs we hear consistently before a business switches: leads are going cold because no one remembers to follow up, two team members have contacted the same lead without knowing it, and monthly reporting means someone manually tallying a spreadsheet late on a Friday.",
      "A CRM doesn't have to mean an intimidating enterprise rollout. A lean setup — one shared inbox for leads, clear pipeline stages, and automated follow-up reminders — solves most of this in the first week.",
      "The migration itself is usually the scariest part in people's heads and the easiest part in practice: we import your existing spreadsheet data directly, so your team starts with real leads on day one instead of an empty dashboard.",
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
