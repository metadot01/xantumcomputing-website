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
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-foreground mb-6">
            Comprehensive Technology Capabilities
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to innovate, build, and scale with confidence.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <capability.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {capability.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {capability.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-cta flex-shrink-0 mt-0.5" />
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
