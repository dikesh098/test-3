import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See eSakha's social media work for colleges, brands and businesses across Instagram, Facebook and LinkedIn.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real Work. Real Results."
        description="From college social media to brand growth — here's what we've built and grown for our clients across Instagram, Facebook, and LinkedIn."
      />
      <OurWorkClient />
    </>
  );
}
