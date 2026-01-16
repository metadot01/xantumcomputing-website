import { Linkedin, Quote } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Credential {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

interface LeadershipCardProps {
  name: string;
  title: string;
  subtitle?: string;
  photo: string;
  linkedinUrl?: string;
  bio: React.ReactNode[];
  expertise: string[];
  credentials: Credential[];
  accentColor?: "secondary" | "cyxor";
}

const LeadershipCard = ({
  name,
  title,
  subtitle,
  photo,
  linkedinUrl,
  bio,
  expertise,
  credentials,
  accentColor = "secondary"
}: LeadershipCardProps) => {
  const accentClasses = {
    secondary: {
      badge: "bg-secondary/10 text-secondary border-secondary/20",
      icon: "text-secondary",
      linkedin: "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20",
      gradient: "from-secondary via-secondary/80 to-accent",
      glow: "bg-secondary/30",
      credBg: "bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/10"
    },
    cyxor: {
      badge: "bg-cyxor/10 text-cyxor border-cyxor/20",
      icon: "text-cyxor",
      linkedin: "bg-cyxor text-white hover:bg-cyxor/90 shadow-lg shadow-cyxor/20",
      gradient: "from-cyxor via-cyxor/80 to-orange-400",
      glow: "bg-cyxor/30",
      credBg: "bg-gradient-to-br from-cyxor/5 to-orange-400/5 border-cyxor/10"
    }
  };

  const colors = accentClasses[accentColor];

  return (
    <article className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colors.gradient}`} />
      
      {/* Decorative corner glow */}
      <div className={`absolute -top-32 -right-32 w-64 h-64 ${colors.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`} />
      
      <div className="relative p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Profile Image Section - Enhanced */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative">
              {/* Animated ring on hover */}
              <div className={`absolute -inset-3 rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />
              <div className="absolute -inset-1 rounded-2xl bg-background" />
              <img 
                src={photo} 
                alt={name} 
                className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover shadow-2xl"
              />
              
              {/* Status indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent border-4 border-background flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              </div>
            </div>
            
            {linkedinUrl && (
              <a 
                href={linkedinUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${colors.linkedin}`}
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            )}
          </div>
          
          {/* Profile Content - Enhanced */}
          <div className="flex-1 text-center lg:text-left">
            {/* Header with better hierarchy */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 tracking-tight">
                {name}
              </h2>
              <p className={`text-xl font-semibold ${colors.icon} mb-1`}>
                {title}
              </p>
              {subtitle && (
                <p className="text-sm text-muted-foreground font-medium">
                  {subtitle}
                </p>
              )}
            </div>
            
            {/* Bio with quote styling */}
            <div className="relative mb-10">
              <Quote className={`absolute -top-2 -left-2 w-8 h-8 ${colors.icon} opacity-20`} />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base text-left pl-4 border-l-2 border-border">
                {bio.map((paragraph, index) => (
                  <p key={index} className="first:text-foreground first:font-medium">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Credentials Grid - Enhanced with icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-5 rounded-2xl border ${colors.credBg} hover:shadow-lg transition-all duration-300 group/cred`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover/cred:scale-110 transition-transform`}>
                    <credential.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground leading-tight">{credential.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{credential.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise Tags - Enhanced */}
            <div className="pt-6 border-t border-border/50">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 text-left flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2 justify-start">
                {expertise.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-4 py-2 text-sm font-medium rounded-full border ${colors.badge} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LeadershipCard;
