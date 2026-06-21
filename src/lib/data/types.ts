export type ServiceCategory = "government" | "digital" | "ai";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  icon: string;
  category: ServiceCategory;
  name: string;
  shortDesc: string;
  priceDisplay: string;
  /** Numeric amount to prefill the Razorpay modal. 0 = custom / consult only. */
  payAmount: number;
  featuredOnHome: boolean;
  overview: string;
  benefits: string[];
  eligibility: string[];
  documents: string[];
  process: string[];
  faqs: ServiceFaq[];
}

export interface JobOpening {
  id: string;
  title: string;
  dept: string;
  badge: string;
  desc: string;
  skills: string[];
  responsibilities: string[];
  duration: string;
  stipend: string;
}

export interface Testimonial {
  initial: string;
  name: string;
  role: string;
  text: string;
}

export interface PortfolioItem {
  name: string;
  icon: string;
  accent: string;
  badge: string;
  badgeText: string;
  desc: string;
  stats: { value: string; label: string; growing?: boolean }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: string;
  content: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
