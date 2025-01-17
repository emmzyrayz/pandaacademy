'use client'
import React, {useState} from "react";
import "./style.css";
import "../../app/ext-style.css";
import {FaUserCircle} from "react-icons/fa";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled");
    setMenuOpen(!isMenuOpen);
  };

  return (
    // Header start
    <div className="header-area header-transparent">
      <div className="main-header">
        <div className="header-bottom header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="/">
                    <Image
                      src="/assets/img/logo/logo.png"
                      alt=""
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      width={500}
                      height={300}
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10">
                <div className="menu-wrapper d-flex align-items-center justify-content-end">
                  {/* Main-menu */}
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li className="active">
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/majors">Courses</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/blog">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="/blog">Blog</a>
                            </li>
                            <li>
                              <a href="/blog">Blog Details</a>
                            </li>
                            <li>
                              <a href="/blog">Element</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        {/* Button */}
                        <li
                          id="userProfile"
                          className="dispNone user-pro align-items-center"
                        >
                          {/* Placeholder for user profile */}
                          <FaUserCircle className="userImg" />
                          <span id="userName" className="fs-16 fw-600">
                            Martin Balogun
                          </span>
                          <a href="/login" className="btn">
                            Log Out
                          </a>
                        </li>
                        <li className="authLinks" id="authLinks">
                          <span className="button-header margin-left">
                            <a href="/register" className="btn">
                              Join
                            </a>
                          </span>
                          <span className="button-header">
                            <a href="/login" className="btn">
                              Log in
                            </a>
                          </span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none">
                  <div onClick={toggleMenu} className="slicknav_btn">
                    <span className="slicknav_menutxt textSt">MENU</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </div>
                  <ul
                    className={`slicknav_nav ${
                      isMenuOpen ? "slicknav_open" : "slicknav_hidden"
                    }`}
                    aria-hidden={!isMenuOpen}
                    role="menu"
                  >
                    <li className="active">
                      <a href="/" role="menuitem">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/majors" role="menuitem">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="/about" role="menuitem">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/contact" role="menuitem">
                        Contact
                      </a>
                    </li>
                    {/* Button */}
                    <li className="disFlex dispNone">
                      {/* Placeholder for user profile */}
                      <FaUserCircle className="userImg" />
                      <span></span>
                      <a href="/login" className="btn">
                        Log Out
                      </a>
                    </li>
                    <li className="authLinks disFlex">
                      <span className="button-header margin-left">
                        <a href="/register" className="btn" role="menuitem">
                          Join
                        </a>
                      </span>
                      <span className="button-header">
                        <a
                          href="/login"
                          className="btn hero-btn"
                          role="menuitem"
                        >
                          Log in
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // Header end
  );
}

export default Header;
