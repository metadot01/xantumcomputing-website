import { Link } from "react-router-dom";
import { Linkedin, Youtube, MapPin, Mail, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import ContactSalesModal from "./ContactSalesModal";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About", href: "/about", isRoute: true },
      { name: "Careers", href: "/careers", isRoute: true },
      { name: "Contact", href: "/contact", isRoute: true },
    ],
    Platform: [
      { name: "VeriAgent", href: "https://www.defantra.com/", external: true },
      { name: "CYXOR Learning", href: "https://www.cyxorlearning.co.uk", external: true },
    ],
    Solutions: [
      { name: "AI & ML", href: "/solutions", isRoute: true },
      { name: "Infrastructure", href: "/solutions", isRoute: true },
      { name: "Blockchain", href: "/solutions", isRoute: true },
      { name: "Data Engineering", href: "/solutions", isRoute: true },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy", isRoute: true },
      { name: "Terms of Service", href: "/terms-of-service", isRoute: true },
      { name: "Cookie Policy", href: "/cookie-policy", isRoute: true },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-slate-950 overflow-hidden" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />


      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Xantum<span className="text-secondary">™</span> Computing
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-xs">
                Enterprise AI & Blockchain solutions powering the next generation of business innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <a href="mailto:contact@xantumcomputing.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">contact@xantumcomputing.com</span>
                </a>
                <a href="tel:+919741263932" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91-9741263932</span>
                </a>
              </div>

              {/* Locations */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/30 text-slate-400 text-xs">
                  <MapPin className="w-3 h-3" />
                  Madhugiri, India
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/30 text-slate-400 text-xs">
                  <MapPin className="w-3 h-3" />
                  Bangalore, India
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white text-sm mb-5">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-sm text-slate-500 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="group inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors"
                        >
                          {link.name}
                          {link.external && <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-600">
                © 2025 Xantum™ Computing. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  All systems operational
                </span>
                <span className="hidden sm:inline text-slate-700">|</span>
                <span className="hidden sm:inline">Strategic Partner: Defantra Ltd, UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;