import { Link } from "react-router-dom";
import { Linkedin, Youtube, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import cyxorLogo from "@/assets/cyxor-learning-logo.jpg";
import defantraLogo from "@/assets/defantra-logo.jpg";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about", isRoute: true },
      { name: "Careers", href: "/contact", isRoute: true },
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
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-900" id="contact">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Xantum<span className="text-secondary">™</span> Computing
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-xs">
                Enterprise AI & Blockchain solutions powering the next generation of business innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:contact@xantumcomputing.com" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">contact@xantumcomputing.com</span>
                </a>
                <a href="tel:+919741263932" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91-9741263932</span>
                </a>
              </div>

              {/* Locations */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2 text-slate-500 text-xs">
                  <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Madhugiri, Karnataka, India</span>
                </div>
                <div className="flex items-start gap-2 text-slate-500 text-xs">
                  <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">{title}</h4>
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

        {/* Partner Highlights */}
        <div className="container mx-auto px-4 lg:px-8 pb-10">
          <div className="grid md:grid-cols-2 gap-4">
            {/* CYXOR */}
            <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl overflow-hidden p-5 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-lg flex-shrink-0">
                  <img src={cyxorLogo} alt="CYXOR Learning" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">CYXOR Learning</p>
                  <p className="text-sm text-slate-400">Digital & Compliance Courses</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* Defantra */}
            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl overflow-hidden p-5 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-lg flex-shrink-0">
                  <img src={defantraLogo} alt="Defantra Ltd" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">Defantra Ltd, UK</p>
                  <p className="text-sm text-slate-400">AI Powered GRC Platform</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/60">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                © 2025 <span className="text-slate-400">Xantum™ Computing</span>. All rights reserved.
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
      </div>
    </footer>
  );
};

export default Footer;