import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CyxorLearningSection from "@/components/CyxorLearningSection";
import DefantraPartnershipSection from "@/components/DefantraPartnershipSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CyxorLearningSection />
        <DefantraPartnershipSection />
        <CapabilitiesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;