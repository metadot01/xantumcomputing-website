import { Link } from "react-router-dom";
import { Linkedin, Youtube, Mail, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about", isRoute: true },
      { name: "Solutions", href: "/solutions", isRoute: true },
      { name: "Careers", href: "/contact", isRoute: true },
      { name: "Contact", href: "/contact", isRoute: true },
    ],
    Platform: [
      { name: "VeriAgent Platform", href: "https://www.defantra.com/", external: true },
      { name: "CYXOR Learning", href: "https://www.cyxorlearning.co.uk", external: true },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden" id="contact">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-14 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Xantum<span className="text-secondary">™</span> Computing
              </h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-xs">
                Enterprise AI & Blockchain solutions powering the next generation of business innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a href="mailto:contact@xantumcomputing.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">contact@xantumcomputing.com</span>
                </a>
                <a href="tel:+919741263932" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91-9741263932</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.name}
                          {link.external && <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
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
        <div className="border-t border-slate-800/60 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2025 <span className="text-slate-400">Xantum™ Computing</span>
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse" />
                All systems operational
              </span>
              <span className="text-slate-700">•</span>
              <span>Partner: <span className="text-slate-400">Defantra Ltd, UK</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;