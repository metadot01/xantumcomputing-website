import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Server, 
  Link2, 
  Database, 
  Cpu, 
  Bot, 
  Search,
  GraduationCap,
  Shield,
  Users,
  CheckCircle2,
  Rocket,
  FileCheck,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const whyChooseUs = [
  {
    icon: FileCheck,
    title: "Outside IR35-only",
    description: "UK engagements with clear contractual boundaries"
  },
  {
    icon: Users,
    title: "Senior Engineers",
    description: "Expert-led teams from day one"
  },
  {
    icon: Shield,
    title: "Compliance-first",
    description: "Built for security and scale in regulated environments"
  },
  {
    icon: Target,
    title: "Accountable Teams",
    description: "Small, focused delivery - no vendor bloat"
  },
  {
    icon: Rocket,
    title: "Production-ready",
    description: "Real systems, not proofs of concept"
  }
];

const categories = [
  { id: "all", label: "All Services", count: 8 },
  { id: "ai-ml", label: "AI & ML", count: 3 },
  { id: "infrastructure", label: "Infrastructure", count: 1 },
  { id: "blockchain", label: "Blockchain", count: 1 },
  { id: "data", label: "Data Engineering", count: 2 },
  { id: "training", label: "Training", count: 1 }
];

const solutions = [
  {
    id: "genai-rag",
    category: "ai-ml",
    icon: Brain,
    title: "Enterprise GenAI & RAG Systems",
    subtitle: "Production-grade AI with retrieval augmentation for regulated financial environments",
    builds: [
      "Intelligent Document Processing: Automated analysis of contracts, regulatory filings, and financial reports using RAG pipelines with compliance guardrails",
      "Financial Knowledge Assistants: Secure internal copilots that retrieve and synthesize information from proprietary knowledge bases",
      "Regulatory Intelligence Platforms: Real-time monitoring and Q&A systems that stay current with evolving financial regulations",
      "Investment Research Automation: RAG-powered research platforms that combine market data, news, and internal analysis"
    ],
    technologies: ["LangChain", "LlamaIndex", "AWS Bedrock", "Azure OpenAI", "Pinecone", "Claude", "GPT-4"]
  },
  {
    id: "mlops",
    category: "infrastructure",
    icon: Server,
    title: "Cloud-Native MLOps & Production AI Infrastructure",
    subtitle: "Scalable, auditable ML deployment pipelines for mission-critical financial systems",
    builds: [
      "Kubernetes ML Platforms: Self-service ML infrastructure with automated model deployment, A/B testing, and rollback capabilities",
      "CI/CD for GenAI: Automated pipelines for testing, validating, and deploying LLM applications with governance controls",
      "Model Monitoring & Observability: Real-time drift detection, performance tracking, and automated alerting for production models",
      "Multi-Cloud ML Orchestration: Unified MLOps across AWS, Azure, and GCP with disaster recovery"
    ],
    technologies: ["Kubernetes", "Docker", "MLflow", "Kubeflow", "Terraform", "AWS EKS", "Prometheus", "Grafana"]
  },
  {
    id: "blockchain",
    category: "blockchain",
    icon: Link2,
    title: "Blockchain & DeFi Backend Engineering",
    subtitle: "Secure Web3 infrastructure and smart contracts for next-generation finance",
    builds: [
      "Smart Contract Development: Battle-tested DeFi protocols, tokenization systems, and automated settlement contracts",
      "Web3 Backend APIs: TypeScript/Node.js services that bridge blockchain and traditional systems",
      "Decentralized Finance Platforms: AMMs, lending protocols, yield aggregators, and derivatives platforms",
      "Blockchain Integration Middleware: Connect legacy banking systems with Web3 infrastructure"
    ],
    technologies: ["Solidity", "Rust", "Hardhat", "ethers.js", "TypeScript", "Node.js", "Ethereum", "Polygon"]
  },
  {
    id: "big-data",
    category: "data",
    icon: Database,
    title: "Big Data ML Engineering",
    subtitle: "Distributed data processing and machine learning at scale",
    builds: [
      "Real-Time Risk Engines: Streaming ML pipelines for credit scoring, fraud detection, and market risk assessment",
      "Data Lake Architecture: Unified financial data platforms with medallion architecture (bronze/silver/gold layers)",
      "Feature Engineering Pipelines: Automated feature generation from massive datasets using Spark",
      "Batch & Streaming ML: Hybrid systems processing both historical and real-time financial data"
    ],
    technologies: ["PySpark", "Apache Spark", "Databricks", "Delta Lake", "Kafka", "AWS EMR", "Snowflake", "dbt"]
  },
  {
    id: "fine-tuning",
    category: "ai-ml",
    icon: Cpu,
    title: "LLM Fine-Tuning & Domain Adaptation",
    subtitle: "Custom language models optimized for financial use cases",
    builds: [
      "Domain-Specific Financial LLMs: Fine-tuned models that understand financial terminology, regulatory language, and market context",
      "Instruction-Tuned Assistants: Models trained on proprietary workflows for compliance, underwriting, or trading support",
      "Efficient Model Adaptation: LoRA and PEFT techniques for rapid customization without full retraining",
      "Multilingual Financial Models: Support for global markets and cross-border operations"
    ],
    technologies: ["PyTorch", "Hugging Face", "LoRA", "PEFT", "AWS SageMaker", "Azure ML", "DeepSpeed"]
  },
  {
    id: "multi-agent",
    category: "ai-ml",
    icon: Bot,
    title: "Multi-Agent AI Systems & Orchestration",
    subtitle: "Intelligent agent workflows for complex financial tasks",
    builds: [
      "Autonomous Financial Analysts: Multi-agent systems that research, analyze, and generate investment insights",
      "Compliance Orchestration: Coordinated AI agents handling KYC/AML workflows, document verification, and regulatory reporting",
      "Trading Strategy Agents: Collaborative agents for market analysis, signal generation, and risk management",
      "Customer Service Automation: Multi-agent systems routing and resolving complex customer inquiries"
    ],
    technologies: ["LangGraph", "AutoGen", "CrewAI", "AWS Step Functions", "MCP", "LangSmith", "AWS Bedrock Agents"]
  },
  {
    id: "vector-search",
    category: "data",
    icon: Search,
    title: "Vector Database & Semantic Search Engineering",
    subtitle: "High-performance retrieval systems for financial intelligence",
    builds: [
      "Enterprise Knowledge Graphs: Vector-powered semantic search across millions of financial documents",
      "Hybrid Search Systems: Combined keyword and semantic search for precise information retrieval",
      "Real-Time Document Indexing: Continuous ingestion and vectorization of market data, news, and internal documents",
      "Cross-Lingual Search: Multilingual semantic search for global financial institutions"
    ],
    technologies: ["Pinecone", "Weaviate", "Milvus", "ChromaDB", "FAISS", "pgVector", "OpenSearch", "GraphRAG"]
  },
  {
    id: "training",
    category: "training",
    icon: GraduationCap,
    title: "Digital, Risk & Compliance Training",
    subtitle: "Employee training in digital technology, governance, risk, and compliance",
    builds: [
      "AI & Digital Capability Enablement: Hands-on courses in enterprise AI, GenAI, RAG, cloud, MLOps, blockchain, and secure systems",
      "Governance & Risk Management Skills: Practical training in risk assessment, controls mapping, policy design, and implementation",
      "Regulatory Compliance Readiness: Job-ready expertise in GDPR, ISO 27001, SOC 2, NIS2, Cyber Essentials, and evolving frameworks",
      "Secure-by-Design Digital Systems: Skills to design, deploy, and operate technology platforms with embedded security"
    ],
    technologies: ["AI & ML", "GenAI & RAG", "Cloud & MLOps", "Blockchain", "ISO 27001", "GDPR", "NIS2", "SOC 2"]
  }
];


