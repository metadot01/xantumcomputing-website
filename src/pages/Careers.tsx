import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Rocket, Target, Briefcase, ArrowRight, CheckCircle2, Sparkles, Building2, Star } from "lucide-react";
import JobApplicationModal from "@/components/JobApplicationModal";

const Careers = () => {
  const openRoles = [
    {
      title: "Data Analyst",
      location: "Madhugiri",
      type: "Full-time",
      workMode: "Onsite - 5 days in office",
      department: "Data & Analytics",
      description: "We're looking for a Data Analyst to join our team and support business decision-making through data analysis and research. You'll work closely with teams in an Agile environment, using Excel and MS Office tools to analyse market data and present insights clearly.",
      requirements: [
        "0–1 years of experience (fresh graduates welcome)",
        "Strong proficiency in Microsoft Excel (formulas, pivot tables, basic analysis)",
        "Good working knowledge of MS Office, especially PowerPoint",
        "Basic understanding of Scrum / Agile methodologies",
        "Strong research and market analysis skills",
        "Good communication and presentation skills",
      ],
    },
    {
      title: "Senior Data Analyst",
      location: "Madhugiri",
      type: "Full-time",
      workMode: "Onsite - 5 days in office",
      department: "Data & Analytics",
      description: "We're looking for an experienced Data Analyst to join our team and help transform complex data into actionable insights. You'll work with cutting-edge AI and analytics tools to drive business decisions.",
      requirements: [
        "0–1 years of experience (fresh graduates welcome); Master's degree candidates only (completed or pursuing)",
        "Strong proficiency in Microsoft Excel and MS Office, especially PowerPoint",
        "Basic understanding of Scrum / Agile ways of working",
        "Strong research, market analysis, communication, and presentation skills",
        "AI fluency, with the ability to effectively use tools such as ChatGPT, Claude, Gemini, or similar AI assistants for analysis and productivity",
      ],
    },
    {
      title: "Scrum Master",
      location: "Madhugiri",
      type: "Full-time",
      workMode: "Onsite - 5 days in office",
      department: "Project Management",
      description: "Join us as a Scrum Master to facilitate agile processes across our engineering teams. You'll be instrumental in fostering collaboration and continuous improvement.",
      requirements: [
        "3+ years of experience as a Scrum Master",
        "CSM or PSM certification preferred",
        "Experience with agile tools (Jira, Confluence)",
        "Excellent facilitation and coaching skills",
      ],
    },
  ];

  const cultureValues = [
    {
      icon: Heart,
      title: "People First",
      description: "We prioritize growth, well-being, and work-life balance for every team member.",
      gradient: "from-rose-500 to-pink-600",
      bgGlow: "bg-rose-500/20",
    },
    {
      icon: Rocket,
      title: "Innovation at Core",
      description: "We embrace emerging technologies and creative, data-driven solutions.",
      gradient: "from-violet-500 to-purple-600",
      bgGlow: "bg-violet-500/20",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Diverse perspectives and teamwork drive the best results.",
      gradient: "from-blue-500 to-cyan-600",
      bgGlow: "bg-blue-500/20",
    },
    {
      icon: Target,
      title: "Impact-Focused",
      description: "Every project delivers measurable value for clients and society.",
      gradient: "from-amber-500 to-orange-600",
      bgGlow: "bg-amber-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Enhanced */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Rich Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-secondary/10" />
        <div className="absolute inset-0 tech-pattern" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">We're Hiring</span>
              <Star className="w-4 h-4 text-cyxor fill-cyxor" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">Build the Future </span>
              <span className="text-gradient-primary">With Us</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
              At Xantum™ Computing, we foster a high-performance, inclusive culture that empowers people, drives innovation, and creates meaningful impact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#positions">
                <Button variant="hero" size="xl">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Values Section - Enhanced with 3D Cards */}
      <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-50" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-secondary/30 bg-secondary/5">
              <Heart className="w-4 h-4 mr-2 inline-block text-secondary" />
              Our Culture
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why You'll Love Working Here
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Join a team that values your growth and celebrates your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <Card 
                key={index} 
                className="group relative border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                {/* Top accent gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient}`} />
                
                {/* Hover glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${value.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="relative p-6 pt-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section - Enhanced */}
      <section id="positions" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/5">
              <Briefcase className="w-4 h-4 mr-2 inline-block text-primary" />
              Career Opportunities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our current openings and find the role that's right for you.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {openRoles.map((role, index) => (
              <Card 
                key={index} 
                className="group relative border border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="flex-1">
                      {/* Role header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                          {role.title}
                        </h3>
                        <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                          {role.department}
                        </Badge>
                      </div>
                      
                      {/* Meta info pills */}
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm font-medium text-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          {role.location}
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/5 border border-secondary/20 text-sm font-medium text-foreground">
                          <Clock className="w-4 h-4 text-secondary" />
                          {role.type}
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/20 text-sm font-medium text-foreground">
                          <Building2 className="w-4 h-4 text-accent" />
                          {role.workMode}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                        {role.description}
                      </p>
                      
                      {/* Requirements */}
                      <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
                        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-base">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                          Requirements
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {role.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Apply button */}
                    <div className="lg:self-center lg:ml-8">
                      <JobApplicationModal jobTitle={role.title} location={role.location}>
                        <Button variant="hero" size="xl" className="w-full lg:w-auto">
                          Apply Now
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </JobApplicationModal>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 tech-pattern opacity-10" />
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/90">Open to All Talent</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Don't See the Right Role?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <JobApplicationModal jobTitle="General Application" location="Madhugiri">
              <Button 
                variant="heroDark" 
                size="xl" 
                className="shadow-2xl hover:shadow-white/20"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </JobApplicationModal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;