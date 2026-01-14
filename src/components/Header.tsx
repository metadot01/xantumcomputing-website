import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import xantumLogo from "@/assets/xantum-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "/about", isRoute: true },
    { label: "Solutions", href: "/solutions", isRoute: true },
    { label: "Contact", href: "/contact", isRoute: true },
  ];

  const platformLinks = [
    { name: "CYXOR Learning", href: "https://www.cyxorlearning.co.uk", description: "Professional development courses" },
    { name: "VeriAgent Platform", href: "https://www.defantra.com", description: "AI-powered GRC solutions" },
  ];

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setIsMenuOpen(false);
    if (!isRoute && href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.href 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Platforms Dropdown */}
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
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200 ${
                isPlatformsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}>
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 hover:bg-primary/5 transition-colors group"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{platform.name}</p>
                      <p className="text-xs text-muted-foreground">{platform.description}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="heroOutline" 
                size="sm" 
              >
                Explore VeriAgent
              </Button>
            </a>
            <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="cyxor"
                size="default"
              >
                Browse Courses
              </Button>
            </a>
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
          isMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <nav className="py-4 flex flex-col gap-1 border-t border-border bg-white rounded-xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                  location.pathname === item.href 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
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
                    className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">{platform.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border px-4">
              <a href="https://www.defantra.com/" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="heroOutline" 
                  className="w-full h-12"
                >
                  Explore VeriAgent
                </Button>
              </a>
              <a href="https://www.cyxorlearning.co.uk" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="cyxor"
                  className="w-full h-12"
                >
                  Browse Courses
                </Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;