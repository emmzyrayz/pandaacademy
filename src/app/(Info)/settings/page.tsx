"use client";
import {HmNavbar} from "@/components/navbar/page";
import {useEffect, useState} from "react";
const useScrollBehavior = (delay = 3000) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Reset the timeout
      clearTimeout(timeoutId);

      // Auto-hide after delay if we're not at the top of the page
      if (currentScrollY > 0) {
        timeoutId = setTimeout(() => {
          setVisible(false);
        }, delay);
      }
    };

    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY, delay]);

  return visible;
};


export default function Settings() {
  const [isExpanded, setIsExpanded] = useState(false);
  const isVisible = useScrollBehavior(3000);

  // Handle navbar state changes
  const handleNavbarToggle = (expanded: boolean) => {
    setIsExpanded(expanded);
  };

  return (
    <div className="settings-section">
      <div
        className={`transition-all duration-300 ease-in-out top-0 left-0 h-screen z-50 fixed
          ${isVisible ? "translate-x-0" : "-translate-x-full hidden"}`}
      >
        <HmNavbar
          className="h-[99vh]"
          onExpandChange={handleNavbarToggle}
          forceCollapse={!isVisible}
        />
      </div>
      This is settings page
    </div>
  );
}
