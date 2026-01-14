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
    Products: [
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
    <footer className="bg-slate-900" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Xantum<span className="text-secondary">™</span> Computing
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-sm">
                Enterprise AI & Blockchain solutions. Strategic partner of Defantra Ltd, UK.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:contact@xantumcomputing.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  contact@xantumcomputing.com
                </a>
                <a href="tel:+919741263932" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  +91-9741263932
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {link.name}
                          {link.external && <ArrowUpRight className="w-3 h-3" />}
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
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © 2025 Xantum™ Computing. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>India</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Partner: Defantra Ltd, UK</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;