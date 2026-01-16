import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, ExternalLink, Rocket, Calendar, Shield, Brain, Globe, BarChart3 } from "lucide-react";
import defantraLogo from "@/assets/defantra-logo.jpg";
import CountdownTimer from "./CountdownTimer";

const DefantraPartnershipSection = () => {
  const modules = [
    {
      icon: Shield,
      title: "IR35 Risk Module",
      status: "live",
      statusLabel: "Available Now",
      description: "UK contractor compliance with automated risk scoring and HMRC-ready documentation",
      targetDate: null,
    },
    {
      icon: BarChart3,
      title: "Vendor Risk Module",
      status: "coming",
      statusLabel: "Q2 2026",
      description: "Streamlined onboarding, continuous monitoring, and comprehensive risk scoring",
      targetDate: new Date("2026-04-01T00:00:00"),
    },
    {
      icon: Globe,
      title: "International Trade Compliance Module",
      status: "coming",
      statusLabel: "Q3 2026",
      description: "Regulatory monitoring and restricted party screening for global operations",
      targetDate: new Date("2026-07-01T00:00:00"),
    },
    {
      icon: Brain,
      title: "AI Model Governance Module",
      status: "coming",
      statusLabel: "Q4 2026",
      description: "Model risk assessment, bias detection, and policy compliance management",
      targetDate: new Date("2026-10-01T00:00:00"),
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
              <Button variant="defantra" size="xl" className="w-full">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <ExternalLink className="w-5 h-5" />
                Visit Defantra
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Right Side - VeriAgent Modules Roadmap */}
          <div className="surface-dark rounded-2xl p-6 md:p-8 border border-border/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-defantra flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-surface-dark-foreground">VeriAgent Platform</h3>
                <p className="text-surface-dark-foreground/60 text-sm">Compliance Modules</p>
              </div>
            </div>

            <p className="text-surface-dark-foreground/70 text-sm mb-6 leading-relaxed">
              Start with IR35 today, expand as your compliance needs grow. Each module shares the same AI + blockchain foundation.
            </p>

            {/* Status Legend */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-surface-dark-foreground/60">Live now</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary/60" />
                <span className="text-xs text-surface-dark-foreground/60">Coming soon</span>
              </div>
            </div>

            <div className="grid gap-3">
              {modules.map((module) => (
                <div 
                  key={module.title}
                  className={`p-4 rounded-xl border transition-colors ${
                    module.status === 'live' 
                      ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/15' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      module.status === 'live' ? 'bg-green-500/20' : 'bg-secondary/20'
                    }`}>
                      <module.icon className={`w-5 h-5 ${module.status === 'live' ? 'text-green-400' : 'text-secondary'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 className="font-semibold text-surface-dark-foreground text-sm">{module.title}</h4>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                          module.status === 'live' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-secondary/20 text-secondary'
                        }`}>
                          {module.status === 'live' ? (
                            <CheckCircle2 className="w-3 h-3" />
                          ) : (
                            <Calendar className="w-3 h-3" />
                          )}
                          {module.statusLabel}
                        </span>
                      </div>
                      <p className="text-surface-dark-foreground/60 text-xs leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                  
                  {/* Countdown Timer for upcoming modules */}
                  {module.status === 'coming' && module.targetDate && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-surface-dark-foreground/50 uppercase tracking-wider">Launching in</span>
                        <CountdownTimer targetDate={module.targetDate} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="block mt-6">
              <Button variant="hero" size="xl" className="w-full">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Rocket className="w-5 h-5" />
                Explore VeriAgent Platform
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefantraPartnershipSection;