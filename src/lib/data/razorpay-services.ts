export interface RazorpayServiceOption {
  value: string;
  label: string;
  price: number;
}

export const RAZORPAY_SERVICES: RazorpayServiceOption[] = [
  { value: "", label: "Select service...", price: 0 },
  { value: "PF Withdrawal (Form 31)", label: "PF Withdrawal (Form 31) — ₹300", price: 300 },
  { value: "PF Withdrawal (Form 10+19)", label: "PF Withdrawal (10+19) — ₹1,200", price: 1200 },
  { value: "Udyam Registration", label: "Udyam Registration — ₹400", price: 400 },
  { value: "Gumasta Licence", label: "Gumasta Licence — ₹600", price: 600 },
  { value: "GST Registration", label: "GST Registration — ₹1,200", price: 1200 },
  { value: "GST + Udyam + Gumasta Combo", label: "GST + Udyam + Gumasta Combo — ₹2,000", price: 2000 },
  { value: "Food Licence FSSAI (1 Year)", label: "Food Licence FSSAI (1yr) — ₹500", price: 500 },
  { value: "ITR Filing", label: "ITR Filing — ₹1,000", price: 1000 },
  { value: "PAN Card (New)", label: "PAN Card (New) — ₹300", price: 300 },
  { value: "PAN Card (Correction)", label: "PAN Card (Correction) — ₹400", price: 400 },
  { value: "Form Filing", label: "Form Filing — ₹200", price: 200 },
  { value: "NEET/JEE/AIIMS Form", label: "NEET/JEE/AIIMS Form — ₹300", price: 300 },
  { value: "Police Clearance Certificate", label: "Police Clearance Certificate — ₹200", price: 200 },
  { value: "Social Media - Starter", label: "Social Media Starter — ₹15,000/mo", price: 15000 },
  { value: "Social Media - Premium", label: "Social Media Premium — ₹21,600/mo", price: 21600 },
  { value: "Custom Amount", label: "Custom Amount", price: 0 },
];
