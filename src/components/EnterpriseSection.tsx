import { Shield, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant, GDPR-ready infrastructure with end-to-end encryption.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "AI-driven workflows that reduce manual effort and accelerate outcomes.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and predictive analytics for informed decision-making.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "10M+", label: "Users Served" },
  { value: "24/7", label: "Expert Support" },
];

const EnterpriseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Enterprise Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our solutions are designed with the rigor and reliability that enterprise clients, government bodies, and regulated industries demand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
