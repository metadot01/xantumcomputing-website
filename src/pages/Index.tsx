import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import SolutionsSection from "@/components/SolutionsSection";
import PlatformSection from "@/components/PlatformSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import PartnershipSection from "@/components/PartnershipSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <SolutionsSection />
        <PlatformSection />
        <EnterpriseSection />
        <PartnershipSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
