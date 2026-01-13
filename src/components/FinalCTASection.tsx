import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 btn-gradient" />
      <div className="absolute inset-0 particle-bg opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">
          Ready for Digital Transformation?
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 md:mb-10">
          Join forward-thinking organizations already benefiting from our strategic partnership with Defantra Ltd, UK.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
          <Button variant="heroDark" size="lg" className="group w-full sm:w-auto">
            Start Your Project
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="heroOutlineDark" size="lg" className="w-full sm:w-auto">
            <Calendar className="w-4 h-4" />
            Schedule Consultation
          </Button>
        </div>
        <p className="text-xs md:text-sm text-primary-foreground/60">Free initial consultation • Flexible engagement models • USA & UK delivery teams</p>
      </div>
    </section>
  );
};

export default FinalCTASection;
