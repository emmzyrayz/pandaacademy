'use client'

import React, {useState, useEffect, useRef} from 'react'
import NavLogo from "@/assets/img/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import './nav.css';

// Define the style type for the CSS custom property
interface MenuItemStyle extends React.CSSProperties {
  '--item-index': number;
}

interface NavMenuProps {
  isOpen: boolean;
}

export const Navbar = () => {
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
      <div className="navbar-section flex flex-row items-center justify-between bg-black/30 p-3 w-full relative">
        <div className="logo-section w-[40%] h-full flex items-center justify-center">
          <Image
            src={NavLogo}
            alt="logo"
            width={500}
            height={300}
            className="w-full h-full p-0 object-cover"
          />
        </div>

        <div className="nav-btn md:flex flex-row gap-2 text-[14px] font-semibold hidden">
          <Link href="#">
            <span>Home</span>
          </Link>

          <Link href="#">
            <span>Courses</span>
          </Link>

          <Link href="#">
            <span>About</span>
          </Link>

          <Link href="#">
            <span>Contact</span>
          </Link>

          <div className="auth-btn">
            <Link href="#">
              <span>Join</span>
            </Link>

            <Link href="#" className='hidden'>
              <span>Log In</span>
            </Link>
          </div>
        </div>

        <div
          ref={hamburgerRef}
          className="hamburg gap-2 md:hidden flex flex-col p-2 items-center justify-center cursor-pointer"
          onClick={handleClicked}
        >
          <span className="flex items-center w-[40px] h-[4px] rounded bg-black border-[2px] border-black"></span>
          <span className="flex items-center w-[40px] h-[4px] rounded bg-black border-[2px] border-black"></span>
          <span className="flex items-center w-[40px] h-[4px] rounded bg-black border-[2px] border-black"></span>
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
          <NavMenu isOpen={isVisible} />
        </div>
      )}
    </div>
  );
};

const NavMenu: React.FC<NavMenuProps> = ({isOpen}) => {
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
