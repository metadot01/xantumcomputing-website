import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin, GraduationCap, Briefcase, Scale, Users, Building2, Target, Lightbulb, Globe } from "lucide-react";
import bharathPhoto from "@/assets/bharath-shivaram.jpeg";
import roopaPhoto from "@/assets/roopa-kiran.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary/80 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/90 rounded-full backdrop-blur-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              About Xantum™ Computing
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Xantum™ Computing is a UK-based technology solutions provider, partnered with Defantra Ltd, delivering AI, ML, and Blockchain systems for regulated financial environments. We also operate CYXOR Learning, an e-learning platform for technology and compliance courses.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-background rounded-2xl border border-border text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">UK-Based</h3>
                <p className="text-sm text-muted-foreground">Partnership with Defantra Ltd, UK for enterprise solutions</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border border-border text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Regulated Finance</h3>
                <p className="text-sm text-muted-foreground">Specialized in RegTech & FinTech solutions</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border border-border text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">AI & Blockchain</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge technology solutions</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border border-border text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Globe className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">CYXOR Learning</h3>
                <p className="text-sm text-muted-foreground">Digital skills & compliance training platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership brings together expertise in AI, technology, law, and governance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Bharath Shivaram */}
            <article className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={bharathPhoto} 
                    alt="Bharath Shivaram" 
                    className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover mx-auto lg:mx-0 shadow-lg"
                  />
                </div>
                
                {/* Profile Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                        Bharath Shivaram
                      </h2>
                      <a 
                        href="https://www.linkedin.com/in/bharathshivaram/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-lg text-secondary font-semibold">
                      Director – Solutions Architecture & AI Platforms
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    <p>
                      Bharath Shivaram specializes in AI Agent Architecture, Development, and Implementation, with deep expertise in agentic AI systems, LLM optimization, AI security, and platform engineering. He holds a Master's in Artificial Intelligence from the University of Stirling, Scotland, UK, where his research focused on LLM security and interpretability, and an MS in Business Analytics and Project Management from the University of Connecticut, USA.
                    </p>
                    <p>
                      His dissertation, <em className="text-foreground">"Analyzing Chain-of-Thought Vulnerabilities in LLMs using Interpretation and Quantization,"</em> examines structural and security vulnerabilities in large language models.
                    </p>
                    <p>
                      He is the Founder and AI Platform Architect at Defantra Ltd, UK, a London-based startup building agent-driven, blockchain-enabled AI platforms. Previously, he founded and led solution architecture at Xantum Computing, delivering enterprise-grade AI and blockchain solutions for a range of clients.
                    </p>
                    <p>
                      Bharath's industry background includes senior advisory and engineering roles at Dell Technologies, EMC, and healthcare analytics organizations across the United States and Canada, where he worked extensively on big data platforms, cloud infrastructure, advanced analytics, and large-scale enterprise systems.
                    </p>
                  </div>

                  {/* Key Areas */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["AI Agent Architecture", "LLM Security", "Platform Engineering", "Blockchain", "Enterprise Solutions", "Big Data", "Cloud Infrastructure"].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">MSc Artificial Intelligence</p>
                        <p className="text-xs text-muted-foreground">University of Stirling</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">MS Business Analytics & Project Management</p>
                        <p className="text-xs text-muted-foreground">University of Connecticut</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Founder & AI Platform Architect</p>
                        <p className="text-xs text-muted-foreground">Defantra Ltd, UK</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Dr. Roopa Kiran */}
            <article className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={roopaPhoto} 
                    alt="Dr. Roopa Kiran" 
                    className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover mx-auto lg:mx-0 shadow-lg"
                  />
                </div>
                
                {/* Profile Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                      Dr. Roopa Kiran
                    </h2>
                    <p className="text-lg text-secondary font-semibold mb-1">
                      Director – Legal & Human Resources
                    </p>
                    <p className="text-sm text-muted-foreground">
                      B.A.L., LL.B, LL.M, Ph.D | Assistant Professor of Law
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                    <p>
                      Dr. Roopa Kiran is a legal academic and governance leader with extensive expertise in consumer protection law, business law, employment law, and human rights. She completed her Ph.D. in Law from Bangalore University in 2020, with a doctoral thesis titled <em className="text-foreground">"Consumer Protection Laws and Tourism – A Comparative Study with Special Reference to India, the UK, and Australia."</em>
                    </p>
                    <p>
                      She is K-SET qualified and holds an LL.M in Business Law, securing Fifth Rank. She has presented and published research at state, national, and international forums and was awarded the Best Paper Presenter at an international conference for her work on legislative and policy frameworks.
                    </p>
                    <p>
                      Her academic and professional contributions include postgraduate teaching, coordination of national conferences in collaboration with statutory bodies, and serving as Editor for conference proceedings published in the Karnataka Law Journal.
                    </p>
                    <p>
                      As Director – Legal & Human Resources, Dr. Roopa Kiran oversees legal compliance, governance frameworks, HR policy, workplace ethics, and regulatory risk, ensuring the organisation operates with integrity, accountability, and strong people governance.
                    </p>
                  </div>

                  {/* Key Areas */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Consumer Protection Law", "Business Law", "Employment Law", "Human Rights", "Legal Compliance", "HR Policy", "Governance"].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-sm bg-cyxor/10 text-cyxor rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Ph.D. in Law</p>
                        <p className="text-xs text-muted-foreground">Bangalore University, 2020</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">LL.M in Business Law</p>
                        <p className="text-xs text-muted-foreground">Fifth Rank, K-SET Qualified</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-secondary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Best Paper Presenter</p>
                        <p className="text-xs text-muted-foreground">International Conference Award</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
