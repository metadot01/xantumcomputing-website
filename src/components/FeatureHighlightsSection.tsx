import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Cpu, Shield, BarChart3 } from "lucide-react";

const FeatureHighlightsSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "Intelligent Resource Management",
      description: "Xantum™'s AI-powered resource allocation ensures optimal performance while minimizing costs across your infrastructure.",
      benefits: [
        "Predictive scaling based on usage patterns",
        "Cost optimization algorithms",
        "Real-time resource monitoring",
      ],
      imagePosition: "left" as const,
    },
    {
      icon: Shield,
      title: "Advanced Security Architecture",
      description: "Xantum™ implements military-grade security protocols to protect your most sensitive data and operations.",
      benefits: [
        "End-to-end encryption",
        "SOC 2 Type II certified",
        "Zero-trust architecture",
      ],
      imagePosition: "right" as const,
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics & Insights",
      description: "Make data-driven decisions with comprehensive analytics that provide visibility into every aspect of your infrastructure.",
      benefits: [
        "Custom dashboards",
        "API access to metrics",
        "Automated reporting",
      ],
      imagePosition: "left" as const,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-foreground mb-6">
            Powerful Features for Modern Enterprise
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to build, deploy, and scale with confidence.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-0 animate-fade-in`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Visual */}
              <div className={`${feature.imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl bg-muted p-8 lg:p-12 border border-border overflow-hidden group hover-lift">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  
                  {/* Icon Display */}
                  <div className="relative flex items-center justify-center h-48 md:h-64">
                    <div className="w-24 h-24 rounded-2xl btn-gradient flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute top-4 right-8 w-16 h-16 rounded-xl bg-background/80 border border-border shadow-lg flex items-center justify-center animate-float">
                      <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-8 w-20 h-12 rounded-xl bg-background/80 border border-border shadow-lg flex items-center justify-center gap-1 animate-float" style={{ animationDelay: '-2s' }}>
                      <div className="w-2 h-4 bg-primary/60 rounded-sm" />
                      <div className="w-2 h-6 bg-primary/80 rounded-sm" />
                      <div className="w-2 h-5 bg-primary rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${feature.imagePosition === 'right' ? 'lg:order-1' : ''}`}>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-8">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="group text-primary hover:text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightsSection;
