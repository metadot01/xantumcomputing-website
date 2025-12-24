const industries = [
  "Financial Services",
  "Healthcare",
  "Government",
  "Manufacturing",
  "Retail",
  "Education",
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by organizations across industries
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-muted-foreground/60 font-medium text-sm lg:text-base hover:text-muted-foreground transition-colors"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
