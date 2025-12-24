import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient network-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network Lines SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(168 56% 48%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(168 56% 48%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Network nodes and lines */}
          <g stroke="url(#lineGradient)" strokeWidth="1" fill="none">
            <line x1="100" y1="200" x2="300" y2="400" />
            <line x1="300" y1="400" x2="500" y2="350" />
            <line x1="500" y1="350" x2="700" y2="500" />
            <line x1="700" y1="500" x2="900" y2="400" />
            <line x1="200" y1="600" x2="400" y2="700" />
            <line x1="400" y1="700" x2="600" y2="650" />
            <line x1="600" y1="650" x2="800" y2="750" />
            <line x1="1200" y1="200" x2="1400" y2="300" />
            <line x1="1400" y1="300" x2="1600" y2="250" />
            <line x1="1600" y1="250" x2="1800" y2="400" />
            <line x1="1300" y1="500" x2="1500" y2="600" />
            <line x1="1500" y1="600" x2="1700" y2="550" />
          </g>
          <g fill="hsl(168 56% 48%)">
            <circle cx="100" cy="200" r="4" opacity="0.6" />
            <circle cx="300" cy="400" r="3" opacity="0.4" />
            <circle cx="500" cy="350" r="5" opacity="0.5" />
            <circle cx="700" cy="500" r="3" opacity="0.4" />
            <circle cx="200" cy="600" r="4" opacity="0.5" />
            <circle cx="400" cy="700" r="3" opacity="0.4" />
            <circle cx="1200" cy="200" r="4" opacity="0.5" />
            <circle cx="1400" cy="300" r="3" opacity="0.4" />
            <circle cx="1600" cy="250" r="5" opacity="0.6" />
            <circle cx="1800" cy="400" r="4" opacity="0.4" />
            <circle cx="1500" cy="600" r="3" opacity="0.5" />
          </g>
        </svg>

        {/* Bar chart visualization */}
        <div className="absolute right-20 bottom-40 opacity-30 hidden lg:block">
          <svg width="300" height="200" viewBox="0 0 300 200">
            <g fill="hsl(168 56% 48%)">
              <rect x="20" y="140" width="30" height="50" opacity="0.4" />
              <rect x="60" y="100" width="30" height="90" opacity="0.5" />
              <rect x="100" y="120" width="30" height="70" opacity="0.4" />
              <rect x="140" y="80" width="30" height="110" opacity="0.6" />
              <rect x="180" y="60" width="30" height="130" opacity="0.5" />
              <rect x="220" y="40" width="30" height="150" opacity="0.7" />
              <rect x="260" y="20" width="30" height="170" opacity="0.8" />
            </g>
            {/* Data points */}
            <g fill="hsl(168 56% 48%)">
              <circle cx="35" cy="135" r="4" />
              <circle cx="75" cy="95" r="4" />
              <circle cx="115" cy="115" r="4" />
              <circle cx="155" cy="75" r="4" />
              <circle cx="195" cy="55" r="4" />
              <circle cx="235" cy="35" r="4" />
              <circle cx="275" cy="15" r="4" />
            </g>
            {/* Connecting line */}
            <path 
              d="M35 135 L75 95 L115 115 L155 75 L195 55 L235 35 L275 15" 
              stroke="hsl(168 56% 48%)" 
              strokeWidth="2" 
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Partnership Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm text-muted-foreground">Strategic Partnership with Defantra UK Ltd</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Enterprise Technology</span>
            <br />
            <span className="text-gradient">Powered by Intelligence</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            AI-powered systems, intelligent automation, and scalable digital platforms designed for regulated industries and enterprise clients worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="group">
              Request a Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Explore Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
