import { Linkedin, Twitter, Github, Youtube } from "lucide-react";
import xantumLogo from "@/assets/xantum-logo.png";

const Footer = () => {
  const footerLinks = {
    Company: ["About Xantum™", "Leadership Team", "Careers", "Press & Media", "Investors"],
    Solutions: ["Cloud Computing", "Edge Computing", "Hybrid Infrastructure", "Container Platform", "AI/ML Services"],
    Resources: ["Documentation", "API Reference", "Developer Portal", "Case Studies", "Blog"],
  };

  return (
    <footer className="py-16 md:py-20 surface-dark" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={xantumLogo} alt="Xantum Computing" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-surface-dark-foreground">Xantum<span className="text-primary">™</span></span>
            </div>
            <p className="text-sm text-surface-dark-foreground/60 mb-6">Next-generation computing solutions for enterprise innovation.</p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg border border-border/20 flex items-center justify-center text-surface-dark-foreground/50 hover:text-primary hover:border-primary/30 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-surface-dark-foreground uppercase text-xs tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}><a href="#" className="text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface-dark-foreground/50">
          <p>© 2025 Xantum™ Computing. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Security", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
