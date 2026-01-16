import { memo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CyxorLearningSection from "@/components/CyxorLearningSection";
import DefantraPartnershipSection from "@/components/DefantraPartnershipSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DefantraPartnershipSection />
        <CyxorLearningSection />
        <CapabilitiesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
});

Index.displayName = "Index";

export default Index;