import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadershipCard from "@/components/about/LeadershipCard";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Briefcase, 
  Scale, 
  Users,
  ArrowRight,
  Sparkles,
  Handshake,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Mail,
  Building2
} from "lucide-react";
import bharathPhoto from "@/assets/bharath-shivaram.jpeg";
import roopaPhoto from "@/assets/roopa-kiran.png";

const trustPillars = [
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "We work in close partnership with Defantra Ltd to deliver enterprise-grade solutions designed for real-world, high-stakes environments.",
    gradient: "from-secondary to-emerald"
  },
  {
    icon: ShieldCheck,
    title: "Compliance-First by Design",
    description: "Our solutions are purpose-built for RegTech and FinTech, embedding compliance, auditability, and governance into every layer of the system.",
    gradient: "from-cyxor to-orange-400"
  },
  {
    icon: Cpu,
    title: "Advanced AI & Blockchain",
    description: "We develop production-ready AI, machine learning, and blockchain solutions engineered for security, resilience, and scalability.",
    gradient: "from-purple to-secondary"
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
              About
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              About Xantum<span className="text-secondary">™</span> Computing
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              Xantum™ Computing delivers AI, machine learning, and blockchain solutions for regulated financial and enterprise environments. Through our partnership with Defantra Ltd (UK), we provide secure, compliance-ready technology and operate CYXOR Learning, our platform for AI, technology, and compliance education.
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

      {/* Trust Pillars Section */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyxor/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Built for Trust.{" "}
              <span className="bg-gradient-to-r from-secondary to-emerald bg-clip-text text-transparent">
                Engineered for Scale.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine deep technical expertise, strong strategic partnerships, and a relentless focus on regulated excellence to deliver systems that perform where it matters most.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {trustPillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full p-8 bg-background rounded-3xl border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 overflow-hidden">
                  {/* Gradient bar at top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient}`} />
                  
                  {/* Hover glow effect */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${pillar.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                
                {/* Number indicator */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center text-sm font-bold text-muted-foreground shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
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
                <>Bharath Shivaram is an AI Engineer and Entrepreneur specializing in agentic AI systems, LLM optimization, AI security, and platform engineering. He is the Founder and AI Platform Architect of Defantra Ltd, a UK-based startup building agent-driven, blockchain-enabled AI platforms.</>,
                <>He holds a Master's in Artificial Intelligence from the University of Stirling, UK, with research focused on LLM security and interpretability, and an MS in Business Analytics and Project Management from the University of Connecticut, USA. His dissertation explored Chain-of-Thought vulnerabilities in large language models.</>,
                <>Bharath has extensive industry experience from Dell Technologies, EMC, and Express Scripts across the US and Canada, blending technical expertise, research insight, and entrepreneurial leadership in AI innovation.</>
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
                <>Dr. Roopa Kiran is a legal academic and governance leader with expertise in consumer protection law, business law, employment law, and human rights. She earned her Ph.D. in Law from Bangalore University in 2020, with a thesis on <em className="text-foreground font-medium">"Consumer Protection Laws and Tourism – A Comparative Study of India, the UK, and Australia."</em></>,
                <>She holds an LL.M in Business Law and has presented and published research at national and international forums, including recognition as Best Paper Presenter at an international conference.</>,
                <>As Director – Legal & Human Resources, she leads legal compliance, governance frameworks, HR policy, workplace ethics, and regulatory risk, ensuring the organisation operates with integrity, accountability, and strong people governance.</>
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
                  subtitle: ""
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

      {/* Investor Relations Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90" />
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6 border border-white/20">
                <TrendingUp className="w-4 h-4" />
                Investor Relations
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Partner With Us in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyxor">
                  Shaping the Future
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                We're building the next generation of AI and blockchain solutions for regulated industries. 
                Join us in transforming enterprise technology.
              </p>
            </div>
            
            {/* Investment highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Cpu, label: "AI & Blockchain", desc: "Cutting-edge technology" },
                { icon: ShieldCheck, label: "RegTech Focus", desc: "Compliance-first solutions" },
                { icon: Building2, label: "Enterprise Ready", desc: "Production-grade platforms" }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-cyxor flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Interested in Investment Opportunities?
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                We welcome conversations with investors who share our vision for secure, 
                compliant AI and blockchain solutions in regulated markets.
              </p>
              
              <a href="mailto:investor@xantumcomputing.com">
                <Button variant="heroDark" size="xl" className="shadow-2xl hover:shadow-white/20">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Investor Relations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              
              <p className="text-white/50 text-sm mt-6">
                investor@xantumcomputing.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
