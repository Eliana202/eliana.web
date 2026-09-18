import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Bio from '@/components/Bio';
import Services from '@/components/Services';
import AutomationSection from '@/components/AutomationSection';
import TechSupportSection from '@/components/TechSupportSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-[#e2e8f0] selection:bg-[#00dce5]/25 selection:text-[#00f5ff] relative overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Bio / Professional Presentation */}
      <Bio />

      {/* Core Services Section */}
      <Services />

      {/* Specialized Automation Section */}
      <AutomationSection />

      {/* Tech Support & IT Services Section */}
      <TechSupportSection />

      {/* Portfolio & Case Studies Section */}
      <PortfolioSection />

      {/* 5-Step Process Section */}
      <ProcessSection />

      {/* Pricing & Commercial Proposals Section (No fixed prices highlighted) */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp with Status */}
      <FloatingWhatsApp />
    </main>
  );
}
