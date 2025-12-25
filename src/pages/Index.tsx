import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import TechnologySection from "@/components/TechnologySection";
import CyxorLearningSection from "@/components/CyxorLearningSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import UseCasesSection from "@/components/UseCasesSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import FeaturedSolutionsSection from "@/components/FeaturedSolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechStackSection from "@/components/TechStackSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <TechnologySection />
        <CyxorLearningSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <UseCasesSection />
        <WhyPartnerSection />
        <FeaturedSolutionsSection />
        <TestimonialsSection />
        <TechStackSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
