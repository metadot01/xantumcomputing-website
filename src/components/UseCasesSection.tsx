import { Building2, Heart, ShoppingCart, Factory, Film, GraduationCap } from "lucide-react";

const UseCasesSection = () => {
  const industries = [
    { icon: Building2, title: "Financial Services & FinTech", description: "Secure, compliant infrastructure for banking and payments." },
    { icon: Heart, title: "Healthcare & Life Sciences", description: "HIPAA-compliant solutions for sensitive health data." },
    { icon: ShoppingCart, title: "E-Commerce & Retail", description: "Scale instantly during peak shopping periods." },
    { icon: Factory, title: "Manufacturing & IoT", description: "Real-time processing for industrial operations." },
    { icon: Film, title: "Media & Entertainment", description: "High-performance streaming and content delivery." },
    { icon: GraduationCap, title: "Research & Education", description: "Powerful computing for academic institutions." },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-section font-bold text-foreground mb-6">Built for Every Industry</h2>
          <p className="text-lg text-muted-foreground">Trusted by organizations across all sectors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={industry.title} className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift opacity-0 animate-fade-in" style={{ animationDelay: `${0.05 * index}s` }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
              <p className="text-muted-foreground text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
