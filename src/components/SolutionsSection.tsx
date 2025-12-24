import { ArrowRight, Bot, GraduationCap, Code } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Autonomous AI agents that execute complex enterprise workflows with precision and intelligence.",
    link: "#",
  },
  {
    icon: GraduationCap,
    title: "E-Learning Solutions",
    description: "Custom learning ecosystems powered by adaptive AI and advanced analytics.",
    link: "#",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Scalable, secure enterprise software built for long-term success.",
    link: "#",
  },
];

const SolutionsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            End-to-End Technology Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Custom-built digital platforms, AI-powered automation, and scalable software engineering for the modern enterprise.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <a
              key={solution.title}
              href={solution.link}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {solution.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-primary font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
