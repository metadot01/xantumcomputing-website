import { LucideIcon } from "lucide-react";

interface CompanyHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const CompanyHighlight = ({ icon: Icon, title, description, index = 0 }: CompanyHighlightProps) => {
  return (
    <div 
      className="group relative p-6 bg-background rounded-2xl border border-border hover:border-secondary/40 hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-secondary/20 transition-all duration-300">
          <Icon className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="font-semibold text-foreground mb-2 text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default CompanyHighlight;
