import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Brain, Link, Layers } from "lucide-react";

const FeaturedSolutionsSection = () => {
  const solutions = [
    {
      icon: GraduationCap,
      title: "CYXOR Learning Platform",
      description: "Our flagship digital skills platform featuring verifiable credentials, comprehensive tech courses, and career-focused learning paths.",
      highlight: true,
    },
    {
      icon: Brain,
      title: "AI-Powered Business Intelligence",
      description: "Custom language models fine-tuned for your industry, delivering intelligent insights from your data through advanced NLP and machine learning.",
    },
    {
      icon: Link,
      title: "Blockchain Credential Systems",
      description: "Build trust and transparency with blockchain-based verification systems for certifications, credentials, and digital assets.",
    },
    {
      icon: Layers,
      title: "Modern Platform Architecture",
      description: "Migrate from monolithic systems to scalable, cloud-native platforms that support rapid innovation and growth.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-foreground mb-6">
            Featured Solutions
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group relative p-8 lg:p-10 rounded-2xl border transition-all duration-300 opacity-0 animate-fade-in ${
                solution.highlight
                  ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40"
                  : "bg-background border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Highlight Badge */}
              {solution.highlight && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-cta text-white text-xs font-medium rounded-full">
                  Flagship Product
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <solution.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* CTA */}
              <Button variant="ghost" className="group/btn text-primary hover:text-primary p-0">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutionsSection;
