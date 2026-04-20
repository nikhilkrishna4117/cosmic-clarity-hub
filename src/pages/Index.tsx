import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Trust from "@/components/sections/Trust";
import CtaBanner from "@/components/sections/CtaBanner";
import Upsell from "@/components/sections/Upsell";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import LeadModal from "@/components/LeadModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { LeadModalProvider } from "@/contexts/LeadModalContext";

const Index = () => (
  <LeadModalProvider>
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Trust />
      <CtaBanner />
      <Upsell />
      <FAQ />
      <FinalCta />
      <Footer />
      <LeadModal />
      <WhatsAppFloat />
    </main>
  </LeadModalProvider>
);

export default Index;
