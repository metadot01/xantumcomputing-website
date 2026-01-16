import { memo, useEffect, useState } from "react";
import HeroCTAButtons from "./HeroCTAButtons";
import HeroFeatureCards from "./HeroFeatureCards";
import HeroTrustedBy from "./HeroTrustedBy";

// Hook for parallax scroll effect
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

// Memoized background component with parallax
const HeroBackground = memo(({ scrollY }: { scrollY: number }) => (
  <>
    {/* Background Pattern with Parallax */}
    <div className="absolute inset-0 opacity-30">
      <div 
        className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyxor/5 rounded-full blur-3xl transition-transform duration-100"
        style={{ transform: `translate(-50%, calc(-50% + ${scrollY * 0.08}px))` }}
      />
    </div>
    {/* Geometric Pattern with subtle parallax */}
    <div 
      className="absolute inset-0 geometric-pattern opacity-20 transition-transform duration-100"
      style={{ transform: `translateY(${scrollY * 0.05}px)` }}
    />
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
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-cyxor via-secondary to-cyxor bg-[length:200%_100%] bg-clip-text text-transparent animate-[gradient-shift_3s_ease-in-out_infinite]">AI & Blockchain</span>
        <span className="absolute -inset-1 bg-gradient-to-r from-cyxor/20 to-secondary/20 blur-xl rounded-lg -z-10" />
      </span>{" "}
      Solutions
    </h1>

    {/* Description */}
    <p 
      className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-10 opacity-0 animate-fade-in leading-relaxed"
      style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
    >
      For FinTech and RegTech, aligned with regulation and enterprise skill development.
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
  const scrollY = useParallax();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <HeroBackground scrollY={scrollY} />

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
