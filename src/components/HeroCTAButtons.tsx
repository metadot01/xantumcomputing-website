import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

const HeroCTAButtons = memo(() => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12">
    <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="group/btn">
      <Button variant="hero" size="xl" className="w-full sm:w-auto relative overflow-hidden transition-all duration-300 group-hover/btn:shadow-2xl group-hover/btn:shadow-secondary/30">
        <span className="relative z-10 flex items-center gap-2">
          Explore VeriAgent Platform
          <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-out" />
      </Button>
    </a>
    <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="group/btn2">
      <Button variant="cyxor" size="xl" className="w-full sm:w-auto relative overflow-hidden transition-all duration-300 group-hover/btn2:shadow-2xl group-hover/btn2:shadow-cyxor/30">
        <span className="relative z-10 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Browse Courses
          <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover/btn2:translate-x-1 group-hover/btn2:scale-110" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn2:translate-x-[100%] transition-transform duration-700 ease-out" />
      </Button>
    </a>
  </div>
));

HeroCTAButtons.displayName = "HeroCTAButtons";

export default HeroCTAButtons;
