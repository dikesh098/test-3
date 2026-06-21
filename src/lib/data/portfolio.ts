import { PortfolioItem } from "./types";

export const PORTFOLIO: PortfolioItem[] = [
  {
    name: "EvokeEssentia",
    icon: "🧴",
    accent: "#f0a500",
    badge: "premium",
    badgeText: "Coming Soon",
    desc: "Premium regenerative skincare brand launch with focus on metabolic beauty positioning.",
    stats: [
      { value: "…", label: "Followers" },
      { value: "…", label: "Engagement Rate" },
      { value: "…", label: "Orders" },
    ],
  },
  {
    name: "DJ Helmet",
    icon: "🪖",
    accent: "#6b7280",
    badge: "product",
    badgeText: "Product Brand",
    desc: "Safety helmet brand. Growing social presence, building brand authority in motorsports.",
    stats: [
      { value: "16.5K+", label: "Followers" },
      { value: "80%", label: "Engagement" },
      { value: "Active", label: "Growing", growing: true },
    ],
  },
  {
    name: "A.K. Lubricant",
    icon: "🛢️",
    accent: "#2563eb",
    badge: "b2b",
    badgeText: "B2B Industrial",
    desc: "Industrial lubricant brand. Building B2B presence, lead generation for wholesale partners.",
    stats: [
      { value: "2K+", label: "Followers" },
      { value: "8%", label: "Engagement" },
      { value: "Active", label: "Growing", growing: true },
    ],
  },
  {
    name: "Asian Institute of Fire Safety",
    icon: "🏫",
    accent: "#16a34a",
    badge: "edu",
    badgeText: "Education",
    desc: "Professional training institute. Growing enrollment through targeted social media campaigns.",
    stats: [
      { value: "10K+", label: "Followers" },
      { value: "60%", label: "Engagement" },
      { value: "50+", label: "Inquiries/mo" },
    ],
  },
];
