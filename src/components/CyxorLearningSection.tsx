import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BookOpen, Award } from "lucide-react";

const CyxorLearningSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain-Based Verification",
      description: "Every credential is recorded on the blockchain, ensuring tamper-proof, instantly verifiable achievements.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Digital Skills",
      description: "From AI and blockchain development to platform engineering—learn the technologies shaping tomorrow.",
    },
    {
      icon: Award,
      title: "Professional Credibility",
      description: "Build a verifiable portfolio of skills that employers can instantly authenticate.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background" id="cyxor">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block text-sm font-medium text-cta mb-4 uppercase tracking-wider">
              Introducing CYXOR Learning
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Digital Skills Platform with{" "}
              <span className="text-gradient">Verifiable Credentials</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              CYXOR Learning is our flagship platform revolutionizing professional development through blockchain-verified digital credentials.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex gap-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore CYXOR Learning
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="lg">
                View Demo
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-card rounded-3xl p-8 border border-border shadow-xl">
              {/* CYXOR Logo */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cta to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CX</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">CYXOR Learning</h3>
                  <p className="text-sm text-muted-foreground">Blockchain-Verified Platform</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-xs text-muted-foreground">Courses Available</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-cta">Verified</p>
                  <p className="text-xs text-muted-foreground">Blockchain Creds</p>
                </div>
              </div>

              {/* Course Preview */}
              <div className="space-y-3">
                {['AI & Machine Learning', 'Blockchain Development', 'Platform Engineering'].map((course, i) => (
                  <div key={course} className="flex items-center justify-between p-3 bg-background rounded-xl border border-border">
                    <span className="text-sm font-medium text-foreground">{course}</span>
                    <span className="text-xs text-cta font-medium">Enroll →</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-xl shadow-lg animate-float">
              <p className="text-sm font-semibold">Verified ✓</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyxorLearningSection;
