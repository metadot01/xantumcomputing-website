import { Zap, Globe, TrendingUp, Clock } from "lucide-react";

const TechnologySection = () => {
  const stats = [
    {
      icon: Zap,
      value: "<10ms",
      label: "Average Latency",
      description: "Ultra-fast response times",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Data Centers",
      description: "Global infrastructure",
    },
    {
      icon: TrendingUp,
      value: "∞",
      label: "Scalability",
      description: "Auto-scale to millions",
    },
    {
      icon: Clock,
      value: "99.99%",
      label: "Uptime SLA",
      description: "Enterprise guarantee",
    },
  ];

  return (
    <section className="py-24 md:py-32 surface-dark relative overflow-hidden" id="technology">
      {/* Background Elements */}
      <div className="absolute inset-0 particle-bg opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-surface-dark-foreground mb-6">
            The Xantum™ Technology Advantage
          </h2>
          <p className="text-lg text-surface-dark-foreground/70 leading-relaxed">
            Built on cutting-edge infrastructure that scales with your ambition.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center p-6 lg:p-8 rounded-2xl bg-background/5 border border-border/10 hover:bg-background/10 hover:border-primary/20 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Value */}
              <div className="stat-number mb-2">{stat.value}</div>

              {/* Label */}
              <div className="text-sm font-semibold text-surface-dark-foreground uppercase tracking-wider mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-surface-dark-foreground/50">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            "Zero-downtime deployments",
            "Multi-cloud orchestration",
            "Real-time monitoring",
          ].map((feature, index) => (
            <div
              key={feature}
              className="flex items-center justify-center gap-2 text-surface-dark-foreground/60 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
