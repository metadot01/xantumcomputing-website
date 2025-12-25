import { Layers, Code, Brain } from "lucide-react";

const ValuePropositionSection = () => {
  const features = [
    {
      icon: Layers,
      title: "Platform Engineering",
      description: "Enterprise-grade platform architecture and engineering services designed to modernize your technology stack and accelerate digital transformation.",
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Bespoke software solutions engineered to your exact specifications, from web applications to enterprise systems.",
    },
    {
      icon: Brain,
      title: "Language Model Optimization & Development",
      description: "Advanced LLM fine-tuning, optimization, and custom model development to unlock AI capabilities tailored to your business needs.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30" id="solutions">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-foreground mb-6">
            Partnership-Driven Technology Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through our strategic partnership with Defantra UK Ltd, we deliver comprehensive software engineering and emerging technology expertise.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-background rounded-2xl p-8 lg:p-10 border border-border hover:border-primary/30 hover-lift opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
