import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesOverview from "@/components/home/ServicesOverview";
import ServicesGrid from "@/components/home/ServicesGrid";
import QuickPayBanner from "@/components/home/QuickPayBanner";
import Portfolio from "@/components/home/Portfolio";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import RatesTable from "@/components/home/RatesTable";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <HowItWorks />
      <ServicesOverview />
      <ServicesGrid />
      <QuickPayBanner />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <RatesTable />
      <ContactSection />
    </>
  );
}
