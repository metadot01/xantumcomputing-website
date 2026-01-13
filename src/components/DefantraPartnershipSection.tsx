import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Globe, Award, Briefcase, CheckCircle2 } from "lucide-react";

const DefantraPartnershipSection = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Enterprise Training Solutions",
      description: "Comprehensive corporate training programs tailored to your organization's technology needs.",
    },
    {
      icon: Users,
      title: "Expert Consulting Team",
      description: "Access to seasoned professionals with deep expertise in AI, blockchain, and digital transformation.",
    },
    {
      icon: Globe,
      title: "UK & USA Delivery",
      description: "Seamless service delivery across both regions with local expertise and global standards.",
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Industry-recognized certifications and credentials for professional development.",
    },
  ];

  const services = [
    "AI/ML Implementation Training",
    "Blockchain Development Workshops",
    "Digital Transformation Consulting",
    "Custom Corporate Programs",
    "Executive Technology Briefings",
    "Team Upskilling Solutions",
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 surface-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 particle-bg opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-4 md:mb-6">
            <Briefcase className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-surface-dark-foreground">Strategic Partnership</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-surface-dark-foreground mb-4 md:mb-6">
            Partnered with <span className="text-accent">Defantra Ltd, UK</span>
          </h2>
          <p className="text-base md:text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Combining forces to deliver world-class training, consulting, and technology solutions across the USA and UK.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-background/5 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-border/10 hover:border-accent/30 hover:bg-background/10 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-surface-dark-foreground mb-2 text-sm md:text-base">{benefit.title}</h3>
                <p className="text-surface-dark-foreground/60 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services & CTA */}
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 lg:p-8 border border-border/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">DF</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl text-surface-dark-foreground">Defantra Ltd, UK</h3>
                <p className="text-sm text-surface-dark-foreground/60">Training & Consulting Partner</p>
              </div>
            </div>

            <p className="text-xs font-semibold text-surface-dark-foreground/50 uppercase tracking-wider mb-4">Training Services</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {services.map((service, i) => (
                <div key={service} className="flex items-center gap-2 text-xs md:text-sm text-surface-dark-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="heroDark" size="lg" className="w-full group">
                Visit Defantra
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 pt-8 border-t border-border/10">
          {[
            { label: "Years Partnership", value: "5+" },
            { label: "Joint Projects", value: "50+" },
            { label: "Client Satisfaction", value: "100%" },
            { label: "Countries Served", value: "2" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl md:text-2xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs text-surface-dark-foreground/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefantraPartnershipSection;