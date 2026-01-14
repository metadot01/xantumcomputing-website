import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import xantumLogo from "@/assets/xantum-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "VeriAgent Platform", href: "#veriagent" },
    { label: "CYXOR Learning", href: "#cyxor" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-2 border-b border-border" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name */}
          <a href="#" className="flex items-center gap-3 group">
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
                AI/ML & Blockchain Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
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
          isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <nav className="py-4 flex flex-col gap-1 border-t border-border bg-background/95 backdrop-blur-md rounded-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
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
  );
};

export default Header;