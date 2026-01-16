import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BookOpen, Award, FileCheck, GraduationCap, Users, CheckCircle2 } from "lucide-react";
import cyxorLogo from "@/assets/cyxor-learning-logo.jpg";
import srecLogo from "@/assets/srec-logo.png";
import solidarityLogo from "@/assets/solidarity-foundation-logo.png";

const CyxorLearningSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verifiable Credentials",
      description: "Tamper-proof, blockchain-verified achievements",
    },
    {
      icon: BookOpen,
      title: "Self-Paced Learning",
      description: "Flexible, on-demand course access",
    },
    {
      icon: Award,
      title: "Industry Curriculum",
      description: "Expert-designed skill programs",
    },
    {
      icon: FileCheck,
      title: "UK Compliance",
      description: "Regulatory training standards",
    },
  ];

  const stats = [
    { value: "100+", label: "Courses", color: "text-cyxor" },
    { value: "8K+", label: "Learners", color: "text-foreground" },
    { value: "50+", label: "Partners", color: "text-secondary" },
  ];

  const partners = [
    { logo: srecLogo, name: "Sri Ramakrishnan Engineering College" },
    { logo: solidarityLogo, name: "Solidarity Foundation" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-cyxor/5 to-background relative overflow-hidden" id="cyxor">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyxor/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyxor/10 border border-cyxor/20">
              <GraduationCap className="w-3.5 h-3.5 text-cyxor" />
              <span className="text-xs font-medium text-cyxor">CYXOR Learning</span>
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Workforce <span className="text-cyxor">Learning</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Workforce development in AI and compliance skills with verifiable credentials.
          </p>
        </div>

        {/* Main Content - 3 Column Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Column - Platform Card */}
          <div className="lg:col-span-4 bg-card rounded-2xl p-5 border border-border shadow-lg flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-md border border-border">
                <img src={cyxorLogo} alt="CYXOR Learning" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">CYXOR Learning</h3>
                <div className="flex items-center gap-2">
                  <p className="text-muted-foreground text-xs">Verifiable Skills</p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-green-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live
                  </span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
              Digital skills platform with blockchain-verified credentials. Learn from experts and earn credentials employers trust.
            </p>

            {/* Stats Row */}
            <div className="flex items-center justify-between mb-4 p-3 rounded-xl bg-muted/50 border border-border/50">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center flex-1">
                  <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                  {index < stats.length - 1 && (
                    <div className="hidden" />
                  )}
                </div>
              ))}
            </div>

            <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="cyxor" size="default" className="w-full">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <GraduationCap className="w-4 h-4" />
                Browse Courses
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Middle Column - Features Grid */}
          <div className="lg:col-span-5 surface-dark rounded-2xl p-5 border border-border/10 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyxor to-secondary flex items-center justify-center">
                  <Award className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-surface-dark-foreground">Learning Features</h3>
                  <p className="text-surface-dark-foreground/50 text-[10px]">What sets us apart</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyxor" />
                <span className="text-[10px] text-surface-dark-foreground/60">Blockchain Verified</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 cursor-pointer group/card hover:bg-cyxor/10 hover:border-cyxor/30 hover:shadow-lg hover:shadow-cyxor/10 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-md bg-cyxor/20 flex items-center justify-center transition-transform duration-300 group-hover/card:scale-110">
                      <feature.icon className="w-3.5 h-3.5 text-cyxor transition-colors duration-300 group-hover/card:text-cyxor" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-surface-dark-foreground text-xs mb-0.5 transition-colors duration-300 group-hover/card:text-white">{feature.title}</h4>
                  <p className="text-surface-dark-foreground/50 text-[10px] leading-tight transition-colors duration-300 group-hover/card:text-surface-dark-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>

            <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="block mt-4">
              <Button variant="hero" size="default" className="w-full bg-gradient-to-r from-cyxor to-secondary hover:shadow-cyxor/30">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <BookOpen className="w-4 h-4" />
                Start Learning
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Right Column - Partners & CTA */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Trusted By Card */}
            <div className="bg-gradient-to-br from-cyxor via-cyxor/95 to-secondary/90 rounded-2xl p-5 border border-white/10 flex-1">
              <div className="text-center mb-4">
                <Users className="w-8 h-8 text-white/80 mx-auto mb-2" />
                <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Trusted By</p>
                <h4 className="font-display font-bold text-white text-lg">Leading Institutions</h4>
              </div>
              
              <div className="space-y-3">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex items-center gap-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                    <div className="w-8 h-8 rounded-md overflow-hidden bg-white flex items-center justify-center">
                      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain p-0.5" loading="lazy" />
                    </div>
                    <span className="text-white/90 text-[10px] font-medium leading-tight">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-card rounded-2xl p-4 border border-border shadow-lg">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-cyxor/10 hover:scale-105 cursor-pointer">
                  <p className="text-2xl font-bold text-cyxor">UK</p>
                  <p className="text-[10px] text-muted-foreground">Focused</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-secondary/10 hover:scale-105 cursor-pointer">
                  <p className="text-2xl font-bold text-secondary">24/7</p>
                  <p className="text-[10px] text-muted-foreground">Access</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-green-500/10 hover:scale-105 cursor-pointer">
                  <p className="text-2xl font-bold text-green-500">✓</p>
                  <p className="text-[10px] text-muted-foreground">Verified</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-purple/10 hover:scale-105 cursor-pointer">
                  <p className="text-2xl font-bold text-purple">Pro</p>
                  <p className="text-[10px] text-muted-foreground">Certs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyxorLearningSection;