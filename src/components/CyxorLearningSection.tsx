import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BookOpen, Award, Users, CheckCircle2, GraduationCap } from "lucide-react";

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

  const courses = [
    { name: "AI & Machine Learning", students: "2.5K+", level: "Beginner to Advanced" },
    { name: "Blockchain Development", students: "1.8K+", level: "Intermediate" },
    { name: "Platform Engineering", students: "1.2K+", level: "Advanced" },
    { name: "Data Science & Analytics", students: "3K+", level: "All Levels" },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30" id="cyxor">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cta/10 border border-cta/20 mb-4 md:mb-6">
            <GraduationCap className="w-4 h-4 text-cta" />
            <span className="text-sm font-medium text-cta">Our Flagship Platform</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            <span className="text-gradient">CYXOR Learning</span>
            <br className="hidden sm:block" />
            <span className="text-foreground"> Digital Skills Platform</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Revolutionizing professional development through blockchain-verified digital credentials and industry-leading curriculum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content - Features */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex gap-4 p-4 md:p-5 rounded-xl bg-card border border-border hover:border-cta/30 hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-cta/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-cta" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Industry-Relevant Curriculum', 'Instant Verification', 'Career-Focused Paths', 'Expert Instructors'].map((benefit, i) => (
                <div key={benefit} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="group w-full">
                  Explore CYXOR Learning
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full">
                  Browse Courses
                </Button>
              </a>
            </div>
          </div>

          {/* Right Visual - Platform Preview */}
          <div className="order-1 lg:order-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-border shadow-xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cta to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-lg">CX</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-xl text-foreground">CYXOR Learning</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Blockchain-Verified Platform</p>
                </div>
                <div className="ml-auto">
                  <span className="px-2 py-1 text-xs font-semibold bg-success/10 text-success rounded-full">Live</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-3 md:p-4 text-center">
                  <p className="text-lg md:text-2xl font-bold text-foreground">100+</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Courses</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-3 md:p-4 text-center">
                  <p className="text-lg md:text-2xl font-bold text-cta">8K+</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Learners</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-3 md:p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  </div>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Verified</p>
                </div>
              </div>

              {/* Course List */}
              <div className="space-y-2 md:space-y-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Popular Courses</p>
                {courses.map((course, i) => (
                  <div key={course.name} className="flex items-center justify-between p-2.5 md:p-3 bg-background rounded-xl border border-border hover:border-cta/30 transition-colors">
                    <div className="min-w-0">
                      <span className="text-xs md:text-sm font-medium text-foreground block truncate">{course.name}</span>
                      <span className="text-[10px] md:text-xs text-muted-foreground">{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" />
                        <span className="hidden sm:inline">{course.students}</span>
                      </div>
                      <span className="text-xs text-cta font-medium">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="hidden md:block absolute -top-4 -right-4 bg-cta text-white px-4 py-2 rounded-xl shadow-lg animate-float">
              <p className="text-sm font-semibold">✓ Blockchain Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyxorLearningSection;