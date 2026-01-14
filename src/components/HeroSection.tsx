import { memo } from "react";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroFeatureCards from "./HeroFeatureCards";
import HeroTrustedBy from "./HeroTrustedBy";

// Memoized background component to prevent re-renders
const HeroBackground = memo(() => (
  <>
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyxor/5 rounded-full blur-3xl" />
    </div>
    {/* Geometric Pattern */}
    <div className="absolute inset-0 geometric-pattern opacity-20" />
  </>
));

HeroBackground.displayName = "HeroBackground";

// Memoized hero header content
const HeroHeader = memo(() => (
  <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
    {/* Badge */}
    <div 
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8 opacity-0 animate-fade-in"
      style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
    >
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      <span className="text-xs md:text-sm text-white/90 font-medium">Partnership with Defantra Ltd, UK</span>
    </div>

    {/* Headline */}
    <h1 
      className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white opacity-0 animate-fade-in leading-[1.1]"
      style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
    >
      Engineering{" "}
      <span className="text-cyxor">AI & BLOCKCHAIN</span>{" "}
      Solutions
    </h1>

    {/* Description */}
    <p 
      className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-10 opacity-0 animate-fade-in leading-relaxed"
      style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
    >
      Xantum™ Computing delivers AI, machine learning, and blockchain solutions for regulated financial and enterprise environments. Through our partnership with Defantra Ltd (UK), we provide secure, compliance-ready technology and operate <span className="text-cyxor font-semibold">Cyxor Learning</span>, our platform for AI, technology, and compliance education.
    </p>

    {/* CTA Buttons */}
    <div 
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
    >
      <HeroCTAButtons />
    </div>
  </div>
));

HeroHeader.displayName = "HeroHeader";

const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        <HeroHeader />

        {/* Feature Cards */}
        <div 
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <HeroFeatureCards />
        </div>

        {/* Trust Indicators */}
        <div 
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <HeroTrustedBy />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
