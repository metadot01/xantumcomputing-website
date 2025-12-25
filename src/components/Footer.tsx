import { Linkedin, Twitter, Github, Youtube } from "lucide-react";
import xantumLogo from "@/assets/xantum-logo.png";

const Footer = () => {
  const footerLinks = {
    Company: ["About Xantum™ Computing", "Partnership with Defantra UK Ltd", "Our Team & Expertise", "CYXOR Learning Platform", "Careers", "Press & Media"],
    Solutions: ["Platform Engineering", "Custom Software Development", "Language Model Optimization", "LLM Development", "Blockchain Development", "AI & Blockchain Consulting"],
    "CYXOR Learning": ["Browse Courses", "Learning Paths", "Verify Credentials", "For Organizations", "Instructor Portal"],
    Industries: ["Financial Services", "Healthcare & Life Sciences", "E-Commerce & Retail", "Manufacturing", "Education & Training"],
  };

  return (
    <footer className="py-16 md:py-20 surface-dark" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={xantumLogo} alt="Xantum Computing" className="w-8 h-8 object-contain" />
              <span className="font-display font-bold text-surface-dark-foreground">Xantum<span className="text-primary">™</span></span>
            </div>
            <p className="text-sm text-surface-dark-foreground/60 mb-4">Strategic Partnership with Defantra UK Ltd</p>
            <p className="text-xs text-surface-dark-foreground/50 mb-6">Delivering platform engineering, custom software, AI, and blockchain solutions to clients across USA & UK.</p>
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
        
        {/* CYXOR Callout */}
        <div className="border-t border-b border-border/10 py-8 mb-8 text-center">
          <p className="text-sm text-surface-dark-foreground/60">
            Creators of <span className="text-cta font-semibold">CYXOR Learning</span> — The blockchain-verified digital skills platform.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface-dark-foreground/50">
          <p>© 2024 Xantum™ Computing | Strategic Partnership with Defantra UK Ltd</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security", "Credential Verification"].map((link) => (
              <a key={link} href="#" className="hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
