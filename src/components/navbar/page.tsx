"use client";

import React, {useState, useEffect, useRef} from "react";
import NavLogo from "@/assets/img/logo/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import "./nav.css";

import Logo from "@/assets/img/logo/panda.png";

import {LuLayoutGrid} from "react-icons/lu";
import {CiLogout} from "react-icons/ci";
import {GoPackage} from "react-icons/go";
import {
  FaRegUser,
  FaUser,
  FaRegQuestionCircle,
  FaQuestionCircle,
  FaBox,
} from "react-icons/fa";
import {
  IoLogOut,
  IoMenuOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import {BsFillGridFill} from "react-icons/bs";

// Interface for individual navigation items
interface NavItemData {
  id: string;
  regularIcon: React.ReactNode;
  solidIcon: React.ReactNode;
  text: string;
  notify?: number;
}

// Props interface for the NavItem component
interface NavItemProps {
  item: NavItemData;
  isExtra?: boolean;
}

// Props interface for the main HmNavbar component
interface HmNavbarProps {
  className?: string;
}

// Define the style type for the CSS custom property
interface MenuItemStyle extends React.CSSProperties {
  "--item-index": number;
}

interface NavMenuProps {
  isOpen: boolean;
}

export const LpNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const handleClicked = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOpen) {
      // Handle closing
      setIsClosing(true);
      setIsVisible(false);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 800); // Adjust this timing based on your total animation duration
    } else {
      // Handle opening
      setIsOpen(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        // Handle closing animation
        setIsClosing(true);
        setIsVisible(false);
        setTimeout(() => {
          setIsOpen(false);
          setIsClosing(false);
        }, 800); // Match with your total animation duration
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative flex flex-row items-center justify-between">
      <div className="navbar-section flex flex-row items-center justify-between bg-transparent p-3 w-full relative">
        <Link
          href="/"
          className="cursor-pointer w-[30%] h-full flex items-center justify-center relative hover:bg-black/20 p-3 rounded-md"
        >
          <div className="logo-section ">
            <Image
              src={NavLogo}
              alt="logo"
              width={500}
              height={300}
              className="w-full h-full p-0 object-cover"
            />
          </div>
        </Link>

        <div className="nav-btn hidden md:flex flex-row gap-2 text-[14px] font-semibold">
          <Link href="/">
            <span>
              <p>Home</p>
              <hr />
            </span>
          </Link>

          <Link href="#">
            <span>
              <p>Courses</p>
              <hr />
            </span>
          </Link>

          <Link href="/about">
            <span>
              <p>About</p>
              <hr />
            </span>
          </Link>

          <Link href="/contact">
            <span>
              <p>Contact</p>
              <hr />
            </span>
          </Link>

          <div className="auth-btn">
            <Link href="/signup">
              <span>
                <p>Join</p>
                <hr />
              </span>
            </Link>

            <Link href="/signin" className="hidden">
              <span>
                <p>Log In</p>
                <hr />
              </span>
            </Link>
          </div>
        </div>

        <div
          ref={hamburgerRef}
          className={`hamburg gap-2 flex md:hidden flex-col p-2 items-center justify-center cursor-pointer ${
            isOpen ? "open" : ""
          }`}
          onClick={handleClicked}
        >
          <span className="hamburg-line line-1"></span>
          <span className="hamburg-line line-2"></span>
          <span className="hamburg-line line-3"></span>
        </div>
      </div>
      {/* Conditionally Render NavMenu */}
      {/* Modified NavMenu render */}
      {(isOpen || isClosing) && (
        <div
          ref={navMenuRef}
          className={`navmenu absolute w-full h-fit items-center justify-center bg-black/50 rounded-md mt-[310px] ${
            isVisible ? "open" : ""
          } ${isClosing ? "closing" : ""}`}
        >
          <LpNavMenu isOpen={isVisible} />
        </div>
      )}
    </div>
  );
};

