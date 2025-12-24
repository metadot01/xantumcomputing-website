import xantumLogo from "@/assets/xantum-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={xantumLogo} 
              alt="Xantum Computing Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="text-sm font-semibold text-foreground">
              Xantum™ Computing
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Xantum Computing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;