import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadershipCard from "@/components/about/LeadershipCard";
import CompanyHighlight from "@/components/about/CompanyHighlight";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Target, 
  Lightbulb, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Scale, 
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";
import bharathPhoto from "@/assets/bharath-shivaram.jpeg";
import roopaPhoto from "@/assets/roopa-kiran.png";

const companyHighlights = [
  {
    icon: Building2,
    title: "UK-Based",
    description: "Strategic partnership with Defantra Ltd, UK for enterprise-grade solutions"
  },
  {
    icon: Target,
    title: "Regulated Finance",
    description: "Specialized in RegTech & FinTech solutions for compliance-first environments"
  },
  {
    icon: Lightbulb,
    title: "AI & Blockchain",
    description: "Cutting-edge technology solutions built for production at scale"
  },
  {
    icon: Globe,
    title: "CYXOR Learning",
    description: "Digital skills & compliance training platform with blockchain credentials"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Decorative blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              About Us
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              About Xantum™ Computing
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              Xantum™ Computing is an emerging technology solutions provider specializing in AI, machine learning, and blockchain software development. Through our partnership with Defantra Ltd (UK), we deliver secure, regulation-ready technology solutions for financial and enterprise environments. We also operate CYXOR Learning, an e-learning platform focused on technology, AI, and compliance education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/solutions">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutlineDark" size="xl" className="w-full sm:w-auto">
                  Browse Courses
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              What Defines Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on expertise, partnerships, and a commitment to regulated excellence
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyHighlights.map((highlight, index) => (
              <CompanyHighlight
                key={highlight.title}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership brings together expertise in AI, technology, law, and governance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            {/* Bharath Shivaram */}
            <LeadershipCard
              name="Bharath Shivaram"
              title="Director – AI Platforms"
              photo={bharathPhoto}
              linkedinUrl="https://www.linkedin.com/in/bharathshivaram/"
              accentColor="secondary"
              bio={[
                <>Bharath Shivaram specializes in AI Agent Architecture, Development, and Implementation, with deep expertise in agentic AI systems, LLM optimization, AI security, and platform engineering. He holds a Master's in Artificial Intelligence from the University of Stirling, Scotland, UK, where his research focused on LLM security and interpretability, and an MS in Business Analytics and Project Management from the University of Connecticut, USA.</>,
                <>His dissertation, <em className="text-foreground font-medium">"Analyzing Chain-of-Thought Vulnerabilities in LLMs using Interpretation and Quantization,"</em> examines structural and security vulnerabilities in large language models.</>,
                <>He is the Founder and AI Platform Architect at Defantra Ltd, a UK-based startup building agent-driven, blockchain-enabled AI platforms. His industry background includes senior advisory and engineering roles at Dell Technologies, EMC, and healthcare analytics organizations across the United States and Canada.</>
              ]}
              expertise={[
                "AI Agent Architecture",
                "LLM Security",
                "Platform Engineering",
                "Blockchain",
                "Enterprise Solutions",
                "Big Data",
                "Cloud Infrastructure"
              ]}
              credentials={[
                {
                  icon: GraduationCap,
                  title: "MSc Artificial Intelligence",
                  subtitle: "University of Stirling"
                },
                {
                  icon: GraduationCap,
                  title: "MS Business Analytics & PM",
                  subtitle: "University of Connecticut"
                },
                {
                  icon: Briefcase,
                  title: "Founder & AI Architect",
                  subtitle: "Defantra Ltd, UK"
                }
              ]}
            />

            {/* Dr. Roopa Kiran */}
            <LeadershipCard
              name="Dr. Roopa Kiran"
              title="Director – Legal & Human Resources"
              subtitle="B.A.L., LL.B, LL.M, Ph.D | Assistant Professor of Law"
              photo={roopaPhoto}
              accentColor="cyxor"
              bio={[
                <>Dr. Roopa Kiran is a legal academic and governance leader with extensive expertise in consumer protection law, business law, employment law, and human rights. She completed her Ph.D. in Law from Bangalore University in 2020, with a doctoral thesis titled <em className="text-foreground font-medium">"Consumer Protection Laws and Tourism – A Comparative Study with Special Reference to India, the UK, and Australia."</em></>,
                <>She is K-SET qualified and holds an LL.M in Business Law, securing Fifth Rank. She has presented and published research at state, national, and international forums and was awarded the Best Paper Presenter at an international conference for her work on legislative and policy frameworks.</>,
                <>As Director – Legal & Human Resources, Dr. Roopa Kiran oversees legal compliance, governance frameworks, HR policy, workplace ethics, and regulatory risk, ensuring the organisation operates with integrity, accountability, and strong people governance.</>
              ]}
              expertise={[
                "Consumer Protection Law",
                "Business Law",
                "Employment Law",
                "Human Rights",
                "Legal Compliance",
                "HR Policy",
                "Governance"
              ]}
              credentials={[
                {
                  icon: GraduationCap,
                  title: "Ph.D. in Law",
                  subtitle: "Bangalore University, 2020"
                },
                {
                  icon: Scale,
                  title: "LL.M in Business Law",
                  subtitle: "Fifth Rank, K-SET Qualified"
                },
                {
                  icon: Users,
                  title: "Best Paper Presenter",
                  subtitle: "International Conference"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-secondary to-emerald">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how we can help your organization with AI, blockchain, and compliance solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="heroDark" size="xl" className="w-full sm:w-auto">
                  Explore VeriAgent Platform
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/solutions">
                <Button variant="heroOutlineDark" size="xl" className="w-full sm:w-auto">
                  View Solutions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
