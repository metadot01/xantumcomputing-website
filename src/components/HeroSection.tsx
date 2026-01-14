import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BookOpen, GraduationCap, ExternalLink } from "lucide-react";
import cyxorLogo from "@/assets/cyxor-learning-logo.jpg";
import defantraLogo from "@/assets/defantra-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyxor/5 rounded-full blur-3xl" />
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs md:text-sm text-white/90 font-medium">Partnership with Defantra Ltd, UK</span>
          </div>

          {/* Headline */}
          <h1 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white opacity-0 animate-fade-in leading-[1.1]"
            style={{ animationDelay: '0.2s' }}
          >
            Engineering{" "}
            <span className="text-cyxor">AI & BLOCKCHAIN</span>{" "}
            Solutions
          </h1>

          {/* Description */}
          <p 
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-10 opacity-0 animate-fade-in leading-relaxed"
            style={{ animationDelay: '0.3s' }}
          >
            Xantum™ Computing delivers AI, machine learning, and blockchain solutions for regulated financial and enterprise environments. Through our partnership with Defantra Ltd (UK), we provide secure, compliance-ready technology and operate <span className="text-cyxor font-semibold">CYXOR Learning</span>, our platform for AI, technology, and compliance education.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                <ExternalLink className="w-5 h-5" />
                Explore VeriAgent Platform
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer">
              <Button variant="cyxor" size="xl" className="group w-full sm:w-auto">
                <GraduationCap className="w-5 h-5" />
                Browse Courses
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>

        {/* Two Feature Cards */}
        <div 
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          {/* CYXOR Learning Card */}
          <a 
            href="https://www.cyxorlearning.co.uk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-cyxor/30 hover:border-cyxor hover:bg-white/15 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <img src={cyxorLogo} alt="CYXOR Learning" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-cyxor transition-colors">CYXOR Learning</h3>
                </div>
                <p className="text-sm text-white/70">Technology & Compliance Training</p>
              </div>
              <span className="px-3 py-1 text-xs font-semibold bg-cyxor text-white rounded-full animate-pulse-glow">FEATURED</span>
            </div>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
              Digital skills platform offering verifiable credentials. Learn AI, Python, blockchain, and compliance from industry experts.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/10 rounded-lg text-white/90 border border-white/10">
                <Shield className="w-3.5 h-3.5 text-purple" /> Verifiable Credentials
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/10 rounded-lg text-white/90 border border-white/10">
                <BookOpen className="w-3.5 h-3.5 text-cyxor" /> Self-Paced
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/10 rounded-lg text-white/90 border border-white/10">
                <GraduationCap className="w-3.5 h-3.5 text-accent" /> UK Focused
              </span>
            </div>
          </a>

          {/* Defantra Partnership Card */}
          <a 
            href="https://www.defantra.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-defantra/30 hover:border-defantra hover:bg-white/15 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <img src={defantraLogo} alt="Defantra Ltd" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-defantra transition-colors">VeriAgent Platform</h3>
                </div>
                <p className="text-sm text-white/70">Defantra Ltd, UK Partnership</p>
              </div>
              <span className="px-3 py-1 text-xs font-semibold bg-defantra/20 text-defantra border border-defantra/30 rounded-full">PARTNER</span>
            </div>
            <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
              Strategic technology and consulting partnership delivering AI/ML solutions, blockchain implementation, and RegTech expertise across UK and USA.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs bg-white/10 rounded-lg text-white/90 border border-white/10">AI/ML Solutions</span>
              <span className="px-3 py-1.5 text-xs bg-white/10 rounded-lg text-white/90 border border-white/10">Blockchain</span>
              <span className="px-3 py-1.5 text-xs bg-white/10 rounded-lg text-white/90 border border-white/10">RegTech</span>
            </div>
          </a>
        </div>

        {/* Trust Indicators */}
        <div 
          className="mt-12 md:mt-16 pt-8 border-t border-white/10 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-xs md:text-sm text-white/50 text-center mb-6 uppercase tracking-wider">
            Trusted by Educational Institutions & Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {['Sri Ramakrishnan Engineering College', 'Solidarity Foundation'].map((client) => (
              <div 
                key={client} 
                className="text-white/40 font-display font-semibold text-sm md:text-base hover:text-white/60 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;