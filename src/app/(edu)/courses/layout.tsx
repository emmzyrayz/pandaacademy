'use client'
import { HmNavbar } from "@/components/navbar/page";
import {useEffect, useState, useRef} from "react";
import User1 from "@/assets/img/people/blog/a.jpg";
import Image from "next/image";
import {
  FaMagnifyingGlass,
  FaRegBell,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isVisible = useScrollBehavior(3000);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const autoHideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle auto-hide with hover detection
  const manageRightPanelVisibility = () => {
    // Clear any existing timer
    if (autoHideTimerRef.current) {
      clearTimeout(autoHideTimerRef.current);
      autoHideTimerRef.current = null;
    }

    // Only set a new timer if not hovering and panel is visible on small screens
    if (!isHovering && isExpanded && window.innerWidth < 1280) {
      autoHideTimerRef.current = setTimeout(() => {
        setIsExpanded(false);
      }, 4000); // 4 seconds timeout
    }
  };

  // Set up mouse enter/leave handlers
  const handleMouseEnter = () => {
    setIsHovering(true);
    // Clear any existing timer when mouse enters
    if (autoHideTimerRef.current) {
      clearTimeout(autoHideTimerRef.current);
      autoHideTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Start the timer when mouse leaves
    manageRightPanelVisibility();
  };

  // Auto-hide timer for right panel on smaller screens
  useEffect(() => {
    // Start the timer when panel becomes visible
    if (isExpanded) {
      manageRightPanelVisibility();
    }

    // Cleanup function
    return () => {
      if (autoHideTimerRef.current) {
        clearTimeout(autoHideTimerRef.current);
      }
    };
  }, [isExpanded, isHovering]);

  // Reset timer on window resize
  useEffect(() => {
    const handleResize = () => {
      manageRightPanelVisibility();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded, isHovering]);

  // Handle navbar state changes
  const handleNavbarToggle = () => {
    setIsExpanded(isExpanded);
  };

  return (
    <div className="course-layout-section flex flex-col items-start min-h-screen min-w-full px-[2%] py-[1%] relative">
      {/* Navbar Mobile btn */}
      {/* <div className="icon flex flex-row absolute p-2 items-center bg-red-500 justify-center rounded-full cursor-pointer z-50" onClick={handleNavbarToggle}>
        <FaChevronRight />
      </div> */}

      <div
        ref={rightPanelRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`hidden transition-all duration-300 ease-in-out top-0 left-0 h-screen z-50 fixed
          ${isVisible ? "translate-x-0" : "-translate-x-full hidden"} 
          ${isExpanded ? "translate-x-0" : "-translate-x-full"}`}
      >
        <HmNavbar
          className="h-[99vh]"
          onExpandChange={handleNavbarToggle}
          forceCollapse={!isVisible}
        />
      </div>
      <main className="flex flex-col items-center justify-start w-full h-full gap-3">
        <div className="flex flex-row flex-nowrap h-[55px] w-full  items-center justify-between">
          <div className="search-con flex flex-row items-center justify-center relative ml-2 w-[40%] h-[70%] rounded-md cursor-pointer shadow-md hover:shadow-xl border outline-none">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search ..."
              className="flex w-full h-full rounded-md pl-[30px] border-none outline-none border-black/40 focus:border hover:border"
            />
            <div className="icon absolute left-[10px] text-gray-400">
              <FaMagnifyingGlass />
            </div>
          </div>

          <div className="user-con flex flex-row items-center justify-center gap-5 relative h-full p-2">
            <div className="notify-icon bg-white/80 p-2 rounded-lg shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all delay-300 ease-in-out">
              <FaRegBell />
            </div>

            <div className="avatar w-[40px] h-[40px]  ">
              <Image
                src={User1}
                alt=""
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-[6px]"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full h-full items-center justify-center">{children}</div>
      </main>
    </div>
  );
}