import { Service } from "./types";

const standardDigitalProcess = [
  "Discovery call to understand your brand, goals, and audience.",
  "We share a plan, timeline, and quote — no surprises later.",
  "Design and build in short, reviewable cycles with your feedback.",
  "Launch, handover, and ongoing support if you choose a maintenance plan.",
];

const standardSaasProcess = [
  "Discovery call to map your workflow, team size, and existing tools.",
  "We configure a starter workspace and share a rollout plan.",
  "Data import, integrations, and team onboarding with hands-on training.",
  "Go live with a dedicated support channel for the first 30 days.",
];

export const SERVICES: Service[] = [
  // ---------------------------------------------------------------
  // DIGITAL — websites, apps, growth
  // ---------------------------------------------------------------
  {
    slug: "website-development",
    icon: "🌐",
    category: "digital",
    name: "Website Development",
    shortDesc: "Fast, mobile-first websites with SEO, analytics & clean code — built to convert.",
    priceDisplay: "₹60,000 – ₹1,50,000",
    payAmount: 0,
    featuredOnHome: true,
    overview:
      "We design and build fast, mobile-responsive websites that actually represent your brand — not a generic template. Every site ships with SEO fundamentals, working forms, and analytics wired in from day one.",
    benefits: [
      "Custom design reflecting your brand, not a recycled template",
      "Mobile-responsive, fast-loading, and SEO-ready from day one",
      "Working contact/enquiry forms connected to your inbox",
      "Analytics setup so you can track visitors and conversions",
    ],
    eligibility: ["Any business or startup wanting a new website or a redesign of an existing one"],
    documents: [
      "Business name and logo (or we design one)",
      "Content/copy for each page (or we help draft it)",
      "Photos and brand assets",
      "Domain name (or we register one for you)",
      "Hosting preference, if you already have one",
    ],
    process: standardDigitalProcess,
    faqs: [
      {
        question: "Do you also handle hosting and domain renewal?",
        answer:
          "Yes, we can set up and manage hosting and domain renewal for you, or hand over full access if you'd rather manage it yourself.",
      },
    ],
  },
  {
    slug: "app-development",
    icon: "📱",
    category: "digital",
    name: "App Development",
    shortDesc: "Custom Android & iOS apps — booking systems, marketplaces, internal tools & more.",
    priceDisplay: "Custom Quote",
    payAmount: 0,
    featuredOnHome: true,
    overview:
      "From booking systems to marketplaces to internal business tools, we scope and build mobile apps tailored to how your business actually operates — not a one-size-fits-all template.",
    benefits: [
      "Native or cross-platform builds for Android and iOS",
      "Built around your real workflow: bookings, orders, services, or staff tools",
      "Post-launch support and update plans available",
    ],
    eligibility: ["Startups and businesses needing a customer-facing or internal mobile app"],
    documents: [
      "App concept / idea brief",
      "Target audience details",
      "Key features list",
      "Design preferences or reference apps",
      "Timeline and budget range",
    ],
    process: standardDigitalProcess,
    faqs: [],
  },
  {
    slug: "digital-marketing",
    icon: "📣",
    category: "digital",
    name: "Digital Marketing & Social Media",
    shortDesc: "Content, community management, and paid ads across Instagram, Meta & Google.",
    priceDisplay: "₹15,000/month onwards",
    payAmount: 15000,
    featuredOnHome: true,
    overview:
      "Consistent posting, real engagement, and a clear monthly report — that's what we focus on. From content strategy to Instagram/Facebook management to paid ad campaigns, we run it so you can run your business.",
    benefits: [
      "Content calendar with regular posts and reels",
      "Engagement management — comments and DMs handled professionally",
      "Monthly performance report so you can see what's working",
      "Optional paid advertising management for faster reach",
    ],
    eligibility: ["Startups and businesses wanting a consistent, professional social presence"],
    documents: [
      "Business name and logo",
      "Brand voice / positioning notes, if you have them",
      "Photos of your product, team, or workspace",
      "Access to your Google/Instagram/Facebook accounts (or we create new ones)",
    ],
    process: standardDigitalProcess,
    faqs: [
      {
        question: "Can you guarantee followers or sales?",
        answer:
          "No ethical agency can guarantee specific follower counts or sales — what we commit to is consistent, quality execution and transparent monthly reporting on what's actually happening.",
      },
    ],
  },
  {
    slug: "ai-agents-automation",
    icon: "🤖",
    category: "ai",
    name: "AI Agents & Automation",
    shortDesc: "Custom AI agents, chatbots, and workflow automation built on your own data.",
    priceDisplay: "Custom Quote",
    payAmount: 0,
    featuredOnHome: true,
    overview:
      "From a support agent that answers customer questions in your voice to automating repetitive back-office work, we design and ship AI agents scoped to a real business problem — not AI for its own sake.",
    benefits: [
      "Customer-facing AI agents for support, lead capture, and FAQ handling",
      "Workflow automation for repetitive data entry, reporting, or follow-ups",
      "Agents trained on your docs, tone, and product — not a generic script",
      "Built to plug into the tools you already use, where possible",
    ],
    eligibility: ["Startups and businesses with a repetitive task or support load worth automating"],
    documents: [
      "Description of the process or problem you want automated",
      "Sample data, docs, or conversations involved in the current workflow",
      "Access to relevant existing tools/accounts, if applicable",
    ],
    process: [
      "Discovery call to understand the exact problem worth automating",
      "We propose the smallest agent that solves it well, with a quote",
      "Build and test against your real data and workflow",
      "Launch with a short handover so your team can run it confidently",
    ],
    faqs: [
      {
        question: "Is this the same as a plain chatbot?",
        answer:
          "No — a scripted chatbot follows a fixed decision tree. An AI agent reasons over your data and can take multi-step actions (looking things up, filling forms, escalating), which is what we scope and build.",
      },
    ],
  },

  // ---------------------------------------------------------------
  // SAAS — the CRM platform product
  // ---------------------------------------------------------------
  {
    slug: "crm-saas-platform",
    icon: "📈",
    category: "saas",
    name: "CRM SaaS Platform",
    shortDesc: "One workspace for leads, pipelines, and follow-ups — built for small teams.",
    priceDisplay: "₹2,499/month onwards",
    payAmount: 2499,
    featuredOnHome: true,
    overview:
      "Our CRM platform gives your sales and support team one place to track leads, manage pipelines, and automate follow-ups — without the setup overhead of enterprise CRMs. We onboard your team and configure it around how you actually sell.",
    benefits: [
      "Lead capture from your website, WhatsApp, and ad forms in one inbox",
      "Visual pipeline stages you can customize per team",
      "Automated follow-up reminders and AI-drafted replies",
      "Dashboards and reports without spreadsheet exports",
    ],
    eligibility: ["Startups and small-to-mid businesses managing leads across multiple channels"],
    documents: [
      "Rough outline of your current sales/lead process",
      "Team size and roles who'll need access",
      "Existing tools you want to migrate data from, if any",
    ],
    process: standardSaasProcess,
    faqs: [
      {
        question: "Can you migrate our data from spreadsheets or another CRM?",
        answer:
          "Yes — we handle a clean import from spreadsheets or most common CRMs as part of onboarding, so your team starts with real data, not an empty workspace.",
      },
      {
        question: "Is there a free trial?",
        answer: "Yes — a 14-day trial on the Starter plan, no card required to begin.",
      },
    ],
  },
  {
    slug: "tech-support-maintenance",
    icon: "🛠️",
    category: "saas",
    name: "Tech Support & Managed IT",
    shortDesc: "Ongoing maintenance, uptime monitoring, and priority support for your stack.",
    priceDisplay: "₹5,000/month onwards",
    payAmount: 5000,
    featuredOnHome: true,
    overview:
      "Once your website, app, or CRM is live, someone needs to keep it running — patching, monitoring uptime, fixing bugs, and being reachable when something breaks. We run that so you don't have to hire an in-house team for it.",
    benefits: [
      "Uptime and error monitoring with proactive alerts",
      "Regular security patches and dependency updates",
      "Priority bug-fix turnaround on a defined SLA",
      "A direct line to your dev team, not a ticket queue",
    ],
    eligibility: ["Anyone running a website, app, or CRM that needs ongoing upkeep"],
    documents: [
      "Access to the systems that need support (hosting, repo, admin panels)",
      "A short list of known issues or pain points, if any",
    ],
    process: [
      "Audit of your current setup and access handover",
      "We agree on an SLA and monthly scope",
      "Monitoring and maintenance run continuously in the background",
      "Monthly report on uptime, fixes shipped, and open items",
    ],
    faqs: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return SERVICES.filter((s) => s.featuredOnHome);
}

export function getServicesByCategory(category: Service["category"]): Service[] {
  return SERVICES.filter((s) => s.category === category);
}
