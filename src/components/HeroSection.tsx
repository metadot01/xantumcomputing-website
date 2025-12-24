import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

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
              <span className="text-sm text-foreground/70 font-medium">Strategic Partnership with Defantra UK Ltd</span>
            </div>

            {/* Headline */}
            <h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground opacity-0 animate-fade-in leading-[1.1]"
              style={{ animationDelay: '0.2s' }}
            >
              Next-Generation
              <br />
              <span className="text-gradient">Computing Solutions</span>
              <br />
              for Enterprise
            </h1>

            {/* Description */}
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 opacity-0 animate-fade-in leading-relaxed"
              style={{ animationDelay: '0.3s' }}
            >
              Harness the power of advanced computing infrastructure with Xantum Computing – where cutting-edge technology meets business transformation.
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
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-4 h-4" />
                Watch Overview
              </Button>
            </div>

            {/* Trust Points */}
            <div 
              className="flex flex-wrap gap-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              {['99.99% Uptime SLA', 'Enterprise Security', '24/7 Support'].map((point) => (
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
                <span className="text-xs text-muted-foreground font-mono">xantum-dashboard</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-foreground mb-1">2.4M</p>
                  <p className="text-xs text-muted-foreground">Active Users</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-cta mb-1">99.99%</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-secondary mb-1">&lt;10ms</p>
                  <p className="text-xs text-muted-foreground">Latency</p>
                </div>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-accent mb-1">50+</p>
                  <p className="text-xs text-muted-foreground">Regions</p>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-background rounded-xl p-4 border border-border">
                <div className="flex items-end justify-between h-24 gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-cta to-secondary rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">Performance Overview - Last 12 months</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-cta text-white px-4 py-2 rounded-xl shadow-lg animate-float">
              <p className="text-sm font-semibold">+127% Growth</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-border px-4 py-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
              <p className="text-xs text-muted-foreground">Infrastructure Status</p>
              <p className="text-sm font-semibold text-success">All Systems Operational</p>
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <div 
          className="mt-20 pt-12 border-t border-border opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-sm text-muted-foreground text-center mb-8 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle'].map((company) => (
              <div 
                key={company} 
                className="text-muted-foreground/40 font-display font-bold text-xl hover:text-muted-foreground/60 transition-colors cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
