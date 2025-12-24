import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import TechnologySection from "@/components/TechnologySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeatureHighlightsSection from "@/components/FeatureHighlightsSection";
import UseCasesSection from "@/components/UseCasesSection";
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
        <HowItWorksSection />
        <FeatureHighlightsSection />
        <UseCasesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