const LpNavMenu: React.FC<NavMenuProps> = ({isOpen}) => {
  return (
    <div
      className={`navmenu flex flex-col w-full h-full items-center justify-center ${
        isOpen ? "open" : ""
      }`}
    >
      <Link
        href="#"
        className="flex text-[18px] font-semibold text-white/60 hover:text-white hover:bg-black rounded w-full h-full items-center justify-center p-2 menu-item"
        style={{"--item-index": 0} as MenuItemStyle}
      >
        <span>Home</span>
      </Link>

      <Link
        href="#"
        className="flex text-[18px] font-semibold text-white/60 hover:text-white hover:bg-black rounded w-full h-full items-center justify-center p-2 menu-item"
        style={{"--item-index": 1} as MenuItemStyle}
      >
        <span>Courses</span>
      </Link>

      <Link
        href="#"
        className="flex text-[18px] font-semibold text-white/60 hover:text-white hover:bg-black rounded w-full h-full items-center justify-center p-2 menu-item"
        style={{"--item-index": 2} as MenuItemStyle}
      >
        <span>About</span>
      </Link>

      <Link
        href="#"
        className="flex text-[18px] font-semibold text-white/60 hover:text-white hover:bg-black rounded w-full h-full items-center justify-center p-2 menu-item"
        style={{"--item-index": 3} as MenuItemStyle}
      >
        <span>Contact</span>
      </Link>

      <div className="auth-btn flex text-[18px] font-semibold rounded w-full h-full items-center justify-evenly p-2">
        <Link
          href="#"
          className="flex bg-black/70 text-white/60 hover:bg-black hover:text-white w-[120px] h-[40px] items-center justify-center p-1 rounded menu-item"
          style={{"--item-index": 4} as MenuItemStyle}
        >
          <span>Join</span>
        </Link>

        <Link
          href="#"
          className="flex bg-black/70 text-white/60 hover:bg-black hover:text-white w-[120px] h-[40px] items-center justify-center p-1 rounded menu-item"
          style={{"--item-index": 5} as MenuItemStyle}
        >
          <span>Log In</span>
        </Link>
      </div>
    </div>
  );
};

// main navbar

export const HmNavbar: React.FC<HmNavbarProps> = ({className}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItemData[] = [
    {
      id: "dashboard",
      regularIcon: <LuLayoutGrid size={24} />,
      solidIcon: <BsFillGridFill size={24} />,
      text: "Dashboard",
      notify: 8,
    },
    {
      id: "settings",
      regularIcon: <IoSettingsOutline size={24} />,
      solidIcon: <IoSettings size={24} />,
      text: "Settings",
      notify: 8,
    },
    {
      id: "profile",
      regularIcon: <FaRegUser size={24} />,
      solidIcon: <FaUser size={24} />,
      text: "Profile",
      notify: 8,
    },
    {
      id: "package",
      regularIcon: <GoPackage size={24} />,
      solidIcon: <FaBox size={24} />,
      text: "Package",
      notify: 8,
    },
  ];

  const extraItems = [
    {
      id: "support",
      regularIcon: <FaRegQuestionCircle size={24} />,
      solidIcon: <FaQuestionCircle size={24} />,
      text: "Support",
      notify: 8,
    },
    {
      id: "logout",
      regularIcon: <CiLogout size={24} />,
      solidIcon: <IoLogOut size={24} />,
      text: "Logout",
    },
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavItem: React.FC<NavItemProps> = ({item, isExtra = false}) => (
    <div
      className={`nav-item flex w-full items-center justify-between rounded-xl hover:bg-white/20 p-2 cursor-pointer transition-all duration-500 ease-in-out group `}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className="main flex items-center gap-2 group-hover:gap-3">
        <div className="icon min-w-[24px] transition-all duration-500">
          {hoveredItem === item.id ? item.solidIcon : item.regularIcon}
        </div>
        <span
          className={`text-lg font-semibold whitespace-nowrap overflow-hidden transition-all duration-500
          ${isExpanded ? "w-auto" : "w-0 lg:hidden"}`}
        >
          {item.text}
        </span>
      </div>
      {item.notify && isExpanded && (
        <div className="flex items-center justify-center min-w-[20px] h-[20px] rounded-full bg-red-500 text-xs font-bold">
          {item.notify}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black rounded-lg text-white"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <IoMenuOutline size={24} />
      </button>

      <div
        className={`
        fixed lg:relative
        ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100 h-0"
            : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100 h-[96vh]"
        }
        transition-all duration-500 ease-in-out
        flex flex-col w-[240px] h-full min-h-[98vh] p-1 my-1 ml-1
        ${
          isExpanded
            ? "lg:w-[240px] items-start justify-between"
            : "lg:w-[60px] items-center justify-between"
        }
         bg-black text-white rounded-lg shadow-xl
        ${className || ""}
      `}
      >
        {/* Logo Section */}
        <div className="w-full flex items-center justify-between p-2">
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="logo"
              width={30}
              height={30}
              className="min-w-[30px] h-[30px] object-contain rounded-full"
            />
            <span
              className={`text-xl font-bold whitespace-nowrap overflow-hidden transition-all duration-300
              ${isExpanded ? "w-auto" : "w-0 lg:hidden"}`}
            >
              Panda Academy
            </span>
          </div>

          {/* Collapse Toggle Button - Hidden on mobile */}
          <button
            type="button"
            className="hidden lg:block p-1 hover:bg-white/20 rounded-lg absolute -right-[20px] bg-black/20 hover:text-black"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <IoMenuOutline size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="nav-items flex flex-col w-full h-full items-start justify-start py-4 my-5 gap-2 transition-all duration-500 ease-in-out">
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>

        {/* Extra Items */}
        <div className="extra flex flex-col w-full items-start justify-start py-4 gap-2">
          {extraItems.map((item) => (
            <NavItem key={item.id} item={item} isExtra={true} />
          ))}
        </div>
      </div>
    </>
  );
};
