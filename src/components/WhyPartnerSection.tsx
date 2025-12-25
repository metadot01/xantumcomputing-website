import { Users, Lightbulb, Zap, ArrowRight, Handshake, Eye } from "lucide-react";

const WhyPartnerSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Deep Technical Expertise",
      description: "Our combined teams bring decades of experience in software engineering, AI/ML, and blockchain technologies.",
    },
    {
      icon: Lightbulb,
      title: "Proven Innovation",
      description: "CYXOR Learning demonstrates our ability to build production-ready platforms that solve real-world problems.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Stay ahead with access to the latest advancements in LLM optimization, Web3, and platform engineering.",
    },
    {
      icon: ArrowRight,
      title: "End-to-End Solutions",
      description: "From initial consultation through deployment and optimization—complete lifecycle support.",
    },
    {
      icon: Eye,
      title: "Agile & Transparent",
      description: "Modern development practices with clear communication and collaborative approach throughout.",
    },
    {
      icon: Handshake,
      title: "Strategic Partnership",
      description: "More than vendors—we're invested in your long-term technology success.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-foreground mb-6">
            Why Partner With Xantum™ & Defantra UK Ltd?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-8 rounded-2xl bg-muted/30 border border-border hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
