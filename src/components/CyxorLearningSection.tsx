import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BookOpen, Award, FileCheck, GraduationCap } from "lucide-react";
import cyxorLogo from "@/assets/cyxor-learning-logo.jpg";
import srecLogo from "@/assets/srec-logo.png";
import solidarityLogo from "@/assets/solidarity-foundation-logo.png";

const CyxorLearningSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verifiable Credentials",
      description: "Every credential is securely recorded, ensuring tamper-proof, instantly verifiable achievements.",
    },
    {
      icon: BookOpen,
      title: "Self-Paced Online Learning",
      description: "Learn at your own pace with flexible, on-demand access to all course materials and resources.",
    },
    {
      icon: Award,
      title: "Industry-Relevant Curriculum",
      description: "Courses designed with input from industry experts to ensure skills that employers actually need.",
    },
    {
      icon: FileCheck,
      title: "UK-Focused Compliance Courses",
      description: "Specialized compliance and regulatory training aligned with UK standards and requirements.",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-background via-cyxor/5 to-background" id="cyxor">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyxor/10 border border-cyxor/20 mb-6">
            <GraduationCap className="w-4 h-4 text-cyxor" />
            <span className="text-sm font-medium text-cyxor">Cyxor Learning Platform</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Enterprise <span className="bg-gradient-to-r from-cyxor via-secondary to-cyxor bg-clip-text text-transparent">Skill Development</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Developing workforce expertise in technology and compliance, empowering organizations to deploy secure, regulated solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-card rounded-xl p-5 md:p-6 border border-border hover:border-cyxor/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-cyxor/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-cyxor" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>


        {/* Platform Preview Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-border shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Logo & Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg border border-border">
                  <img src={cyxorLogo} alt="Cyxor Learning" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">Cyxor Learning</h3>
                  <p className="text-muted-foreground text-sm">Verifiable Digital Skills</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 text-xs text-success">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                      Live
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 md:gap-8">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">100+</p>
                  <p className="text-xs text-muted-foreground">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-cyxor">8K+</p>
                  <p className="text-xs text-muted-foreground">Learners</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-purple">✓</p>
                  <p className="text-xs text-muted-foreground">Verified</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="group">
                  <Button variant="cyxor" size="xl" className="relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <GraduationCap className="w-5 h-5" />
                    Browse Courses
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Client Showcase */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center mb-4">Trusted by</p>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow border border-border">
                    <img src={srecLogo} alt="SREC Logo" className="w-full h-full object-contain p-1" loading="lazy" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Sri Ramakrishnan Engineering College</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow border border-border">
                    <img src={solidarityLogo} alt="Solidarity Foundation Logo" className="w-full h-full object-contain p-1" loading="lazy" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Solidarity Foundation</span>
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