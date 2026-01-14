import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleClose = () => {
    // Treat closing as accepting essential only
    handleAcceptEssential();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm animate-fade-in">
      <div className="hero-gradient border border-white/10 rounded-lg shadow-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <Cookie className="w-4 h-4 text-white/80 flex-shrink-0" />
          <p className="text-xs text-white/80">
            We use cookies for a better experience.{" "}
            <Link to="/cookie-policy" className="text-white hover:underline font-medium">
              Learn more
            </Link>
          </p>
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white transition-colors ml-auto"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleAcceptAll} 
            size="sm" 
            className="flex-1 h-8 text-xs bg-white text-primary hover:bg-white/90 font-semibold"
          >
            Accept
          </Button>
          <Button 
            onClick={handleAcceptEssential} 
            variant="outline" 
            size="sm"
            className="flex-1 h-8 text-xs border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
