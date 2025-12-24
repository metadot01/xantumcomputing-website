import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 particle-bg" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />

      {/* Network Lines SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(224 64% 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(199 89% 48%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(239 84% 67%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(224 64% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g stroke="url(#lineGradient1)" strokeWidth="1" fill="none">
          <line x1="100" y1="200" x2="400" y2="450" />
          <line x1="400" y1="450" x2="700" y2="380" />
          <line x1="200" y1="600" x2="500" y2="750" />
          <line x1="500" y1="750" x2="800" y2="680" />
        </g>
        <g stroke="url(#lineGradient2)" strokeWidth="1" fill="none">
          <line x1="1400" y1="150" x2="1650" y2="320" />
          <line x1="1650" y1="320" x2="1850" y2="250" />
          <line x1="1300" y1="550" x2="1550" y2="680" />
          <line x1="1550" y1="680" x2="1800" y2="600" />
        </g>
        <g fill="hsl(224 64% 50%)">
          <circle cx="100" cy="200" r="4" opacity="0.6" />
          <circle cx="400" cy="450" r="3" opacity="0.4" />
          <circle cx="700" cy="380" r="5" opacity="0.5" />
          <circle cx="200" cy="600" r="4" opacity="0.5" />
          <circle cx="500" cy="750" r="3" opacity="0.4" />
        </g>
        <g fill="hsl(199 89% 48%)">
          <circle cx="1400" cy="150" r="4" opacity="0.5" />
          <circle cx="1650" cy="320" r="3" opacity="0.4" />
          <circle cx="1850" cy="250" r="5" opacity="0.6" />
          <circle cx="1550" cy="680" r="4" opacity="0.4" />
          <circle cx="1800" cy="600" r="3" opacity="0.5" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Partnership Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-surface-dark-foreground/80">Now partnered with Defantra UK Ltd</span>
          </div>

          {/* Main Headline */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-hero-lg font-bold mb-6 text-surface-dark-foreground opacity-0 animate-fade-in leading-tight"
            style={{ animationDelay: '0.2s' }}
          >
            Next-Generation Computing
            <br />
            <span className="text-gradient">Solutions for Enterprise Innovation</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-surface-dark-foreground/70 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: '0.3s' }}
          >
            Harness the power of advanced computing infrastructure with Xantum™ – where cutting-edge technology meets business transformation.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Button variant="heroDark" size="xl" className="group">
              Request Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutlineDark" size="xl" className="group">
              <Play className="w-4 h-4" />
              Explore Solutions
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-16 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-sm text-surface-dark-foreground/50 mb-6 uppercase tracking-wider">
              Trusted by Fortune 500 Companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['Microsoft', 'Google', 'Amazon', 'IBM'].map((company) => (
                <div 
                  key={company} 
                  className="text-surface-dark-foreground/30 font-display font-semibold text-lg hover:text-surface-dark-foreground/50 transition-colors cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-surface-dark-foreground/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-surface-dark-foreground/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
