import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowUpRight, Brain, Server, Link as LinkIcon, Database, GraduationCap, Building2, Briefcase, Mail, Sparkles } from "lucide-react";
import xantumLogo from "@/assets/xantum-logo.png";
import cyxorLogoIcon from "@/assets/cyxor-logo-icon.jpg";
import defantraLogoIcon from "@/assets/defantra-logo-icon.jpg";
import ContactSalesModal from "./ContactSalesModal";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToSection, scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const handleSectionLink = (sectionId: string) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 150);
    }
    setIsMenuOpen(false);
  };

  const companyLinks = [
    { name: "About", href: "/about", icon: Building2, description: "Learn about our mission" },
    { name: "Careers", href: "/careers", icon: Briefcase, description: "Join our growing team" },
    { name: "Contact", href: "/contact", icon: Mail, description: "Get in touch with us" },
  ];

  const platformLinks = [
    { name: "CYXOR Learning", href: "https://www.cyxorlearning.co.uk", description: "Digital & Compliance Courses", logo: cyxorLogoIcon, sectionId: "cyxor" },
    { name: "VeriAgent Platform", href: "https://www.defantra.com", description: "AI-powered GRC solutions", logo: defantraLogoIcon, sectionId: "veriagent" },
  ];

  const solutionLinks = [
    { name: "AI & ML", href: "/solutions", icon: Brain, description: "Intelligent automation & analytics" },
    { name: "Infrastructure", href: "/solutions", icon: Server, description: "Scalable cloud solutions" },
    { name: "Blockchain", href: "/solutions", icon: LinkIcon, description: "Distributed ledger technology" },
    { name: "Data Engineering", href: "/solutions", icon: Database, description: "Data pipelines & warehousing" },
    { name: "Learning & Development", href: "/solutions", icon: GraduationCap, description: "Professional training programs" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white shadow-lg shadow-primary/5 py-2 border-b border-border/50" 
            : "bg-white py-2 md:py-3 border-b border-border/30"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Company Name - Mobile Optimized */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 group" onClick={() => setIsMenuOpen(false)}>
              <div className={`relative rounded-lg md:rounded-xl p-1.5 md:p-2 transition-all duration-300 ${
                isScrolled ? "bg-primary/10" : "bg-gradient-to-br from-primary/15 to-secondary/15"
              }`}>
                <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={xantumLogo} 
                  alt="Xantum Computing Logo" 
                  className="relative w-7 h-7 md:w-8 md:h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base md:text-xl text-primary leading-tight">
                  Xantum<span className="text-secondary">™</span> Computing
                </span>
                <span className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium hidden sm:block">
                  AI & BLOCKCHAIN SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* Platforms Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsPlatformsOpen(true)}
                onMouseLeave={() => setIsPlatformsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isPlatformsOpen 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  Platforms
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPlatformsOpen ? "rotate-180" : ""}`} />
                </button>
                
                {/* Platforms Dropdown Menu - Enhanced */}
                <div className={`absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 overflow-hidden transition-all duration-300 z-50 ${
                  isPlatformsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
                }`}>
                  <div className="p-2">
                    {platformLinks.map((platform, index) => (
                      <div key={platform.name}>
                        <a
                          href={platform.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border-2 border-border/50 flex-shrink-0 shadow-sm group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300">
                            <img src={platform.logo} alt={platform.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{platform.name}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{platform.description}</p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </a>
                        <button
                          onClick={() => handleSectionLink(platform.sectionId)}
                          className="text-xs text-muted-foreground hover:text-primary px-3 pb-2 ml-16 transition-colors flex items-center gap-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-current" />
                          View on this page
                        </button>
                        {index < platformLinks.length - 1 && <div className="h-px bg-border/50 mx-3 my-1" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isSolutionsOpen 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} />
                </button>
                
                {/* Solutions Dropdown Menu - Enhanced */}
                <div className={`absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 overflow-hidden transition-all duration-300 z-50 ${
                  isSolutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
                }`}>
                  <div className="p-2">
                    {solutionLinks.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        onClick={() => scrollToTop()}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-300 shadow-sm">
                          <solution.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{solution.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{solution.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* View All Solutions Link */}
                  <div className="border-t border-border/50 p-3 bg-muted/30">
                    <Link 
                      to="/solutions" 
                      onClick={() => scrollToTop()}
                      className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
                    >
                      <Sparkles className="w-4 h-4" />
                      View All Solutions
                    </Link>
                  </div>
                </div>
              </div>

              {/* Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCompanyOpen(true)}
                onMouseLeave={() => setIsCompanyOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isCompanyOpen 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  Company
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCompanyOpen ? "rotate-180" : ""}`} />
                </button>
                
                {/* Company Dropdown Menu - Enhanced */}
                <div className={`absolute top-full right-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 overflow-hidden transition-all duration-300 z-50 ${
                  isCompanyOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
                }`}>
                  <div className="p-2">
                    {companyLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => scrollToTop()}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-300 shadow-sm">
                          <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Desktop CTA - Enhanced */}
            <div className="hidden lg:flex items-center gap-3">
              <ContactSalesModal>
                <Button variant="hero" size="default" className="shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Contact Sales
                </Button>
              </ContactSalesModal>
            </div>

            {/* Mobile Menu Button - Larger Touch Target */}
            <button
              className="lg:hidden p-3 -mr-1 text-foreground hover:bg-primary/5 rounded-xl transition-all duration-300 active:scale-95 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 origin-center ${
                  isMenuOpen ? "rotate-45 translate-y-2 bg-primary" : ""
                }`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 scale-0 w-0" : "w-4"
                }`} />
                <span className={`block h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 origin-center ${
                  isMenuOpen ? "-rotate-45 -translate-y-2 bg-primary" : ""
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-[60px] left-0 right-0 max-h-[calc(100vh-70px)] overflow-y-auto bg-white border-b border-border shadow-2xl transition-all duration-300 ease-out ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="py-4 flex flex-col safe-area-inset-bottom">
            {/* Mobile Platforms Section */}
            <div className="px-5 py-3">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                Platforms
              </p>
              <div className="space-y-2">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 active:bg-primary/10 transition-all duration-200 touch-manipulation"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-white border-2 border-border/50 flex-shrink-0 shadow-sm">
                      <img src={platform.logo} alt={platform.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-base font-semibold text-foreground block">{platform.name}</span>
                      <p className="text-sm text-muted-foreground truncate">{platform.description}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px bg-border/50 mx-5 my-2" />

            {/* Mobile Solutions Section - Scrollable Horizontal */}
            <div className="px-5 py-3">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent" />
                Solutions
              </p>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
                {solutionLinks.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                    className="flex-shrink-0 flex flex-col items-center gap-3 p-4 w-24 rounded-2xl bg-muted/40 active:bg-primary/10 transition-all duration-200 touch-manipulation"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center leading-tight">{solution.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="h-px bg-border/50 mx-5 my-2" />

            {/* Mobile Company Section - Large Touch Targets */}
            <div className="px-5 py-3">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyxor to-orange-400" />
                Company
              </p>
              <div className="space-y-2">
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 active:bg-primary/10 transition-all duration-200 touch-manipulation"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-base font-semibold text-foreground">{item.name}</span>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <ChevronDown className="w-5 h-5 text-muted-foreground -rotate-90" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA - Sticky at Bottom */}
            <div className="mt-4 pt-4 border-t border-border/50 px-5 pb-4">
              <ContactSalesModal>
                <Button 
                  variant="hero" 
                  className="w-full h-14 text-base touch-manipulation" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </ContactSalesModal>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;