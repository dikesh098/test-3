export type Platform = "instagram" | "facebook" | "linkedin" | "all";

export interface PlatformStat {
  platform: Platform;
  followers: string;
  engagement: string;
  posts: string;
  reach?: string;
}

export interface WorkAchievement {
  value: string;
  label: string;
}

export interface WorkClient {
  id: string;
  name: string;
  category: "college" | "brand" | "business";
  categoryLabel: string;
  icon: string;
  description: string;
  location: string;
  since: string;
  platforms: Platform[];
  platformStats: PlatformStat[];
  achievements: WorkAchievement[];
  highlight: string;
  accentColor: string;
}

export const WORK_CLIENTS: WorkClient[] = [
  {
    id: "aifs",
    name: "Asian Institute of Fire Safety",
    category: "college",
    categoryLabel: "Education / College",
    icon: "🏫",
    description:
      "Professional fire safety training institute in Gondia. We manage their full social media presence to drive enrollment enquiries and build authority in the fire safety training space.",
    location: "Gondia, Maharashtra",
    since: "2023",
    platforms: ["instagram", "facebook"],
    platformStats: [
      {
        platform: "instagram",
        followers: "10K+",
        engagement: "8%",
        posts: "200+",
        reach: "50K+/month",
      },
      {
        platform: "facebook",
        followers: "5K+",
        engagement: "6%",
        posts: "150+",
        reach: "30K+/month",
      },
    ],
    achievements: [
      { value: "10K+", label: "Instagram Followers" },
      { value: "50+", label: "Monthly Enquiries" },
      { value: "200+", label: "Posts Published" },
      { value: "8%", label: "Avg. Engagement Rate" },
    ],
    highlight: "Grew from 0 to 10K+ Instagram followers and 50+ monthly admission enquiries",
    accentColor: "#16a34a",
  },
  {
    id: "evoke-essentia",
    name: "EvokeEssentia",
    category: "brand",
    categoryLabel: "Skincare Brand",
    icon: "🧴",
    description:
      "Premium regenerative skincare brand. We handled the full brand launch strategy, content creation, and social media setup for their Instagram presence.",
    location: "Nagpur, Maharashtra",
    since: "2024",
    platforms: ["instagram"],
    platformStats: [
      {
        platform: "instagram",
        followers: "Growing",
        engagement: "High",
        posts: "50+",
        reach: "Active",
      },
    ],
    achievements: [
      { value: "50+", label: "Posts Created" },
      { value: "100%", label: "Brand Built from Scratch" },
      { value: "Active", label: "Consistent Presence" },
      { value: "2024", label: "Launch Year" },
    ],
    highlight: "Full brand launch from zero — identity, content, and social media built from scratch",
    accentColor: "#f0a500",
  },
  {
    id: "dj-helmet",
    name: "DJ Helmet",
    category: "brand",
    categoryLabel: "Safety Helmets",
    icon: "🪖",
    description:
      "Safety helmet brand targeting the motorsports and construction market. We build and maintain their social media authority with consistent content and engagement.",
    location: "Maharashtra",
    since: "2023",
    platforms: ["instagram", "facebook"],
    platformStats: [
      {
        platform: "instagram",
        followers: "16.5K+",
        engagement: "80%",
        posts: "300+",
        reach: "80K+/month",
      },
      {
        platform: "facebook",
        followers: "3K+",
        engagement: "5%",
        posts: "100+",
      },
    ],
    achievements: [
      { value: "16.5K+", label: "Instagram Followers" },
      { value: "80%", label: "Engagement Rate" },
      { value: "300+", label: "Posts Published" },
      { value: "80K+", label: "Monthly Reach" },
    ],
    highlight: "16.5K+ followers with an exceptional 80% engagement rate",
    accentColor: "#6b7280",
  },
  {
    id: "ak-lubricant",
    name: "A.K. Lubricant",
    category: "business",
    categoryLabel: "B2B Industrial",
    icon: "🛢️",
    description:
      "Industrial lubricant brand. We manage their LinkedIn and Facebook presence to build credibility and generate B2B leads.",
    location: "Maharashtra",
    since: "2024",
    platforms: ["instagram", "facebook", "linkedin"],
    platformStats: [
      { platform: "instagram", followers: "2K+", engagement: "8%", posts: "80+" },
      { platform: "facebook", followers: "1K+", engagement: "5%", posts: "60+" },
      { platform: "linkedin", followers: "500+", engagement: "6%", posts: "40+" },
    ],
    achievements: [
      { value: "2K+", label: "Instagram Followers" },
      { value: "500+", label: "LinkedIn Connections" },
      { value: "B2B", label: "Lead Generation Active" },
      { value: "3", label: "Platforms Managed" },
    ],
    highlight: "Active B2B lead generation across 3 platforms for industrial lubricant wholesale",
    accentColor: "#2563eb",
  },
];

export const OVERALL_STATS = [
  { value: "15+", label: "Clients Managed" },
  { value: "30K+", label: "Total Followers Built" },
  { value: "1000+", label: "Posts Published" },
  { value: "3", label: "Platforms (IG, FB, LI)" },
];

export const PLATFORM_ICONS: Record<Platform, string> = {
  instagram: "📸",
  facebook: "📘",
  linkedin: "💼",
  all: "🌐",
};

export const PLATFORM_LABELS: Record<Platform, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
  all: "All",
};

export const PLATFORM_COLORS: Record<Platform, string> = {
  instagram: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
  facebook: "from-[#1877f2] to-[#0d5fba]",
  linkedin: "from-[#0077b5] to-[#005885]",
  all: "from-brand to-brand-mid",
};
