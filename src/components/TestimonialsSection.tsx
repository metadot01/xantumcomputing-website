import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The team built us a custom blockchain credential system similar to their CYXOR platform. The transparency and verification capabilities have transformed how we issue professional certifications.",
      author: "Director of Operations",
      company: "Professional Training Organization, UK",
    },
    {
      quote: "Xantum™ and Defantra's LLM optimization work delivered exceptional results. Their deep understanding of AI technologies helped us build a competitive advantage.",
      author: "CTO",
      company: "SaaS Startup, USA",
    },
    {
      quote: "From consultation to deployment, the teams showed exceptional expertise in both AI and blockchain. Their experience building CYXOR Learning gave us confidence they could deliver our complex platform.",
      author: "Founder",
      company: "EdTech Company, UK",
    },
  ];

  return (
    <section className="py-24 md:py-32 surface-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 particle-bg opacity-30" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-surface-dark-foreground mb-6">
            Client Success Stories
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-background/5 border border-border/10 hover:bg-background/10 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />

              {/* Quote Text */}
              <p className="text-surface-dark-foreground/80 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-surface-dark-foreground">
                  — {testimonial.author}
                </p>
                <p className="text-sm text-surface-dark-foreground/50">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
