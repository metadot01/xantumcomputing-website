import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 btn-gradient" />
      <div className="absolute inset-0 particle-bg opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-section lg:text-section-lg font-bold text-primary-foreground mb-6">
          Ready to Transform Your Technology?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Join forward-thinking organizations already benefiting from our strategic partnership with Defantra UK Ltd.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="heroDark" size="xl" className="group">
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="heroOutlineDark" size="xl">
            <Calendar className="w-4 h-4" />
            Schedule Consultation
          </Button>
        </div>
        <p className="text-sm text-primary-foreground/60">Free initial consultation • Flexible engagement models • USA & UK delivery teams</p>
      </div>
    </section>
  );
};

export default FinalCTASection;
