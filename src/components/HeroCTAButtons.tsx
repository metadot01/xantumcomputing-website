import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Rocket } from "lucide-react";

const ButtonShimmer = () => (
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
);

const HeroCTAButtons = memo(() => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12">
    <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer">
      <Button variant="hero" size="xl" className="w-full sm:w-auto">
        <ButtonShimmer />
        <Rocket className="w-5 h-5" />
        Explore VeriAgent Platform
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </a>
    <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer">
      <Button variant="cyxor" size="xl" className="w-full sm:w-auto">
        <ButtonShimmer />
        <GraduationCap className="w-5 h-5" />
        Browse Courses
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </a>
  </div>
));

HeroCTAButtons.displayName = "HeroCTAButtons";

export default HeroCTAButtons;
