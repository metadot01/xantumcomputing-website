import { Brain, Link as LinkIcon, Code, GraduationCap } from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, LLM optimization, and machine learning implementations for enterprise needs.",
      gradient: "from-secondary to-secondary/60",
      iconBg: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    {
      icon: LinkIcon,
      title: "Blockchain Solutions",
      description: "Smart contracts, DeFi applications, and blockchain integration for secure, transparent operations.",
      gradient: "from-purple to-purple/60",
      iconBg: "bg-purple/20",
      iconColor: "text-purple",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack development delivering scalable, maintainable applications tailored to your requirements.",
      gradient: "from-defantra to-defantra/60",
      iconBg: "bg-defantra/20",
      iconColor: "text-defantra",
    },
    {
      icon: GraduationCap,
      title: "Workforce Development",
      description: "Enterprise-focused training in digital technology, governance, risk, and compliance, equipping employees with skills to drive secure, compliant, and innovative operations.",
      gradient: "from-cyxor to-cyxor/60",
      iconBg: "bg-cyxor/20",
      iconColor: "text-cyxor",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 surface-dark relative overflow-hidden" id="technology">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 tech-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyxor/10 rounded-full blur-[100px] opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-surface-dark-foreground mb-6">
            Digital <span className="bg-gradient-to-r from-secondary via-defantra to-cyxor bg-clip-text text-transparent">Transformation</span>
          </h2>
          <p className="text-base md:text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Consulting and technology solutions that drive secure, compliance-ready transformation for regulated enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {capabilities.map((cap, index) => (
            <div 
              key={cap.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 opacity-0 animate-fade-in hover:-translate-y-2"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Gradient accent line at top */}
              <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${cap.gradient} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon with glow effect */}
              <div className={`relative w-16 h-16 rounded-2xl ${cap.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <cap.icon className={`w-8 h-8 ${cap.iconColor}`} />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cap.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-surface-dark-foreground mb-3 group-hover:text-white transition-colors">
                {cap.title}
              </h3>
              <p className="text-surface-dark-foreground/60 leading-relaxed text-sm group-hover:text-surface-dark-foreground/80 transition-colors">
                {cap.description}
              </p>
              
              {/* Bottom corner accent */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r ${cap.gradient} rounded-full opacity-10 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
