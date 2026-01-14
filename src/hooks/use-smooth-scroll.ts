import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string, offset: number = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const scrollToTop = useCallback((behavior: ScrollBehavior = "smooth") => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, []);

  const handleNavClick = useCallback(
    (href: string, sectionId?: string) => {
      // If it's an external link, let it handle naturally
      if (href.startsWith("http")) {
        window.open(href, "_blank", "noopener,noreferrer");
        return;
      }

      // If we're on the same page and there's a section to scroll to
      if (sectionId && location.pathname === "/") {
        scrollToSection(sectionId);
        return;
      }

      // If navigating to home page with a section
      if (href === "/" && sectionId) {
        if (location.pathname === "/") {
          scrollToSection(sectionId);
        } else {
          navigate("/");
          // Wait for navigation then scroll
          setTimeout(() => {
            scrollToSection(sectionId);
          }, 100);
        }
        return;
      }

      // Regular navigation
      navigate(href);
      // Scroll to top on page change
      setTimeout(() => {
        scrollToTop();
      }, 50);
    },
    [location.pathname, navigate, scrollToSection, scrollToTop]
  );

  return {
    scrollToSection,
    scrollToTop,
    handleNavClick,
  };
};

// Utility function for scroll to element with offset
export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
