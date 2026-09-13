export interface RazorpayServiceOption {
  value: string;
  label: string;
  price: number;
}

export const RAZORPAY_SERVICES: RazorpayServiceOption[] = [
  { value: "", label: "Select service...", price: 0 },
  { value: "Website Development", label: "Website Development — Advance", price: 0 },
  { value: "App Development", label: "App Development — Advance", price: 0 },
  { value: "Digital Marketing - Starter", label: "Digital Marketing Starter — ₹15,000/mo", price: 15000 },
  { value: "Digital Marketing - Premium", label: "Digital Marketing Premium — ₹21,600/mo", price: 21600 },
  { value: "AI Agents & Automation", label: "AI Agents & Automation — Custom", price: 0 },
  { value: "CRM SaaS Platform", label: "CRM SaaS — Starter Plan — ₹2,499/mo", price: 2499 },
  { value: "Tech Support & Managed IT", label: "Tech Support & Managed IT — ₹5,000/mo", price: 5000 },
  { value: "Logo & Brand Kit", label: "Logo & Brand Kit — ₹4,000", price: 4000 },
  { value: "Single Landing Page", label: "Single Landing Page — ₹8,000", price: 8000 },
  { value: "SEO Audit", label: "SEO Audit — ₹3,000", price: 3000 },
  { value: "Custom Amount", label: "Custom Amount", price: 0 },
];
