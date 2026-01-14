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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-background border border-border rounded-xl shadow-lg p-4 md:p-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">We value your privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                    <Link to="/cookie-policy" className="text-primary hover:underline">
                      Cookie Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    for more information.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleAcceptAll} className="flex-1 sm:flex-none">
                  Accept All
                </Button>
                <Button 
                  onClick={handleAcceptEssential} 
                  variant="outline" 
                  className="flex-1 sm:flex-none"
                >
                  Essential Only
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
