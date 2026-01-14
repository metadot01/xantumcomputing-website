import { memo } from "react";
import { Shield, BookOpen, GraduationCap, LucideIcon } from "lucide-react";
import cyxorLogo from "@/assets/cyxor-learning-logo.jpg";
import defantraLogo from "@/assets/defantra-logo.jpg";

interface Tag {
  icon?: LucideIcon;
  text: string;
  color?: string;
}

interface FeatureCardData {
  id: string;
  href: string;
  logo: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  badge: { text: string; variant: "featured" | "partner" };
  description: string;
  tags: Tag[];
  borderColor: string;
  hoverTitleColor: string;
}

const featureCards: FeatureCardData[] = [
  {
    id: "cyxor",
    href: "https://www.cyxorlearning.co.uk",
    logo: cyxorLogo,
    logoAlt: "CYXOR Learning",
    title: "CYXOR Learning",
    subtitle: "Technology & Compliance Training",
    badge: { text: "FEATURED", variant: "featured" },
    description: "Digital skills platform offering verifiable credentials. Learn AI, Python, blockchain, and compliance from industry experts.",
    tags: [
      { icon: Shield, text: "Verifiable Credentials", color: "text-purple" },
      { icon: BookOpen, text: "Self-Paced", color: "text-cyxor" },
      { icon: GraduationCap, text: "UK Focused", color: "text-accent" },
    ],
    borderColor: "border-cyxor/30 hover:border-cyxor",
    hoverTitleColor: "group-hover:text-cyxor",
  },
  {
    id: "defantra",
    href: "https://www.defantra.com/",
    logo: defantraLogo,
    logoAlt: "Defantra Ltd",
    title: "VeriAgent Platform",
    subtitle: "Defantra Ltd, UK Partnership",
    badge: { text: "PARTNER", variant: "partner" },
    description: "Strategic technology and consulting partnership delivering AI/ML solutions, blockchain implementation, and RegTech expertise across UK and USA.",
    tags: [
      { text: "AI/ML Solutions" },
      { text: "Blockchain" },
      { text: "RegTech" },
    ],
    borderColor: "border-defantra/30 hover:border-defantra",
    hoverTitleColor: "group-hover:text-defantra",
  },
];

const FeatureCard = memo(({ card }: { card: FeatureCardData }) => (
  <a
    href={card.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group block bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border ${card.borderColor} hover:bg-white/15 hover:shadow-2xl transition-all duration-300`}
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
        <img
          src={card.logo}
          alt={card.logoAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className={`font-display font-bold text-xl md:text-2xl text-white ${card.hoverTitleColor} transition-colors`}>
          {card.title}
        </h3>
        <p className="text-sm text-white/70">{card.subtitle}</p>
      </div>
      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full ${
          card.badge.variant === "featured"
            ? "bg-cyxor text-white animate-pulse-glow"
            : "bg-defantra/20 text-defantra border border-defantra/30"
        }`}
      >
        {card.badge.text}
      </span>
    </div>
    <p className="text-white/80 text-sm md:text-base mb-4 leading-relaxed">
      {card.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {card.tags.map((tag) => {
        const TagIcon = tag.icon;
        return (
          <span
            key={tag.text}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white/10 rounded-lg text-white/90 border border-white/10"
          >
            {TagIcon && <TagIcon className={`w-3.5 h-3.5 ${tag.color || ''}`} />}
            {tag.text}
          </span>
        );
      })}
    </div>
  </a>
));

FeatureCard.displayName = "FeatureCard";

const HeroFeatureCards = memo(() => (
  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {featureCards.map((card) => (
      <FeatureCard key={card.id} card={card} />
    ))}
  </div>
));

HeroFeatureCards.displayName = "HeroFeatureCards";

export default HeroFeatureCards;
