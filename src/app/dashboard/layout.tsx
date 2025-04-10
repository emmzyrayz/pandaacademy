'use client'

import { ShortMenu } from "@/components/menu-tab/page";
import { HmNavbar } from "@/components/navbar/page";
import {useEffect, useState, useRef} from "react";
import User1 from "@/assets/img/people/avatar/team1.png";
import './style.css'
import Image from "next/image";
import {
  FaRegBell,
  FaChevronLeft,
  FaChevronRight,
  FaRegClock,
} from "react-icons/fa6";
import {MdCalendarToday, MdArrowDropDown, MdArrowDropUp} from "react-icons/md";
import {LuBook, LuChartNoAxesColumn, LuUsers} from "react-icons/lu";
import {PiGraduationCap} from "react-icons/pi";
import { ProductivityChart } from "@/components/charts/ProductivityChart";


const useScrollBehavior = (delay = 3000): boolean => {
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

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

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY, delay]);

  return visible;
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [rightPanelVisible, setRightPanelVisible] = useState<boolean>(false);
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
    if (!isHovering && rightPanelVisible && window.innerWidth < 1280) {
      autoHideTimerRef.current = setTimeout(() => {
        setRightPanelVisible(false);
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
    if (rightPanelVisible) {
      manageRightPanelVisibility();
    }

    // Cleanup function
    return () => {
      if (autoHideTimerRef.current) {
        clearTimeout(autoHideTimerRef.current);
      }
    };
  }, [rightPanelVisible, isHovering]);

  // Reset timer on window resize
  useEffect(() => {
    const handleResize = () => {
      manageRightPanelVisibility();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [rightPanelVisible, isHovering]);

  // Handle navbar state changes
  const handleNavbarToggle = (expanded: boolean) => {
    setIsExpanded(expanded);
  };

  // Toggle right panel
  const toggleRightPanel = () => {
    setRightPanelVisible(!rightPanelVisible);
  };

  return (
    <main>
      <div className="flex flex-row items-start min-h-screen w-full">
        <div
          className={`transition-all duration-500 ease-in-out top-0 left-0 h-screen z-50 fixed
          ${isVisible ? "translate-x-0" : "-translate-x-full hidden"}`}
        >
          <HmNavbar
            className="h-[99vh]"
            onExpandChange={handleNavbarToggle}
            forceCollapse={!isVisible}
          />
        </div>

        <main
          className={`flex-1 w-full h-full transition-all duration-500 ease-in-out py-3
         `}
        >
          <div className="flex flex-row w-full h-full items-center justify-center gap-1 relative">
            <div
              className={`left-con  flex h-screen  scroll-smooth transition-all duration-300 ease-in-out
                ${
                  rightPanelVisible
                    ? "w-[65%] lg:w-full xl:w-[65%] scrollbar-hide overflow-auto"
                    : "w-full"
                }`}
            >
              {children}
            </div>

            {/* Right Panel Toggle Button - Visible on lg and below when panel is collapsed */}
            {!rightPanelVisible && (
              <button
                onClick={toggleRightPanel}
                className="fixed top-24 right-3 z-40 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center xl:hidden"
                aria-label="Open sidebar"
              >
                <FaChevronLeft />
              </button>
            )}

            <div
              ref={rightPanelRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`right-con fixed xl:relative flex flex-col xl:max-w-[500px] h-screen overflow-auto bg-white z-30 shadow-lg xl:shadow-none transition-all duration-300 ease-in-out items-center justify-start pl-3 pr-3 xl:pl-[20px] gap-4 pt-4
                ${
                  rightPanelVisible
                    ? "right-0 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]"
                    : "-right-full xl:right-0 xl:w-[35%] w-0 opacity-0 xl:opacity-100"
                }`}
            >
              {/* Close button for the panel - Only visible on screens below xl */}
              {rightPanelVisible && (
                <button
                  onClick={toggleRightPanel}
                  className="absolute top-4 left-3 z-40 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center xl:hidden"
                  aria-label="Close sidebar"
                >
                  <FaChevronRight />
                </button>
              )}

              <div className="top-info flex flex-row w-full p-1 items-center justify-between mt-10 xl:mt-0">
                <div className="date">
                  <div className="day font-semibold text-[16px]">Friday</div>
                  <div className="date font-light text-[12px] opacity-50">
                    April 5, 2024
                  </div>
                </div>
                <div className="user flex flex-row items-center justify-center gap-3">
                  <div className="noti flex items-center justify-center w-[38px] h-[38px] text-[18px] bg-black/10 rounded-[9px] cursor-pointer">
                    <FaRegBell />
                  </div>
                  <div className="user cursor-pointer">
                    <Image
                      src={User1}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-[9px] object-cover bg-black"
                    />
                  </div>
                </div>
              </div>
              <div className="user-calender flex flex-col w-full p-3 shadow-md rounded-lg border">
                <div className="cal-top flex flex-row w-full items-center justify-between px-2 py-1">
                  <div className="left-arrow  text-[18px] cursor-pointer">
                    <FaChevronLeft />
                  </div>
                  <div className="cal-head flex flex-row items-center justify-center gap-2">
                    <div className="icon text-[16px]">
                      <MdCalendarToday />
                    </div>
                    <span className="text-[16px] font-medium">April 2024</span>
                  </div>
                  <div className="right-arrow  text-[18px] cursor-pointer">
                    <FaChevronRight />
                  </div>
                </div>
                <div className="cal-body flex flex-col items-center justify-center px-2 py-1 gap-3">
                  <div className="week-days flex flex-row items-center justify-between w-full gap-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thur</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                  <div className="days flex flex-row items-center justify-between w-full gap-2">
                    <span>
                      23
                      <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </span>
                    <span>
                      24{" "}
                      <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </span>
                    <span className="highlight">
                      25{" "}
                      <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </span>
                    <span>
                      26{" "}
                      <div className="dots">
                        <div className="dot bg-black"></div>
                        <div className="dot bg-red-500"></div>
                      </div>
                    </span>
                    <span>
                      27{" "}
                      <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </span>
                    <span>
                      28{" "}
                      <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </span>
                    <span>
                      29{" "}
                      <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="user-course flex flex-row items-center justify-between w-full p-2 rounded-[10px] border shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                <div className="left-con flex flex-row items-center justify-start gap-3">
                  <div className="icon flex items-center justify-center w-[40px] h-[40px] text-white bg-black rounded-full">
                    <LuBook />
                  </div>
                  <div className="text">
                    <div className="top-text text-[12px] xl:text-[14px] text-gray-600">
                      Course
                    </div>
                    <div className="topic text-[14px] xl:text-[16px] font-semibold">
                      Business Prospect Analysis
                    </div>
                    <div className="d-time text-[12px] xl:text-[14px] flex flex-row items-center justify-start gap-2">
                      <div className="date flex flex-row items-center justify-start gap-1 text-gray-600">
                        <div className="icon">
                          <MdCalendarToday />
                        </div>
                        <span>April 25</span>
                      </div>
                      <div className="time flex flex-row items-center justify-start gap-1 text-gray-600">
                        <div className="icon">
                          <FaRegClock />
                        </div>
                        <span>11:00-12:00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-con text-[16px] p-2">
                  <FaChevronRight />
                </div>
              </div>
              <div className="tutor-course flex flex-row items-center justify-between w-full p-2 rounded-[10px] border shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                <div className="left-con flex flex-row items-center justify-start gap-3">
                  <div className="icon flex items-center justify-center w-[40px] h-[40px] text-white bg-blue-400 rounded-full">
                    <PiGraduationCap />
                  </div>
                  <div className="text">
                    <div className="top-text text-[12px] xl:text-[14px] text-gray-600">
                      Tutoring
                    </div>
                    <div className="topic text-[14px] xl:text-[16px] font-semibold">
                      AI & Virtual Reality: Intro
                    </div>
                    <div className="d-time text-[12px] xl:text-[14px] flex flex-row items-center justify-start gap-2">
                      <div className="date flex flex-row items-center justify-start gap-1 text-gray-600">
                        <div className="icon">
                          <MdCalendarToday />
                        </div>
                        <span>April 27</span>
                      </div>
                      <div className="time flex flex-row items-center justify-start gap-1 text-gray-600">
                        <div className="icon">
                          <FaRegClock />
                        </div>
                        <span>14:30-15:30</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-con text-[16px] p-2">
                  <FaChevronRight />
                </div>
              </div>
              <div className="user-summa flex flex-col w-full items-center justify-center">
                <span className="title flex w-full items-center justify-start">
                  Overall Information
                </span>
                <div className="info-grid flex flex-row flex-wrap gap-2 items-center justify-center">
                  <div className="score flex flex-row w-[140px] xl:w-[200px] p-2 rounded-[10px] border items-center justify-start gap-2 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="icon w-[30px] h-[30px] text-[16px] xl:w-[50px] xl:h-[50px] xl:text-[18px] flex items-center justify-center rounded-full bg-blue-200/40 text-blue-700">
                      <LuChartNoAxesColumn />
                    </div>
                    <div className="text flex flex-col w-full items-start justify-center">
                      <span className="top text-[12px] xl:text-[14px] text-gray-400">
                        Score
                      </span>
                      <div className="dow flex flex-row items-center">
                        <span className="text-[16px] xl:text-[18px] font-semibold">
                          210
                        </span>
                        <div className="rate flex flex-row items-end justify-center text-green-600">
                          <div className="icon">
                            <MdArrowDropUp />
                          </div>
                          <span className="text-[12px] xl:text-[14px]">
                            +13%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="course flex flex-row w-[140px] xl:w-[200px] p-2 rounded-[10px] border items-center justify-start gap-2 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="icon w-[30px] h-[30px] text-[16px] xl:w-[50px] xl:h-[50px] xl:text-[18px] flex items-center justify-center rounded-full bg-purple-200/40 text-purple-700">
                      <LuBook />
                    </div>
                    <div className="text flex flex-col w-full items-start justify-center">
                      <span className="top text-[12px] xl:text-[14px] text-gray-400">
                        Completed Course
                      </span>
                      <div className="dow flex flex-row items-center">
                        <span className="text-[16px] xl:text-[18px] font-semibold">
                          34h
                        </span>
                        <div className="rate flex flex-row items-end justify-center text-green-600">
                          <div className="icon">
                            <MdArrowDropUp />
                          </div>
                          <span className="text-[12px] xl:text-[14px]">
                            +15%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Student flex flex-row w-[140px] xl:w-[200px] p-2 rounded-[10px] border items-center justify-start gap-2 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="icon w-[30px] h-[30px] text-[16px] xl:w-[50px] xl:h-[50px] xl:text-[18px] flex items-center justify-center rounded-full bg-green-200/40 text-green-700">
                      <LuUsers />
                    </div>
                    <div className="text flex flex-col w-full items-start justify-center">
                      <span className="top text-[12px] xl:text-[14px] text-gray-400">
                        Total Student
                      </span>
                      <div className="dow flex flex-row items-center">
                        <span className="text-[16px] xl:text-[18px] font-semibold">
                          17
                        </span>
                        <div className="rate flex flex-row items-end justify-center text-red-600">
                          <div className="icon">
                            <MdArrowDropDown />
                          </div>
                          <span className="text-[12px] xl:text-[14px]">
                            -2%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hours flex flex-row w-[140px] xl:w-[200px] p-2 rounded-[10px] border items-center justify-start gap-2 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="icon w-[30px] h-[30px] text-[16px] xl:w-[50px] xl:h-[50px] xl:text-[18px] flex items-center justify-center rounded-full bg-violet-200/40 text-violet-700">
                      <FaRegClock />
                    </div>
                    <div className="text flex flex-col w-full items-start justify-center">
                      <span className="top text-[12px] xl:text-[14px] text-gray-400">
                        Total Hours
                      </span>
                      <div className="dow flex flex-row items-center">
                        <span className="text-[16px] xl:text-[18px] font-semibold">
                          11
                        </span>
                        <div className="rate flex flex-row items-end justify-center text-red-600">
                          <div className="icon">
                            <MdArrowDropDown />
                          </div>
                          <span className="text-[12px] xl:text-[14px]">
                            -9%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="productivity flex flex-col w-full items-start justify-center">
                <div className="top flex flex-row w-full items-center justify-between py-3">
                  <div className="title text-[16px] xl:text-[18px] font-semibold">
                    Productivity
                  </div>
                  <div className="view-btn flex flex-row items-center justify-center gap-1 text-purple-700 font-semibold text-[14px] hover:underline cursor-pointer">
                    <span>View details</span>
                    <div className="icon">
                      <FaChevronRight />
                    </div>
                  </div>
                </div>

                <div className="chart flex w-full items-center justify-center">
                  <ProductivityChart />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}