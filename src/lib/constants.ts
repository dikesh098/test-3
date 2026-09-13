// Central place for eSakha business facts used across the site.
// Update these once and every page, form, and footer stays in sync.

export const SITE = {
  name: "eSakha",
  legalName: "NY All in One Solutions & Services",
  tagline: "Your Tech Growth Partner",
  description:
    "eSakha builds websites, apps, and AI agents, runs digital marketing and social media, and ships a CRM SaaS platform with ongoing tech support — everything a growing business needs under one roof. Trusted in Nagpur since 2019.",
  url: "https://esakha.in",
  foundedYear: 2019,
};

export const CONTACT = {
  phoneDisplay: "8669845548",
  phoneE164: "+918669845548",
  whatsappNumber: "918669845548",
  email: "esakha.nagpur@gmail.com",
  address: "Pili Nadi, Kamptee Road, Nagpur, Maharashtra",
  hours: [
    { days: "Mon – Sat", time: "9:00 AM – 8:30 PM" },
    { days: "Sunday", time: "3:00 PM – 5:00 PM" },
  ],
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Pili+Nadi,+Kamptee+Road,+Nagpur,+Maharashtra&output=embed",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const SOCIAL = {
  instagram: "https://www.instagram.com/esakha_in?igsh=MWs1OGw3eG0zbzkxdA==",
  linkedin: "https://www.linkedin.com/company/ny-all-in-one-solutions-and-services-ltd/",
  facebook: "https://www.facebook.com/share/1BVZSNoKBx/",
};

export const RAZORPAY_KEY_ID =
  process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_SqSyHuBxCbidk2";
