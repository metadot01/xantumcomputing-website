import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

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
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 md:mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="text-xs md:text-sm text-foreground/70 font-medium">Strategic Partnership with Defantra Ltd, UK</span>
            </div>

            {/* Headline */}
            <h1 
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-foreground opacity-0 animate-fade-in leading-[1.15]"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-gradient">AI/ML & Blockchain</span>
              <br />
              <span className="text-foreground">Software for RegTech & FinTech</span>
            </h1>

            {/* Description */}
            <p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-6 md:mb-8 opacity-0 animate-fade-in leading-relaxed"
              style={{ animationDelay: '0.3s' }}
            >
              Xantum™ Computing delivers AI/ML and blockchain software for RegTech and FinTech, in partnership with Defantra Ltd, UK, across the USA and UK.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Request Demo
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="group w-full">
                  <ExternalLink className="w-4 h-4" />
                  Defantra Partnership
                </Button>
              </a>
            </div>

            {/* Trust Points - Mobile optimized */}
            <div 
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              {['Expert Development Teams', 'AI/Blockchain Specialists', '24/7 Support'].map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Partnership Cards */}
          <div 
            className="relative opacity-0 animate-fade-in mt-8 lg:mt-0"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="space-y-4">
              {/* CYXOR Learning Card - Primary Focus */}
              <a 
                href="https://www.cyxorlearning.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-cta/10 to-secondary/10 rounded-2xl p-5 md:p-6 border-2 border-cta/30 hover:border-cta hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cta to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg md:text-xl">CX</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-lg md:text-xl text-foreground group-hover:text-cta transition-colors">CYXOR Learning</h3>
                      <span className="px-2 py-0.5 text-xs font-semibold bg-cta text-white rounded-full">FEATURED</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Blockchain-verified digital skills platform</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-background rounded-lg border border-border">100+ Courses</span>
                      <span className="px-2 py-1 text-xs bg-background rounded-lg border border-border">Verified Credentials</span>
                      <span className="px-2 py-1 text-xs bg-background rounded-lg border border-border">Career Paths</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cta opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </a>

              {/* Defantra Partnership Card */}
              <a 
                href="https://www.defantra.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-card rounded-2xl p-5 md:p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg md:text-xl">DF</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">Defantra Ltd, UK</h3>
                      <span className="px-2 py-0.5 text-xs font-semibold bg-primary/10 text-primary rounded-full">PARTNER</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Strategic training & development partner</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-background rounded-lg border border-border">UK Based</span>
                      <span className="px-2 py-1 text-xs bg-background rounded-lg border border-border">Enterprise Training</span>
                      <span className="px-2 py-1 text-xs bg-background rounded-lg border border-border">Consulting</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </a>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-card rounded-xl p-3 md:p-4 text-center border border-border">
                  <p className="text-xl md:text-2xl font-bold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground">Experts</p>
                </div>
                <div className="bg-card rounded-xl p-3 md:p-4 text-center border border-border">
                  <p className="text-xl md:text-2xl font-bold text-cta">15+</p>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
                <div className="bg-card rounded-xl p-3 md:p-4 text-center border border-border">
                  <p className="text-xl md:text-2xl font-bold text-secondary">USA & UK</p>
                  <p className="text-xs text-muted-foreground">Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries */}
        <div 
          className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-border opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-xs md:text-sm text-muted-foreground text-center mb-6 md:mb-8 uppercase tracking-wider">
            Serving Clients Across Industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
            {['Financial Services', 'Healthcare', 'E-Commerce', 'Manufacturing', 'Education'].map((industry) => (
              <div 
                key={industry} 
                className="text-muted-foreground/40 font-display font-bold text-sm md:text-base lg:text-lg hover:text-muted-foreground/60 transition-colors cursor-default"
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