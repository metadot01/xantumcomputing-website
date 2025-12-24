const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="hsl(var(--primary))" />
                <path d="M8 8V20L16 24V12L8 8Z" fill="hsl(var(--primary))" opacity="0.7" />
                <path d="M24 8V20L16 24V12L24 8Z" fill="hsl(var(--primary))" opacity="0.5" />
              </svg>
            </div>
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
