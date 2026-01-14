import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Heart, Rocket, Target, Briefcase, ArrowRight } from "lucide-react";

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
      description: "We prioritize our team's well-being, growth, and work-life balance above all else.",
    },
    {
      icon: Rocket,
      title: "Innovation Driven",
      description: "We embrace new technologies and encourage creative problem-solving at every level.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe the best solutions come from diverse teams working together openly.",
    },
    {
      icon: Target,
      title: "Impact Focused",
      description: "Every project we undertake aims to create meaningful change for our clients and society.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Build the Future with Us
            </h1>
            <p className="text-lg text-muted-foreground">
              At Xantum Computing, we're on a mission to transform businesses through innovative AI and blockchain solutions. 
              Join our passionate team and make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Our Culture & Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've built a culture that celebrates innovation, values diversity, and empowers every team member to do their best work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <Card key={index} className="border-border hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current openings and find the role that's right for you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openRoles.map((role, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {role.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {role.department}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full md:w-auto">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{role.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {role.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button variant="secondary" size="lg">
            Send Your Resume
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;