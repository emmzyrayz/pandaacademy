import React, {useState} from "react";
import "./style.css";
import "../../app/ext-style.css";
import { FaUserCircle } from "react-icons/fa";

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
                    <img src="/assets/img/logo/logo.png" alt="" />
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
                          <a href="courses.html">Courses</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog_details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="elements.html">Element</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        {/* Button */}
                        <li id="userProfile" className="user-pro align-items-center">
                          {/* Placeholder for user profile */}
                          <FaUserCircle className="userImg" />
                          <span id="userName" className="fs-16 fw-600">Martin Balogun</span>
                          <a href="/login" className="btn">
                            Log Out
                          </a>
                        </li>
                        <div className="authLinks" id="authLinks">
                          <li className="button-header margin-left">
                            <a href="register.html" className="btn">
                              Join
                            </a>
                          </li>
                          <li className="button-header">
                            <a href="/login" className="btn">
                              Log in
                            </a>
                          </li>
                        </div>
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
                      <a href="index.html" role="menuitem">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="courses.html" role="menuitem">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href="about.html" role="menuitem">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" role="menuitem">
                        Contact
                      </a>
                    </li>
                    {/* Button */}
                    <li className="disFlex">
                      {/* Placeholder for user profile */}
                      <FaUserCircle className="userImg" />
                      <span></span>
                      <a href="/login" className="btn">
                        Log Out
                      </a>
                    </li>
                    <div className="authLinks disFlex">
                      <li className="button-header margin-left">
                        <a href="register.html" className="btn" role="menuitem">
                          Join
                        </a>
                      </li>
                      <li className="button-header">
                        <a
                          href="/login"
                          className="btn hero-btn"
                          role="menuitem"
                        >
                          Log in
                        </a>
                      </li>
                    </div>
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
