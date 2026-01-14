import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Rocket, Target, Briefcase, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import JobApplicationModal from "@/components/JobApplicationModal";

const Careers = () => {
  const openRoles = [
    {
      title: "Senior Data Analyst",
      location: "Madhugiri",
      type: "Full-time",
      department: "Data & Analytics",
      description: "We're looking for an experienced Data Analyst to join our team and help transform complex data into actionable insights. You'll work with cutting-edge AI and analytics tools to drive business decisions.",
      requirements: [
        "5+ years of experience in data analysis",
        "Proficiency in SQL, Python, and visualization tools",
        "Experience with machine learning concepts",
        "Strong communication and presentation skills",
      ],
    },
    {
      title: "Scrum Master",
      location: "Madhugiri",
      type: "Full-time",
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
      description: "We prioritize growth, well-being, and work-life balance.",
      color: "from-rose-500/20 to-pink-500/20",
      iconColor: "text-rose-500",
    },
    {
      icon: Rocket,
      title: "Innovation at Core",
      description: "We embrace emerging technologies and creative, data-driven solutions.",
      color: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-500",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Diverse perspectives and teamwork drive the best results.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
    {
      icon: Target,
      title: "Impact-Focused",
      description: "Every project delivers measurable value for clients and society.",
      color: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2 inline-block" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Our Culture & Values
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Xantum™ Computing, we foster a high-performance, inclusive culture that empowers people, drives innovation, and creates meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Values Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <Card 
                key={index} 
                className="group relative border-0 bg-gradient-to-br from-card to-muted/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="relative p-6 pt-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-7 h-7 ${value.iconColor}`} />
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

      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Briefcase className="w-4 h-4 mr-2 inline-block" />
              Career Opportunities
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore our current openings and find the role that's right for you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {openRoles.map((role, index) => (
              <Card 
                key={index} 
                className="group border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-5">
                        <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                          <MapPin className="w-4 h-4 text-primary" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                          <Clock className="w-4 h-4 text-primary" />
                          {role.type}
                        </span>
                        <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                          <Briefcase className="w-4 h-4 text-primary" />
                          {role.department}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {role.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {role.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:self-center">
                      <JobApplicationModal jobTitle={role.title} location={role.location}>
                        <Button size="lg" className="w-full lg:w-auto group/btn">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <JobApplicationModal jobTitle="General Application" location="Madhugiri">
              <Button 
                variant="secondary" 
                size="xl" 
                className="relative overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
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
