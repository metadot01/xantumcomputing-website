import { Linkedin, Twitter, Github, Youtube, MapPin, ArrowUpRight, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import cyxorLogo from "@/assets/cyxor-learning-logo.jpg";
import defantraLogo from "@/assets/defantra-logo.jpg";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Partnership with Defantra Ltd", href: "#veriagent" },
      { name: "Careers", href: "#", badge: "Hiring" },
      { name: "Contact", href: "#contact" },
    ],
    Solutions: [
      { name: "VeriAgent Platform", href: "https://www.defantra.com/", external: true },
      { name: "Technology Consulting", href: "#veriagent" },
      { name: "AI/ML Development", href: "#technology" },
      { name: "Blockchain Services", href: "#technology" },
    ],
    "CYXOR Learning": [
      { name: "Browse Courses", href: "https://www.cyxorlearning.co.uk", external: true },
      { name: "For Organizations", href: "https://www.cyxorlearning.co.uk", external: true },
      { name: "Verify Credentials", href: "https://www.cyxorlearning.co.uk", external: true },
      { name: "AI Literacy", href: "https://www.cyxorlearning.co.uk", external: true },
      { name: "Python for AI/ML", href: "https://www.cyxorlearning.co.uk", external: true },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Support", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden surface-dark" id="contact">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyxor/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3">
                Xantum<sup>™</sup> Computing
              </h3>
              <p className="text-sm text-surface-dark-foreground/60 mb-6 leading-relaxed">
                Technology solutions and professional development in partnership with Defantra Ltd, UK.
              </p>

              {/* Locations */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-surface-dark-foreground">USA Office</p>
                    <p className="text-xs text-surface-dark-foreground/50">United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-surface-dark-foreground">UK Office</p>
                    <p className="text-xs text-surface-dark-foreground/50">United Kingdom</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-surface-dark-foreground/50 hover:text-secondary hover:bg-secondary/10 hover:border-secondary/30 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-surface-dark-foreground text-sm mb-5">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-2 text-sm text-surface-dark-foreground/60 hover:text-secondary transition-colors"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-medium bg-cyxor/20 text-cyxor rounded-full">
                            {link.badge}
                          </span>
                        )}
                        {link.external && <ArrowUpRight className="w-3 h-3" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Highlights */}
        <div className="container mx-auto px-4 lg:px-8 pb-8">
          <div className="grid md:grid-cols-2 gap-4">
            {/* CYXOR */}
            <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl overflow-hidden p-5 bg-gradient-to-r from-cyxor/20 to-cyxor/10 border border-cyxor/20 hover:border-cyxor/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-lg">
                  <img src={cyxorLogo} alt="CYXOR Learning" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-surface-dark-foreground">CYXOR Learning</p>
                  <p className="text-sm text-surface-dark-foreground/60">Browse technology & compliance courses</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-cyxor group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* Defantra */}
            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl overflow-hidden p-5 bg-gradient-to-r from-defantra/20 to-defantra/10 border border-defantra/20 hover:border-defantra/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-lg">
                  <img src={defantraLogo} alt="Defantra Ltd" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-surface-dark-foreground">Defantra Ltd, UK</p>
                  <p className="text-sm text-surface-dark-foreground/60">Explore VeriAgent Platform</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-defantra group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-surface-dark-foreground/40 text-center md:text-left">
                © 2024 Xantum™ Computing | Partnership with Defantra Ltd, UK
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((link) => (
                  <a key={link} href="#" className="text-xs text-surface-dark-foreground/40 hover:text-secondary transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;