import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Briefcase, Rocket, ExternalLink } from "lucide-react";

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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="group">
            <Button variant="heroDark" size="xl" className="w-full sm:w-auto relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Rocket className="w-5 h-5" />
              Explore VeriAgent Platform
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="group">
            <Button variant="cyxor" size="xl" className="w-full sm:w-auto relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <GraduationCap className="w-5 h-5" />
              Browse Courses
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
        
        <p className="text-sm text-white/60">
          Free consultation • UK & USA delivery • Partnership with Defantra Ltd, UK
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;