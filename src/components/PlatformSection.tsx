import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "AI-driven personalization and adaptive learning paths",
  "Compliance and certification management",
  "Real-time analytics and predictive insights",
  "SOC 2, GDPR-ready cloud infrastructure",
];

const PlatformSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-primary mb-4">
              Digital Skills Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Intelligent, Adaptive Learning at Scale
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enterprise-grade digital learning powered by AI-driven insights and advanced analytics. Built for compliance, security, and performance.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="group">
              Explore Platform
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Content - Interactive Demo Preview */}
          <div className="relative">
            <div className="bg-secondary/50 rounded-2xl border border-border p-8 lg:p-10">
              <div className="text-sm text-muted-foreground mb-4">Interactive Platform Demo</div>
              
              {/* Stats Display */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
                <div className="text-center p-6 bg-background rounded-xl border border-border">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">User Rating</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
