import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cta/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="text-sm text-foreground/70 font-medium">Strategic Partnership with Defantra Ltd, UK</span>
            </div>

            {/* Headline */}
            <h1 
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground opacity-0 animate-fade-in leading-[1.1]"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-gradient">AI/ML & Blockchain</span>
              <br />
              Software for RegTech & FinTech
            </h1>

            {/* Description */}
            <p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 opacity-0 animate-fade-in leading-relaxed"
              style={{ animationDelay: '0.3s' }}
            >
              Xantum™ Computing delivers AI/ML and blockchain software for RegTech and FinTech, in partnership with Defantra Ltd, UK, across the USA and UK.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Button variant="hero" size="xl" className="group">
                Request Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="xl" className="group w-full">
                  <ArrowRight className="w-4 h-4" />
                  Defantra Partnership
                </Button>
              </a>
            </div>

            {/* Trust Points */}
            <div 
              className="flex flex-wrap gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              {['Expert Development Teams', 'AI/Blockchain Specialists', '24/7 Support'].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-cta" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div 
            className="relative opacity-0 animate-fade-in hidden lg:block"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Main Visual Card */}
            <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">xantum-solutions</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-foreground mb-1">50+</p>
                  <p className="text-xs text-muted-foreground">AI/Blockchain Experts</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-cta mb-1">15+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-secondary mb-1">100%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-accent mb-1">USA & UK</p>
                  <p className="text-xs text-muted-foreground">Delivery Teams</p>
                </div>
              </div>

              {/* CYXOR Learning Highlight */}
              <div className="bg-background rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cta to-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-xs">CX</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">CYXOR Learning</p>
                    <p className="text-xs text-muted-foreground">Our Platform</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Blockchain-verified credentials</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-cta text-white px-4 py-2 rounded-xl shadow-lg animate-float">
              <p className="text-sm font-semibold">Proven Innovation</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-border px-4 py-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
              <p className="text-xs text-muted-foreground">Development Methodology</p>
              <p className="text-sm font-semibold text-success">Agile & DevOps</p>
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <div 
          className="mt-20 pt-12 border-t border-border opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-sm text-muted-foreground text-center mb-8 uppercase tracking-wider">
            Serving Clients Across Industries in USA & UK
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['Financial Services', 'Healthcare', 'E-Commerce', 'Manufacturing', 'Education'].map((industry) => (
              <div 
                key={industry} 
                className="text-muted-foreground/40 font-display font-bold text-lg hover:text-muted-foreground/60 transition-colors cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
