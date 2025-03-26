'use client'

import { ShortMenu } from "@/components/menu-tab/page";
import { HmNavbar } from "@/components/navbar/page";
import { useEffect, useState } from "react";
import User1 from "@/assets/img/people/avatar/team1.png";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa6";


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

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  // Handle navbar state changes
  const handleNavbarToggle = (expanded: boolean) => {
    setIsExpanded(expanded);
  };

    return (
      <main>
        <div className="flex flex-row items-start min-h-screen">
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

          <main
            className={`flex-1 transition-all duration-100 ease-in-out py-3
         `}
          >
            <div className="flex flex-row w-full h-full items-center justify-center gap-1">
              <div className="left-con flex flex-col w-[65%] h-full items-center justify-center bg-black">
                {children}
              </div>
              <div className="right-con flex flex-col w-[35%] h-full items-center justify-center">
                <div className="top-info flex flex-row w-full p-1 items-center justify-between">
                  <div className="date">
                    <div className="day font-semibold text-[16px]">Friday</div>
                    <div className="date font-light text-[12px] opacity-50">April 5, 2024</div>
                  </div>
                  <div className="user flex flex-row items-center justify-center gap-3">
                    <div className="noti flex items-center justify-center w-[38px] h-[38px] text-[18px] bg-black/10 rounded-[9px]">
                      <FaRegBell />
                    </div>
                    <div className="user">
                      <Image src={User1} alt="" width={50} height={50} className="rounded-[9px] object-cover bg-black" />
                    </div>
                  </div>
                </div>
                <div className="user-summa"></div>
              </div>
            </div>
          </main>
        </div>
      </main>
    );
}