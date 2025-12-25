import { MessageSquare, Wrench, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Consult",
      description: "We collaborate with you to understand your technology challenges and define the optimal solution architecture across software, AI, or blockchain domains.",
    },
    {
      number: "02",
      icon: Wrench,
      title: "Develop",
      description: "Our expert teams design, build, and deploy custom solutions using cutting-edge technologies and industry best practices.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Optimize",
      description: "Continuous refinement and support ensure your solutions evolve with your business through AI optimization and strategic consulting.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-foreground mb-6">
            How Our Partnership Works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get started in three simple steps and accelerate your digital transformation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full btn-gradient text-primary-foreground font-display font-bold text-2xl shadow-lg mx-auto">
                  {step.number}
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl -z-10" />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Connection Line - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-gradient-to-b from-primary to-accent mx-auto mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Preview */}
        <div className="mt-20 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="rounded-2xl bg-surface-dark overflow-hidden shadow-2xl border border-border/10">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-dark border-b border-border/10">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-success/80" />
              <span className="ml-4 text-xs text-surface-dark-foreground/50 font-mono">terminal</span>
            </div>
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <p className="text-surface-dark-foreground/60">$ xantum-deploy --solution</p>
              <p className="text-success mt-2">✓ Development pipeline initialized</p>
              <p className="text-surface-dark-foreground/40 mt-1">  → Status: In production</p>
              <p className="text-surface-dark-foreground/40">  → Performance: Optimized for scale</p>
              <p className="text-surface-dark-foreground/40">  → Support: Dedicated technical team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