const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSolutions = activeCategory === "all" 
    ? solutions 
    : solutions.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }} />
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 text-secondary" />
                RegTech & FinTech Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
                AI, ML & Blockchain for{" "}
                <span className="bg-gradient-to-r from-secondary via-emerald-400 to-secondary bg-clip-text text-transparent">
                  Regulated Finance
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
                Xantum™ Computing delivers AI, machine learning, and blockchain solutions for regulated financial and enterprise environments. Through our partnership with Defantra Ltd (UK), we provide secure, compliance-ready technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#solutions">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/10">
                    View Solutions
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
                Why Firms Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Because regulated finance demands precision, not generalists.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={item.title}
                  className="group relative p-8 rounded-2xl bg-white border border-border hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500 text-center"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/20 transition-all duration-500">
                      <item.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 md:py-28 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
                Solutions Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end engineering capabilities for regulated financial environments
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    activeCategory === cat.id 
                      ? "bg-white/20" 
                      : "bg-slate-200"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Solutions Grid */}
            <div className="grid gap-6 lg:gap-8">
              {filteredSolutions.map((solution, index) => (
                <div 
                  key={solution.id}
                  className="group relative rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                >
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      {/* Left: Icon & Title */}
                      <div className="lg:w-1/3">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                            <solution.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3 uppercase tracking-wide">
                              {solution.category.replace("-", " & ")}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {solution.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {solution.subtitle}
                        </p>
                        
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                          {solution.technologies.slice(0, 5).map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                          {solution.technologies.length > 5 && (
                            <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                              +{solution.technologies.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Right: What We Build */}
                      <div className="lg:w-2/3">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-secondary" />
                          What We Build
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {solution.builds.map((build, i) => {
                            const [title, ...desc] = build.split(": ");
                            return (
                              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                                  <p className="text-xs text-muted-foreground leading-relaxed">{desc.join(": ")}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
          
          {/* Glowing orbs */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/30 rounded-full blur-[120px]" />
          
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Ready to Build?
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10">
                Let's discuss how we can help your firm design, build, and scale production-ready systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-white text-slate-900 hover:bg-white/90">
                    Explore VeriAgent Platform
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/10">
                    Browse Training Courses
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;