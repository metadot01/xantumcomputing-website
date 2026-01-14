import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Link as LinkIcon, Code, Lightbulb, GraduationCap, Layers } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, LLM optimization, and machine learning implementations for enterprise needs.",
      color: "secondary",
    },
    {
      icon: LinkIcon,
      title: "Blockchain Solutions",
      description: "Smart contracts, DeFi applications, and blockchain integration for secure, transparent operations.",
      color: "purple",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack development delivering scalable, maintainable applications tailored to your requirements.",
      color: "defantra",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 surface-dark relative overflow-hidden" id="technology">
      <div className="absolute inset-0 tech-pattern opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-surface-dark-foreground mb-6">
            Technology <span className="text-secondary">Capabilities</span>
          </h2>
          <p className="text-base md:text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto">
            Comprehensive technology solutions powered by our strategic partnership with Defantra Ltd, UK.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <div 
              key={cap.title}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-${cap.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <cap.icon className={`w-7 h-7 text-${cap.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-surface-dark-foreground mb-3">{cap.title}</h3>
              <p className="text-surface-dark-foreground/60 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;