import { Linkedin, GraduationCap, Briefcase, Scale, Users, Award } from "lucide-react";
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
      badge: "bg-secondary/10 text-secondary",
      icon: "text-secondary",
      linkedin: "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
    },
    cyxor: {
      badge: "bg-cyxor/10 text-cyxor",
      icon: "text-cyxor",
      linkedin: "bg-cyxor/10 text-cyxor hover:bg-cyxor hover:text-white"
    }
  };

  const colors = accentClasses[accentColor];

  return (
    <article className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl">
      {/* Decorative gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor === "secondary" ? "from-secondary to-emerald" : "from-cyxor to-orange-400"}`} />
      
      <div className="p-6 md:p-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="relative">
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${accentColor === "secondary" ? "from-secondary/20 to-emerald/20" : "from-cyxor/20 to-orange-400/20"} blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <img 
                src={photo} 
                alt={name} 
                className="relative w-44 h-44 lg:w-52 lg:h-52 rounded-2xl object-cover shadow-xl ring-4 ring-background"
              />
            </div>
            
            {linkedinUrl && (
              <a 
                href={linkedinUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${colors.linkedin}`}
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect</span>
              </a>
            )}
          </div>
          
          {/* Profile Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                {name}
              </h2>
              <p className={`text-lg font-semibold ${colors.icon}`}>
                {title}
              </p>
              {subtitle && (
                <p className="text-sm text-muted-foreground mt-1">
                  {subtitle}
                </p>
              )}
            </div>
            
            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base text-left">
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Credentials Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg ${colors.badge} flex items-center justify-center flex-shrink-0`}>
                    <credential.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground leading-tight">{credential.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{credential.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expertise Tags */}
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 text-left">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2 justify-start">
                {expertise.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full ${colors.badge} transition-transform hover:scale-105`}
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
