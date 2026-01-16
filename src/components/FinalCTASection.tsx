import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import ContactSalesModal from "./ContactSalesModal";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 lg:py-36 relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 geometric-pattern opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready for <span className="bg-gradient-to-r from-secondary via-cyxor to-secondary bg-clip-text text-transparent">Digital Transformation</span>?
        </h2>
        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Whether you're looking for technology solutions or professional training, we're here to help you succeed.
        </p>
        
        <div className="flex justify-center mb-8">
          <ContactSalesModal>
            <Button variant="heroDark" size="xl">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageSquare className="w-5 h-5" />
              Contact Sales
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </ContactSalesModal>
        </div>
        
        <p className="text-sm text-white/60">
          Free consultation • UK & USA delivery • Partnership with Defantra Ltd, UK
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;