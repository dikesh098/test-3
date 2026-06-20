import { Service } from "./types";

const standardGovtProcess = [
  "Free consultation — tell us what you need, in person or on WhatsApp.",
  "We list the exact documents required and verify what you share.",
  "We file or submit your application on the relevant government portal.",
  "You get your certificate / number directly, with full transparency on status.",
];

const standardDigitalProcess = [
  "Discovery call to understand your brand, goals, and audience.",
  "We share a plan, timeline, and quote — no surprises later.",
  "Design and build in short, reviewable cycles with your feedback.",
  "Launch, handover, and ongoing support if you choose a maintenance plan.",
];

export const SERVICES: Service[] = [
  // ---------------------------------------------------------------
  // GOVERNMENT / COMPLIANCE
  // ---------------------------------------------------------------
  {
    slug: "gst-registration",
    icon: "📊",
    category: "government",
    name: "GST Registration",
    shortDesc: "GST number for your business. Individual or combo with Udyam & Gumasta.",
    priceDisplay: "₹1,200 (Combo ₹2,000)",
    payAmount: 1200,
    featuredOnHome: true,
    overview:
      "GST registration is mandatory once your business crosses the prescribed turnover, or required by marketplaces and B2B clients before they'll work with you. We handle the full application on the GST portal, correct any errors before submission, and track it through to your GSTIN.",
    benefits: [
      "Legally collect and claim GST on your sales and purchases",
      "Required to sell on Amazon, Flipkart, and most B2B marketplaces",
      "Builds credibility with larger clients and vendors",
      "Bundle with Udyam + Gumasta for one combined visit and a lower combo rate",
    ],
    eligibility: [
      "Any business with turnover above the GST threshold for your state",
      "Voluntary registration is also allowed below the threshold",
      "E-commerce sellers and inter-state suppliers regardless of turnover",
    ],
    documents: [
      "Aadhaar card & PAN card of the proprietor/partners",
      "Business address proof (electricity bill / rent agreement)",
      "Bank statement or a cancelled cheque",
      "Passport-size photo of the owner",
      "Active email ID and mobile number for OTP verification",
    ],
    process: standardGovtProcess,
    faqs: [
      {
        question: "How long does GST registration take?",
        answer:
          "Typically 5–7 working days once all documents are verified and the application is submitted, though government processing times can vary.",
      },
      {
        question: "Is the GST + Udyam + Gumasta combo worth it?",
        answer:
          "Yes — most small businesses in Nagpur need all three eventually, and the ₹2,000 combo rate is lower than booking each separately.",
      },
    ],
  },
  {
    slug: "udyam-msme-registration",
    icon: "🏢",
    category: "government",
    name: "MSME / Udyam Registration",
    shortDesc: "Official MSME status for small & medium businesses. Quick processing.",
    priceDisplay: "₹300 – ₹500",
    payAmount: 400,
    featuredOnHome: true,
    overview:
      "Udyam registration gives your business official MSME (Micro, Small & Medium Enterprise) status, unlocking government scheme benefits, collateral-free loans, and priority in government tenders. The process is fully online and based on your Aadhaar and PAN.",
    benefits: [
      "Access to collateral-free MSME loans and lower interest rates",
      "Eligibility for government subsidies, schemes, and tender reservations",
      "Protection against delayed payments from buyers",
      "Often required alongside GST and Gumasta for full compliance",
    ],
    eligibility: [
      "Any proprietorship, partnership, LLP, or company classified as micro, small, or medium under MSME investment/turnover limits",
    ],
    documents: [
      "Aadhaar card of the business owner",
      "PAN card of the business/owner",
      "Business name and complete address",
      "Bank account details",
      "NIC code describing your business activity (we help identify this)",
    ],
    process: standardGovtProcess,
    faqs: [
      {
        question: "Is Udyam the same as MSME registration?",
        answer:
          "Yes — Udyam Registration is the current official portal and certificate name for what used to be called MSME registration.",
      },
    ],
  },
  {
    slug: "company-registration",
    icon: "🏛️",
    category: "government",
    name: "Company Registration",
    shortDesc: "Private Limited, LLP, or Partnership formation — end-to-end consultancy.",
    priceDisplay: "Custom Quote",
    payAmount: 0,
    featuredOnHome: false,
    overview:
      "Starting a Private Limited Company, LLP, or registered Partnership involves digital signatures, name approval, MCA filings, and a fair amount of paperwork. We guide you through the right structure for your situation and manage the filings with the Ministry of Corporate Affairs on your behalf.",
    benefits: [
      "Help you choose the right structure: Pvt Ltd, LLP, OPC, or Partnership",
      "Limited liability protection and a more fundable, credible entity",
      "Handles DIN, DSC, name approval, and MCA incorporation filings",
      "Guidance on the compliance calendar that follows incorporation",
    ],
    eligibility: [
      "At least 2 directors/partners for Pvt Ltd or LLP (1 for OPC)",
      "A registered office address in India",
      "No prior disqualification of proposed directors under the Companies Act",
    ],
    documents: [
      "PAN & Aadhaar of all directors/partners",
      "Passport-size photographs",
      "Registered office address proof",
      "Proposed company name options (2–3 preferences)",
      "Digital Signature Certificate (we assist if you don't have one)",
    ],
    process: [
      "Free consultation to choose the right business structure for you",
      "Name reservation and digital signature setup",
      "We draft and file incorporation documents with the MCA",
      "You receive your Certificate of Incorporation, PAN, and TAN",
    ],
    faqs: [
      {
        question: "Should I register a Pvt Ltd company or an LLP?",
        answer:
          "It depends on your funding plans, number of partners, and compliance appetite — we'll walk you through the trade-offs on the free consultation call before you decide.",
      },
    ],
  },
  {
    slug: "trademark-registration",
    icon: "®️",
    category: "government",
    name: "Trademark Registration",
    shortDesc: "Protect your brand name, logo, or tagline nationally.",
    priceDisplay: "Custom Quote",
    payAmount: 0,
    featuredOnHome: false,
    overview:
      "A registered trademark stops competitors from copying your brand name, logo, or tagline and gives you legal standing to act against infringement. We run a clearance search first, then handle the full filing with the Trademark Registry.",
    benefits: [
      "Exclusive nationwide right to use your brand name/logo in your category",
      "Legal recourse against copycats and lookalike brands",
      "Adds brand value and is often required by marketplaces and investors",
      "The ™ symbol can be used the day your application is filed",
    ],
    eligibility: [
      "Any individual, proprietorship, partnership, or company with a brand name, logo, or tagline to protect",
    ],
    documents: [
      "Logo/wordmark file (if registering a logo)",
      "Applicant's PAN and identity proof",
      "Business registration proof (if applying as a company/firm)",
      "List of goods/services the mark will be used for",
    ],
    process: [
      "We run a trademark clearance search to check for conflicts",
      "You approve the class(es) and final mark to be filed",
      "We file the application and track Registry examination",
      "You receive registration confirmation once approved",
    ],
    faqs: [
      {
        question: "How long does trademark registration take?",
        answer:
          "Filing happens within days, but Registry examination and the opposition window mean full registration usually takes 12–18 months — you can use ™ immediately after filing.",
      },
    ],
  },
  {
    slug: "gem-registration",
    icon: "🛒",
    category: "government",
    name: "GEM Registration",
    shortDesc: "Get listed as a seller on the Government e-Marketplace.",
    priceDisplay: "Custom Quote",
    payAmount: 0,
    featuredOnHome: false,
    overview:
      "GeM (Government e-Marketplace) registration lets your business sell products or services directly to central and state government departments. We set up your seller profile, catalogue, and compliance documents correctly the first time.",
    benefits: [
      "Direct access to government departments as buyers",
      "No middlemen — list and quote directly on the portal",
      "Builds a credible government-vendor track record over time",
    ],
    eligibility: [
      "Any proprietorship, partnership, LLP, or company with GST and Udyam registration",
      "Valid bank account in the business's name",
    ],
    documents: [
      "PAN and GSTIN of the business",
      "Udyam registration certificate",
      "Bank account details with a cancelled cheque",
      "Product/service catalogue details",
    ],
    process: [
      "Eligibility check and document verification",
      "Seller account creation and profile setup on GeM",
      "Catalogue and product listing assistance",
      "Guidance on your first bid/quote submission",
    ],
    faqs: [
      {
        question: "Do I need GST to register on GeM?",
        answer:
          "In most categories, yes — GST and Udyam registration are usually prerequisites, and we can set both up for you first if needed.",
      },
    ],
  },
  {
    slug: "tender-consultancy",
    icon: "📑",
    category: "government",
    name: "Tender Consultancy",
    shortDesc: "Find, prepare, and submit government & private tenders correctly.",
    priceDisplay: "Custom Quote",
    payAmount: 0,
    featuredOnHome: false,
    overview:
      "Winning tenders is as much about paperwork discipline as price. We help you track relevant tenders, assemble eligibility documents, prepare technical and financial bids, and submit them correctly within deadline.",
    benefits: [
      "Curated alerts for tenders matching your business category",
      "Help assembling EMD, technical bid, and financial bid documents",
      "Reduced risk of technical disqualification due to paperwork errors",
    ],
    eligibility: [
      "Registered businesses (proprietorship, partnership, LLP, or company) with GST and, where required, Udyam registration",
    ],
    documents: [
      "Company registration & GST certificates",
      "Past work experience / turnover proofs as required by the tender",
      "Bank solvency certificate (for larger tenders)",
      "Tender-specific technical documents (varies per tender)",
    ],
    process: [
      "We understand your business category and capacity",
      "We shortlist live tenders that match your eligibility",
      "We help prepare the technical & financial bid documents",
      "We assist with submission before the deadline",
    ],
    faqs: [
      {
        question: "Can you guarantee I'll win the tender?",
        answer:
          "No consultancy can guarantee a win — tenders are awarded on price and merit by the issuing department. What we guarantee is a complete, compliant, on-time submission.",
      },
    ],
  },
  {
    slug: "itr-filing",
    icon: "📋",
    category: "government",
    name: "ITR Filing",
    shortDesc: "Income Tax Return filing for individuals & businesses. Accurate and timely.",
    priceDisplay: "₹1,000 onwards",
    payAmount: 1000,
    featuredOnHome: true,
    overview:
      "Whether you're salaried, self-employed, or run a business, we prepare and file your Income Tax Return accurately, claim the deductions you're entitled to, and keep a record for future reference.",
    benefits: [
      "Correct ITR form selection based on your income sources",
      "Deduction review (80C, 80D, HRA, and more) before filing",
      "Acknowledgement and filed copy provided for your records",
    ],
    eligibility: [
      "Salaried individuals, freelancers, and business owners with taxable or refundable income",
      "Anyone who needs an ITR copy for a loan, visa, or tender application",
    ],
    documents: [
      "PAN card and Aadhaar card",
      "Form 16 (for salaried individuals)",
      "Bank statements for the financial year",
      "Investment proofs (80C, 80D, etc.) if claiming deductions",
    ],
    process: standardGovtProcess,
    faqs: [
      {
        question: "What if I have income from multiple sources?",
        answer:
          "That's common — bring statements for each source (salary, rent, freelance, capital gains) and we'll consolidate them into the correct ITR form.",
      },
    ],
  },
  {
    slug: "fssai-food-licence",
    icon: "🍽️",
    category: "government",
    name: "Food Licence (FSSAI)",
    shortDesc: "For restaurants, hotels, traders & manufacturers. 1yr, 5yr & State licences.",
    priceDisplay: "₹500 – ₹5,000",
    payAmount: 500,
    featuredOnHome: true,
    overview:
      "Anyone manufacturing, storing, distributing, or selling food needs an FSSAI licence or registration. We identify the correct category (Basic, State, or Central) for your scale of business and handle the filing.",
    benefits: [
      "Legally required to operate a food business in India",
      "Builds customer trust with the FSSAI mark on packaging/signage",
      "We identify whether you need Basic Registration or a State/Central Licence",
    ],
    eligibility: [
      "Restaurants, cloud kitchens, food trucks, traders, and manufacturers",
      "Eligibility tier depends on annual turnover and business scale",
    ],
    documents: [
      "Aadhaar card and PAN card",
      "Business address proof",
      "Details of food category/products handled",
      "Photograph of the shop/kitchen",
    ],
    process: standardGovtProcess,
    faqs: [
      {
        question: "Do home-based food businesses need FSSAI too?",
        answer:
          "Yes, even small home kitchens selling food commercially need at least Basic FSSAI Registration.",
      },
    ],
  },
  {
    slug: "gumasta-licence",
    icon: "🏪",
    category: "government",
    name: "Gumasta Licence (Shop Act)",
    shortDesc: "Shop & Establishment Act licence. Essential for legal operation in Maharashtra.",
    priceDisplay: "₹400 – ₹800",
    payAmount: 600,
    featuredOnHome: true,
    overview:
      "The Gumasta licence under the Maharashtra Shops & Establishment Act is the basic legal permission to operate any shop, office, or establishment in the state — and is often asked for when opening a current bank account.",
    benefits: [
      "Legal requirement to operate any shop or establishment in Maharashtra",
      "Usually required by banks to open a current account",
      "Quick processing with the right documents in hand",
    ],
    eligibility: [
      "Any shop, office, or commercial establishment operating in Maharashtra",
    ],
    documents: [
      "Aadhaar card and PAN card",
      "Photograph of the shop/establishment",
      "Address proof of the shop",
      "Business name and nature of activity",
    ],
    process: standardGovtProcess,
    faqs: [],
  },
  {
    slug: "pf-withdrawal",
    icon: "💰",
    category: "government",
    name: "PF Withdrawal",
    shortDesc: "Form 31, 10+19. KYC issues & date of exit corrections handled professionally.",
    priceDisplay: "₹300 onwards",
    payAmount: 300,
    featuredOnHome: true,
    overview:
      "PF withdrawal claims get rejected more often due to small KYC mismatches than anything else. We check your UAN, KYC, and date-of-exit status before filing so your Form 31 (advance) or Form 10+19 (full withdrawal) goes through cleanly.",
    benefits: [
      "We pre-check UAN KYC and bank-seeding status before filing",
      "Help correcting date-of-exit issues that commonly cause rejections",
      "Covers both partial advance (Form 31) and full settlement (Form 10+19)",
    ],
    eligibility: [
      "Any EPFO member with an active UAN wanting to withdraw or transfer PF",
    ],
    documents: [
      "Aadhaar card",
      "PAN card",
      "Bank passbook or cancelled cheque (account linked to UAN)",
      "UAN number",
      "Mobile number linked to Aadhaar (for OTP verification)",
    ],
    process: standardGovtProcess,
    faqs: [
      {
        question: "My claim was rejected before — can you help?",
        answer:
          "Yes, this is one of our most common requests. Bring your rejection reason/SMS and we'll diagnose and fix the underlying KYC issue before refiling.",
      },
    ],
  },
  {
    slug: "pan-card-services",
    icon: "🪪",
    category: "government",
    name: "PAN Card Services",
    shortDesc: "New PAN applications and corrections, handled end-to-end.",
    priceDisplay: "₹300 – ₹400",
    payAmount: 300,
    featuredOnHome: false,
    overview:
      "Whether you need a brand-new PAN card or a correction to your existing one (name, date of birth, photo, or address), we fill and submit the application correctly to avoid rejection delays.",
    benefits: [
      "New PAN applications for individuals and minors",
      "Corrections to name, spelling, date of birth, or photo",
      "Guidance on linking PAN with Aadhaar where required",
    ],
    eligibility: [
      "Any Indian resident or NRI needing a new PAN or a correction to an existing one",
    ],
    documents: [
      "Aadhaar card",
      "Passport-size photograph",
      "Existing PAN copy (for corrections)",
      "Proof supporting the correction requested (if name/DOB change)",
    ],
    process: standardGovtProcess,
    faqs: [],
  },
  {
    slug: "documentation-services",
    icon: "📄",
    category: "government",
    name: "Documentation Services",
    shortDesc: "Form filling, certificates, and exam/competitive forms — done right.",
    priceDisplay: "₹200 onwards",
    payAmount: 200,
    featuredOnHome: false,
    overview:
      "A catch-all for the everyday paperwork that's easy to get wrong: government form filling, Police Clearance Certificates, and competitive exam forms like NEET, JEE, and AIIMS. We fill, double-check, and submit so you don't lose a seat or an opportunity over a typo.",
    benefits: [
      "Careful, error-checked form filling for time-sensitive applications",
      "Police Clearance Certificate applications for visa/job purposes",
      "Competitive exam form filling (NEET / JEE / AIIMS) before deadlines",
    ],
    eligibility: ["Anyone needing assistance with government or exam-related forms"],
    documents: [
      "Aadhaar card and PAN card (where applicable)",
      "Photographs/signature scans per the specific form's requirements",
      "Any reference numbers or prior application details, if applicable",
    ],
    process: standardGovtProcess,
    faqs: [],
  },

  // ---------------------------------------------------------------
  // DIGITAL
  // ---------------------------------------------------------------
  {
    slug: "website-development",
    icon: "🌐",
    category: "digital",
    name: "Website Development",
    shortDesc: "Professional, mobile-responsive websites with SEO, contact forms & analytics.",
    priceDisplay: "₹60,000 – ₹1,50,000",
    payAmount: 0,
    featuredOnHome: true,
    overview:
      "We design and build fast, mobile-responsive websites that actually represent your brand — not a generic template. Every site includes basic SEO setup, working contact forms, and analytics so you can see who's visiting.",
    benefits: [
      "Custom design reflecting your brand, not a recycled template",
      "Mobile-responsive, fast-loading, and SEO-ready from day one",
      "Working contact/enquiry forms connected to your inbox",
      "Analytics setup so you can track visitors and conversions",
    ],
    eligibility: ["Any business wanting a new website or a redesign of an existing one"],
    documents: [
      "Business name and logo (or we design one)",
      "Content/text for each page (or we help draft it)",
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
    shortDesc: "Custom Android & iOS apps — booking systems, ecommerce, service platforms & more.",
    priceDisplay: "Custom Quote",
    payAmount: 0,
    featuredOnHome: true,
    overview:
      "From booking systems to ecommerce to internal business tools, we scope and build mobile apps tailored to how your business actually operates — not a one-size-fits-all template.",
    benefits: [
      "Native or cross-platform builds for Android and iOS",
      "Built around your real workflow: bookings, orders, services, or staff tools",
      "Post-launch support and update plans available",
    ],
    eligibility: ["Businesses needing a customer-facing or internal mobile app"],
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
    shortDesc: "Google Business, Instagram, Facebook management, content creation & paid ads.",
    priceDisplay: "₹15,000/month onwards",
    payAmount: 15000,
    featuredOnHome: true,
    overview:
      "Consistent posting, real engagement, and a clear monthly report — that's what we focus on. From Google Business Profile setup to Instagram/Facebook management and paid ad campaigns, we run it so you can run your business.",
    benefits: [
      "Content calendar with regular posts and reels",
      "Engagement management — comments and DMs handled professionally",
      "Monthly performance report so you can see what's working",
      "Optional paid advertising management for faster reach",
    ],
    eligibility: ["Any business wanting consistent, professional social media presence"],
    documents: [
      "Business name and logo",
      "Address and contact information",
      "Photos of your shop, products, or services",
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
    slug: "ai-solutions",
    icon: "🤖",
    category: "ai",
    name: "AI Solutions",
    shortDesc: "Chatbots, workflow automation, and AI tools tailored to your business.",
    priceDisplay: "Custom Quote",
    payAmount: 0,
    featuredOnHome: false,
    overview:
      "From a WhatsApp/website chatbot that answers customer questions to automating repetitive back-office work, we design practical AI tools scoped to a real business problem — not AI for its own sake.",
    benefits: [
      "Customer-facing chatbots for lead capture and FAQ handling",
      "Workflow automation for repetitive data entry or document tasks",
      "Built around the tools you already use, where possible",
    ],
    eligibility: ["Businesses with a specific repetitive task or customer-support load to automate"],
    documents: [
      "Description of the process or problem you want automated",
      "Sample data or documents involved in the current process",
      "Access to relevant existing tools/accounts, if applicable",
    ],
    process: [
      "Discovery call to understand the exact problem worth automating",
      "We propose the smallest tool that solves it well, with a quote",
      "Build and test against your real data/workflow",
      "Launch with a short handover so your team can use it confidently",
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
