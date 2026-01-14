import { lazy, Suspense, memo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Lazy load below-the-fold sections for better initial load performance
const CyxorLearningSection = lazy(() => import("@/components/CyxorLearningSection"));
const DefantraPartnershipSection = lazy(() => import("@/components/DefantraPartnershipSection"));
const CapabilitiesSection = lazy(() => import("@/components/CapabilitiesSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));

// Loading fallback component
const SectionLoader = memo(() => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
));

SectionLoader.displayName = "SectionLoader";

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <CyxorLearningSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <DefantraPartnershipSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CapabilitiesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FinalCTASection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
});

Index.displayName = "Index";

export default Index;