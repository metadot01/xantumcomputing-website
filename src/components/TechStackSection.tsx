const TechStackSection = () => {
  const stacks = [
    {
      category: "Languages & Frameworks",
      items: "Python, JavaScript/TypeScript, Go, Rust, React, Node.js, FastAPI, Django, Next.js",
    },
    {
      category: "AI & Machine Learning",
      items: "PyTorch, TensorFlow, Hugging Face, LangChain, OpenAI, Anthropic Claude, Custom LLM Development",
    },
    {
      category: "Blockchain Platforms",
      items: "Ethereum, Solana, Polygon, Hyperledger, Smart Contracts (Solidity, Rust), Credential Verification Systems",
    },
    {
      category: "Cloud & DevOps",
      items: "AWS, Azure, GCP, Kubernetes, Docker, CI/CD Pipelines, Infrastructure as Code",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-foreground mb-6">
            Our Technology Stack
          </h2>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stacks.map((stack, index) => (
            <div
              key={stack.category}
              className="p-8 rounded-2xl bg-muted/30 border border-border hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {stack.category}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stack.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
