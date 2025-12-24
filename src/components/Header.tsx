import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import xantumLogo from "@/assets/xantum-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Solutions", href: "#solutions" },
    { label: "Technology", href: "#technology" },
    { label: "About", href: "#about" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={xantumLogo} 
              alt="Xantum Computing Logo" 
              className={`object-contain flex-shrink-0 transition-transform duration-300 ${
                isScrolled ? "w-8 h-8" : "w-10 h-10"
              } group-hover:scale-105`}
            />
            <span className={`font-display font-bold transition-all duration-300 ${
              isScrolled 
                ? "text-lg text-foreground" 
                : "text-xl text-foreground"
            }`}>
              Xantum<span className="text-primary">™</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4/5 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Talk to Sales
            </Button>
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? "top-3 rotate-45" : "top-1"
              }`} />
              <span className={`absolute left-0 top-3 block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`} />
              <span className={`absolute left-0 block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                isMenuOpen ? "top-3 -rotate-45" : "top-5"
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-350 ease-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <nav className="pt-6 pb-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-4 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
              <Button variant="outline" className="w-full h-12">
                Talk to Sales
              </Button>
              <Button variant="hero" className="w-full h-12">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
