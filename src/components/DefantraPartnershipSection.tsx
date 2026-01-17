import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, ExternalLink, Rocket, Calendar, Shield, Brain, Globe, BarChart3 } from "lucide-react";
import defantraLogo from "@/assets/defantra-logo.jpg";
import CountdownTimer from "./CountdownTimer";

const DefantraPartnershipSection = () => {
  const nextLaunchDate = new Date("2026-04-01T00:00:00");

  const modules = [
    {
      icon: Shield,
      title: "IR35 Risk Module",
      status: "live",
      statusLabel: "Available Now",
      description: "UK contractor compliance with automated risk scoring",
    },
    {
      icon: BarChart3,
      title: "Vendor Risk Module",
      status: "coming",
      statusLabel: "Q2 2026",
      description: "Onboarding, monitoring, and risk scoring",
    },
    {
      icon: Globe,
      title: "Trade Compliance",
      status: "coming",
      statusLabel: "Q3 2026",
      description: "Regulatory monitoring for global operations",
    },
    {
      icon: Brain,
      title: "AI Governance",
      status: "coming",
      statusLabel: "Q4 2026",
      description: "Model risk and bias detection",
    },
  ];

  const services = [
    { name: "AI/ML Training", icon: Brain },
    { name: "Blockchain Workshops", icon: BarChart3 },
    { name: "Digital Transformation", icon: Rocket },
    { name: "Corporate Programs", icon: Briefcase },
  ];

  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden" id="veriagent">
      {/* Background */}
      <div className="absolute inset-0 tech-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-defantra/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-defantra/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-defantra/10 border border-defantra/20">
              <Briefcase className="w-3.5 h-3.5 text-defantra" />
              <span className="text-xs font-medium text-defantra">Defantra Partnership</span>
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              VeriAgent <span className="text-defantra">Platform</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            AI + blockchain compliance solutions through our UK partnership.
          </p>
        </div>

        {/* Main Content - 3 Column Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Column - Partner Card */}
          <div className="lg:col-span-4 bg-background rounded-2xl p-5 border border-border shadow-lg flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-md border border-border">
                <img src={defantraLogo} alt="Defantra Ltd" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">Defantra Ltd</h3>
                <p className="text-muted-foreground text-xs">UK • AI Powered GRC</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
              Strategic partnership combining deep technical expertise with proven delivery for enterprise clients in USA & UK.
            </p>

            {/* Compact Services Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {services.map((service) => (
                <div key={service.name} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 border border-border/50">
                  <service.icon className="w-3.5 h-3.5 text-defantra" />
                  <span className="text-xs text-foreground truncate">{service.name}</span>
                </div>
              ))}
            </div>

            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="defantra" size="default" className="w-full">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <ExternalLink className="w-4 h-4" />
                Visit Defantra
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Middle Column - Modules */}
          <div className="lg:col-span-5 surface-dark rounded-2xl p-5 border border-border/10 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-defantra to-defantra/70 flex items-center justify-center">
                  <Rocket className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-surface-dark-foreground">GRC Modules</h3>
                  <p className="text-surface-dark-foreground/50 text-[10px]">AI + blockchain foundation</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-surface-dark-foreground/60">1 Live</span>
                <span className="w-1.5 h-1.5 rounded-full bg-defantra/60 ml-2" />
                <span className="text-[10px] text-surface-dark-foreground/60">3 Coming</span>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              {modules.map((module) => (
                <div 
                  key={module.title}
                  className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer group/card ${
                    module.status === 'live' 
                      ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 hover:scale-[1.02]' 
                      : 'bg-white/5 border-white/10 hover:bg-defantra/10 hover:border-defantra/30 hover:shadow-lg hover:shadow-defantra/10 hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110 ${
                      module.status === 'live' ? 'bg-green-500/20' : 'bg-defantra/20'
                    }`}>
                      <module.icon className={`w-3.5 h-3.5 transition-colors duration-300 ${module.status === 'live' ? 'text-green-400 group-hover/card:text-green-300' : 'text-defantra group-hover/card:text-defantra'}`} />
                    </div>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium transition-all duration-300 ${
                      module.status === 'live' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-defantra/20 text-defantra'
                    }`}>
                      {module.statusLabel}
                    </span>
                  </div>
                  <h4 className="font-semibold text-surface-dark-foreground text-xs mb-0.5 transition-colors duration-300 group-hover/card:text-white">{module.title}</h4>
                  <p className="text-surface-dark-foreground/50 text-[10px] leading-tight transition-colors duration-300 group-hover/card:text-surface-dark-foreground/70">{module.description}</p>
                </div>
              ))}
            </div>

            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="block mt-4">
              <Button variant="hero" size="default" className="w-full">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Rocket className="w-4 h-4" />
                Explore Platform
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Right Column - Countdown & CTA */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Countdown Card */}
            <div className="bg-gradient-to-br from-[hsl(210,52%,20%)] via-[hsl(210,52%,15%)] to-[hsl(193,100%,30%)] rounded-2xl p-5 border border-defantra/20 flex-1">
              <div className="text-center">
                <p className="text-white/70 text-xs uppercase tracking-wider mb-2">Next Module Launch</p>
                <h4 className="font-display font-bold text-white text-lg mb-1">Vendor Risk</h4>
                <p className="text-white/60 text-xs mb-4">Q2 2026</p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <CountdownTimer targetDate={nextLaunchDate} />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-background rounded-2xl p-4 border border-border shadow-lg">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-defantra">4</p>
                  <p className="text-[10px] text-muted-foreground">Modules</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-green-500">1</p>
                  <p className="text-[10px] text-muted-foreground">Live Now</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-defantra">UK</p>
                  <p className="text-[10px] text-muted-foreground">& USA</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-muted/50">
                  <p className="text-2xl font-bold text-foreground">AI</p>
                  <p className="text-[10px] text-muted-foreground">Powered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefantraPartnershipSection;