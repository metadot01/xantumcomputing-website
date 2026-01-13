import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Layers, Brain, Link, Code, Lightbulb, GraduationCap } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Layers,
      title: "Platform Engineering",
      description: "Xantum™ delivers robust platform engineering services that modernize infrastructure and accelerate development cycles.",
      features: [
        "Microservices architecture design",
        "API development and integration",
        "Cloud-native platform migration",
        "DevOps pipeline implementation",
      ],
    },
    {
      icon: Brain,
      title: "AI & Language Model Solutions",
      description: "Through our partnership expertise, we optimize and develop custom language models that transform how your business leverages AI.",
      features: [
        "LLM fine-tuning and optimization",
        "Custom model development",
        "RAG (Retrieval-Augmented Generation) systems",
        "Prompt engineering and evaluation",
      ],
    },
    {
      icon: Link,
      title: "Blockchain Development & Implementation",
      description: "End-to-end blockchain solutions from consulting to deployment, enabling secure, transparent, and decentralized business operations.",
      features: [
        "Smart contract development",
        "DeFi and Web3 applications",
        "Blockchain integration consulting",
        "Credential verification systems",
      ],
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Full-stack development expertise delivering scalable, maintainable applications tailored to your business requirements.",
      features: [
        "Enterprise web applications",
        "Mobile app development",
        "SaaS platform development",
        "Legacy system modernization",
      ],
    },
    {
      icon: Lightbulb,
      title: "AI & Blockchain Consulting",
      description: "Strategic guidance from industry experts helping you navigate emerging technologies and make informed investment decisions.",
      features: [
        "Technology assessment and roadmapping",
        "AI strategy and implementation planning",
        "Blockchain feasibility studies",
        "Digital transformation consulting",
      ],
    },
    {
      icon: GraduationCap,
      title: "CYXOR Learning Platform",
      description: "Transforming digital education with verifiable blockchain credentials and industry-relevant curriculum.",
      features: [
        "Blockchain-verified credentials",
        "Industry-relevant curriculum",
        "Instant credential verification",
        "Career-focused learning paths",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Comprehensive Technology Capabilities
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Everything you need to innovate, build, and scale with confidence.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group bg-card rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {/* Icon */}
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/15 transition-colors">
                <capability.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2 md:mb-3">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                {capability.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                {capability.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs md:text-sm">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-cta flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" size="sm" className="group/btn text-primary hover:text-primary p-0">
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

export default CapabilitiesSection;
