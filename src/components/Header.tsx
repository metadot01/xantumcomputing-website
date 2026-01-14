import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowUpRight, Brain, Server, Link as LinkIcon, Database, GraduationCap, Building2, Briefcase, Mail } from "lucide-react";
import xantumLogo from "@/assets/xantum-logo.png";
import cyxorLogoIcon from "@/assets/cyxor-logo-icon.jpg";
import defantraLogoIcon from "@/assets/defantra-logo-icon.jpg";
import ContactSalesModal from "./ContactSalesModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const companyLinks = [
    { name: "About", href: "/about", icon: Building2, description: "Learn about our mission" },
    { name: "Careers", href: "/contact", icon: Briefcase, description: "Join our growing team" },
    { name: "Contact", href: "/contact", icon: Mail, description: "Get in touch with us" },
  ];

  const platformLinks = [
    { name: "CYXOR Learning", href: "https://www.cyxorlearning.co.uk", description: "Digital & Compliance Courses", logo: cyxorLogoIcon },
    { name: "VeriAgent Platform", href: "https://www.defantra.com", description: "AI-powered GRC solutions", logo: defantraLogoIcon },
  ];

  const solutionLinks = [
    { name: "AI & ML", href: "/solutions", icon: Brain, description: "Intelligent automation & analytics" },
    { name: "Infrastructure", href: "/solutions", icon: Server, description: "Scalable cloud solutions" },
    { name: "Blockchain", href: "/solutions", icon: LinkIcon, description: "Distributed ledger technology" },
    { name: "Data Engineering", href: "/solutions", icon: Database, description: "Data pipelines & warehousing" },
    { name: "Learning & Development", href: "/solutions", icon: GraduationCap, description: "Professional training programs" },
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm py-2 border-b border-border"
      >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary/10 rounded-lg p-1.5">
              <img 
                src={xantumLogo} 
                alt="Xantum Computing Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-primary leading-tight">
                Xantum<span className="text-secondary">™</span> Computing
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:block">
                AI & BLOCKCHAIN SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Platforms Dropdown - First */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPlatformsOpen(true)}
              onMouseLeave={() => setIsPlatformsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Platforms
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPlatformsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Platforms Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200 z-50 ${
                isPlatformsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}>
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-white border border-border flex-shrink-0">
                      <img src={platform.logo} alt={platform.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{platform.name}</p>
                      <p className="text-xs text-muted-foreground">{platform.description}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown - Second */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Solutions Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200 z-50 ${
                isSolutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}>
                {solutionLinks.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{solution.name}</p>
                      <p className="text-xs text-muted-foreground">{solution.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCompanyOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Company Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200 z-50 ${
                isCompanyOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}>
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <ContactSalesModal>
              <Button size="sm">
                Contact Sales
              </Button>
            </ContactSalesModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-0" : ""
              }`} />
              <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <nav className="py-4 flex flex-col gap-1 border-t border-border bg-white rounded-xl">
            {/* Mobile Platforms Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Platforms</p>
              <div className="space-y-1">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-border flex-shrink-0">
                      <img src={platform.logo} alt={platform.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{platform.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Solutions Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solutions</p>
              <div className="space-y-1">
                {solutionLinks.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{solution.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Company Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Company</p>
              <div className="space-y-1">
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border px-4">
              <ContactSalesModal>
                <Button className="w-full h-12" onClick={() => setIsMenuOpen(false)}>
                  Contact Sales
                </Button>
              </ContactSalesModal>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;