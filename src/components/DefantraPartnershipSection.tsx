import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Globe, Award, Briefcase, CheckCircle2, Brain, Link as LinkIcon, Shield, BarChart3 } from "lucide-react";
import defantraLogo from "@/assets/defantra-logo.jpg";

const DefantraPartnershipSection = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Technology Strategy & Consulting",
      description: "Expert guidance on AI, blockchain, and digital transformation initiatives.",
    },
    {
      icon: Brain,
      title: "AI/ML Solution Development",
      description: "Custom AI and machine learning solutions tailored to your business needs.",
    },
    {
      icon: LinkIcon,
      title: "Blockchain Implementation",
      description: "End-to-end blockchain development and integration services.",
    },
    {
      icon: Shield,
      title: "RegTech & FinTech Solutions",
      description: "Specialized solutions for regulatory compliance and financial technology.",
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
    <section className="py-20 md:py-28 lg:py-36 bg-card relative overflow-hidden" id="veriagent">
      {/* Background */}
      <div className="absolute inset-0 tech-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-defantra/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-defantra/10 border border-defantra/20 mb-6">
            <Briefcase className="w-4 h-4 text-defantra" />
            <span className="text-sm font-medium text-defantra">Defantra Partnership</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            VeriAgent Platform &{" "}
            <span className="text-defantra">Strategic Partnership</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Partnered with Defantra Ltd, UK to deliver world-class technology solutions, training, and consulting across the USA and UK.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-14">
          {/* Left Side - Partnership Info */}
          <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg border border-border">
                <img src={defantraLogo} alt="Defantra Ltd" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">Defantra Ltd, UK</h3>
                <p className="text-muted-foreground text-sm">AI Powered GRC Platform</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="px-2 py-0.5 text-xs font-medium bg-defantra/10 text-defantra rounded-full">Strategic Partner</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Through our strategic partnership with Defantra Ltd, UK, we combine deep technical expertise 
              with proven delivery methodologies to serve enterprise clients across the United States and United Kingdom.
            </p>

            <div className="mb-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Training Services</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-defantra flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="defantra" size="lg" className="w-full group">
                Visit Defantra
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Right Side - VeriAgent Capabilities */}
          <div className="surface-dark rounded-2xl p-6 md:p-8 border border-border/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-defantra flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-surface-dark-foreground">VeriAgent Platform</h3>
                <p className="text-surface-dark-foreground/60 text-sm">Technology Capabilities</p>
              </div>
            </div>

            <div className="grid gap-4">
              {capabilities.map((capability, index) => (
                <div 
                  key={capability.title}
                  className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <capability.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-dark-foreground text-sm mb-1">{capability.title}</h4>
                    <p className="text-surface-dark-foreground/60 text-xs leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="block mt-6">
              <Button variant="heroOutlineDark" size="lg" className="w-full group">
                Explore VeriAgent Platform
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefantraPartnershipSection;