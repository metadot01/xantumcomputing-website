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
  Award
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
    technologies: "LangChain · LlamaIndex · Haystack · AWS Bedrock · Amazon SageMaker · Azure OpenAI · Vector Databases (Pinecone, Weaviate, FAISS, pgVector) · Claude 3.x/4.x · GPT-4/5 · Semantic Search · Embedding Models"
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
    technologies: "Kubernetes · Docker · KNative · MLflow · Kubeflow · Terraform · CloudFormation · AWS EKS/SageMaker · Azure Databricks · GitHub Actions · GitLab CI · Airflow · Argo Workflows · Prometheus · Grafana · LangSmith · Weights & Biases"
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
    technologies: "Solidity · Rust · Hardhat · Foundry · ethers.js · Web3.js · viem · TypeScript · Node.js · NestJS · Express · MongoDB · PostgreSQL · Ethereum · Polygon · Solana · Arbitrum · Optimism · OpenZeppelin"
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
    technologies: "Python · PySpark · Apache Spark · Databricks · Delta Lake · Apache Kafka · Apache Flink · AWS EMR · AWS Glue · Azure Synapse · SQL · NoSQL · Snowflake · Redshift · BigQuery · Airflow · dbt"
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
    technologies: "PyTorch · Transformers (Hugging Face) · LoRA · PEFT · QLoRA · AWS SageMaker · Azure ML · Parameter-Efficient Fine-Tuning · Instruction Tuning · RLHF · DPO · Axolotl · Unsloth · DeepSpeed · Flash Attention"
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
    technologies: "LangGraph · LangChain · AutoGen · CrewAI · AWS Step Functions · AWS Strands Agents · Model Context Protocol (MCP) · LangSmith · Agent Tools · Function Calling · ReAct · Chain-of-Thought · AWS Lambda · AWS Bedrock Agents"
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
    technologies: "Pinecone · Weaviate · Milvus · ChromaDB · FAISS · Qdrant · pgVector · OpenSearch · Elasticsearch · Embedding Models (OpenAI, Cohere, Sentence Transformers) · Reranking · Hybrid Search · GraphRAG"
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
    technologies: "AI & Machine Learning · Enterprise GenAI & RAG · LLM Fine-Tuning · Multi-Agent Systems · Cloud & MLOps · Kubernetes · Vector Databases · Blockchain & Web3 · Smart Contracts · ISO 27001 · GDPR · NIS2 · Cyber Essentials · SOC 2"
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
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/80" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                RegTech & FinTech Solutions
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                AI, ML & Blockchain for{" "}
                <span className="text-secondary-foreground">Regulated Finance</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
                Xantum™ Computing delivers AI, machine learning, and blockchain solutions for regulated financial and enterprise environments. Through our partnership with Defantra Ltd (UK), we provide secure, compliance-ready technology for banks, fintechs, and trading firms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="#solutions">
                  <Button variant="heroOutlineDark" size="xl" className="w-full sm:w-auto">
                    View Solutions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Why Firms Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Because regulated finance demands precision, not generalists.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={item.title}
                  className="group relative p-6 rounded-2xl bg-background border border-border hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-16 md:py-24 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Our Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end engineering capabilities for regulated financial environments
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat.label}
                  <span className={`ml-2 ${activeCategory === cat.id ? "text-secondary-foreground/80" : "text-muted-foreground/60"}`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Solutions Grid */}
            <div className="space-y-8">
              {filteredSolutions.map((solution, index) => (
                <div 
                  key={solution.id}
                  className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* Left: Icon & Title */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                          <solution.icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-2 capitalize">
                            {solution.category.replace("-", " & ")}
                          </span>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                            {solution.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {solution.subtitle}
                      </p>
                    </div>
                    
                    {/* Right: What We Build & Tech */}
                    <div className="lg:w-2/3">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-secondary" />
                          What We Build
                        </h4>
                        <ul className="space-y-3">
                          {solution.builds.map((build, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                              <span>{build}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                          Core Technologies
                        </h4>
                        <p className="text-xs text-muted-foreground/80 font-mono leading-relaxed">
                          {solution.technologies}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-secondary to-emerald scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                Ready to Build?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Let's discuss how we can help your firm design, build, and scale production-ready systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroDark" size="xl" className="w-full sm:w-auto">
                    Explore VeriAgent Platform
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroOutlineDark" size="xl" className="w-full sm:w-auto">
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
