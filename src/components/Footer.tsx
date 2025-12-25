import { Linkedin, Twitter, Github, Youtube, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Xantum™ Computing", href: "#" },
      { name: "Partnership with Defantra UK Ltd", href: "#" },
      { name: "Our Team & Expertise", href: "#" },
      { name: "Careers", href: "#", badge: "Hiring" },
      { name: "Press & Media", href: "#" },
    ],
    Solutions: [
      { name: "Platform Engineering", href: "#" },
      { name: "Custom Software Development", href: "#" },
      { name: "Language Model Optimization", href: "#" },
      { name: "Blockchain Development", href: "#" },
      { name: "AI & Blockchain Consulting", href: "#" },
    ],
    "CYXOR Learning": [
      { name: "Browse Courses", href: "#" },
      { name: "Learning Paths", href: "#" },
      { name: "Verify Credentials", href: "#" },
      { name: "For Organizations", href: "#" },
      { name: "Platform Features", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Blog & Insights", href: "#" },
      { name: "Support Portal", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden" id="contact">
      {/* Decorative Background */}
      <div className="absolute inset-0 surface-dark" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-border/10">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-surface-dark-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-surface-dark-foreground/60">
                  Get the latest insights on AI, blockchain, and platform engineering.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-80 h-12 pl-12 pr-4 rounded-xl bg-background/10 border border-border/20 text-surface-dark-foreground placeholder:text-surface-dark-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <Button variant="hero" size="lg" className="h-12">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <h3 className="font-display font-bold text-2xl text-surface-dark-foreground mb-3">
                Xantum<span className="text-cta">™</span> Computing
              </h3>
              <p className="text-sm text-surface-dark-foreground/60 mb-6 leading-relaxed">
                Strategic Partnership with Defantra UK Ltd
              </p>

              {/* Locations */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cta mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-surface-dark-foreground">USA Office</p>
                    <p className="text-xs text-surface-dark-foreground/50">United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cta mt-0.5 flex-shrink-0" />
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
                    className="w-10 h-10 rounded-xl bg-background/5 border border-border/10 flex items-center justify-center text-surface-dark-foreground/50 hover:text-cta hover:bg-cta/10 hover:border-cta/30 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-surface-dark-foreground text-sm mb-5">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-surface-dark-foreground/60 hover:text-cta transition-colors"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-medium bg-cta/20 text-cta rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CYXOR Learning Highlight */}
        <div className="container mx-auto px-4 lg:px-8 pb-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cta/20 to-secondary/20" />
            <div className="relative px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cta to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CX</span>
                </div>
                <div>
                  <p className="font-semibold text-surface-dark-foreground">CYXOR Learning</p>
                  <p className="text-sm text-surface-dark-foreground/60">Blockchain-verified digital skills platform</p>
                </div>
              </div>
              <a
                href="#"
                className="group flex items-center gap-2 text-sm font-medium text-cta hover:text-cta/80 transition-colors"
              >
                Explore Platform
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/10">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-surface-dark-foreground/40 text-center md:text-left">
                © 2024 Xantum™ Computing | Strategic Partnership with Defantra UK Ltd
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs text-surface-dark-foreground/40 hover:text-cta transition-colors"
                  >
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
