import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PartnershipSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Strategic Partnership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Partnering with Defantra UK Ltd
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Together, we deliver AI-enhanced trade compliance solutions, intelligent automation for customs declarations, and integrated digital ecosystems connecting trade, compliance, and analytics.
          </p>
          <Button variant="hero" size="lg" className="group">
            Learn About Our Partnership
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
