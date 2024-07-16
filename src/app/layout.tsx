"use client";

import { usePathname } from "next/navigation";


export default function RootLayout({children}: {children: React.ReactNode}) {

  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // List of paths where the header and footer should be hidden
  const noHeaderFooterPaths = ["/login", "/register", "/forgot-password"];

  // Check if the current path matches any in the noHeaderFooterPaths array
  const shouldHideHeaderFooter = noHeaderFooterPaths.includes(pathname);

  
  
  return (
    <html lang="en">
      <head>
        {/* META and OG tags */}
        <title>PandaAcademy</title>
        <meta
          name="description"
          content="PandaAcademy: Discover, Learn, Grow - Your go-to platform for mastering web development. Explore courses on HTML, CSS, JavaScript, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/img/favicon.ico"
        />
        <meta
          name="description"
          content="PandaAcademy: Discover, Learn, Grow - Your go-to platform for mastering web development. Explore courses on HTML, CSS, JavaScript, and more."
        />
        <meta
          name="keywords"
          content="web development, frontend development, HTML, CSS, JavaScript, React, Vue.js, Angular, responsive design, mobile-first design, web design, web programming, web developer, web development tools, web development frameworks, website optimization, SEO, user experience design, UX/UI design"
        />
        <meta name="author" content="Nnamdi Emmanuel Dike" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pandaacademycamp.web.app/" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="apple-touch-icon" href="assets/img/panda.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:title" content="PandaAcademy" />
        <meta
          property="og:description"
          content="PandaAcademy: Discover, Learn, Grow - Your go-to platform for mastering web development."
        />
        <meta
          property="og:image"
          content="https://pandaacademycamp.web.app/assets/img/logo/logo.png"
        />
        <meta property="og:url" content="https://pandaacademycamp.web.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PandaAcademy" />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:app_id" content="Your Facebook App ID" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PandaAcademy" />
        <meta
          name="twitter:description"
          content="PandaAcademy: Discover, Learn, Grow - Your go-to platform for mastering web development."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/path-to-image.jpg"
        />
        <meta name="twitter:site" content="@okayinterrupt" />
        <meta name="twitter:creator" content="@okayinterrupt" />
        {/* ?META and OG tags */}
        {/* Css Styling here */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/gijgo@1.9.13/css/gijgo.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@icon/themify-icons@1.0.1-alpha.3/themify-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css"
        />

        {/* Scripts Here */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/3.5.0/modernizr.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gijgo@1.9.13/js/gijgo.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.3.0/jquery.form.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxchimp/1.3.0/jquery.ajaxchimp.min.js"></script>

        {/* Css files */}
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/progressbar_barfiller.css" />
        <link rel="stylesheet" href="assets/css/animated-headline.css" />
        <link rel="stylesheet" href="assets/css/style.css" />

        {/* javascript file */}

        <script src="assets/js/animated.headline.js"></script>
        <script src="assets/js/jquery.sticky.js"></script>
        <script src="assets/js/jquery.barfiller.js"></script>
        <script src="assets/js/hover-direction-snake.min.js"></script>
        <script src="assets/js/contact.js"></script>
        <script src="assets/js/mail-script.js"></script>
        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/main.js"></script>
      </head>
      <body>
        {/* <!-- ? Preloader Start --> */}
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img src="assets/img/logo/loder.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Preloader Start --> */}
        {!shouldHideHeaderFooter && (
          // Header start
          <div className="header-area header-transparent">
            <div className="main-header">
              <div className="header-bottom header-sticky">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    {/* <!-- Logo --> */}
                    <div className="col-xl-2 col-lg-2">
                      <div className="logo">
                        <a href="/">
                          <img src="assets/img/logo/logo.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-10">
                      <div className="menu-wrapper d-flex align-items-center justify-content-end">
                        {/* <!-- Main-menu --> */}
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
                              {/* <!-- Button --> */}
                              <li id="userProfile" className="user-pro">
                                {/* <!-- Placeholder for user profile --> */}
                                <img
                                  id="userPhoto"
                                  src="default-photo.jpg"
                                  alt="User Photo"
                                />
                                <span id="userName"></span>
                                <button id="logoutBtn">Logout</button>
                              </li>
                              <div className="authLinks" id="authLinks">
                                <li className="button-header margin-left">
                                  <a href="register.html" className="btn">
                                    Join
                                  </a>
                                </li>
                                <li className="button-header">
                                  <a href="login.html" className="btn btn3">
                                    Log in
                                  </a>
                                </li>
                              </div>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Mobile Menu --> */}
                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          // Header end
        )}
        <main>{children}</main>
        {!shouldHideHeaderFooter && (
          <footer>
            <div className="footer-wrapper footer-bg">
              {/* Footer start */}
              <div className="footer-area footer-padding">
                <div className="container">
                  <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                      <div className="single-footer-caption mb-50">
                        <div className="single-footer-caption mb-30">
                          {/* logo */}
                          <div className="footer-logo mb-25">
                            <a href="/">
                              <img
                                src="assets/img/logo/logo.png"
                                alt="footer-logo"
                                className="logo-png"
                              />
                            </a>
                          </div>
                          <div className="footer-tittle">
                            <div className="footer-pera">
                              <p>
                                The automated process starts as soon as your
                                clothes go into the machine.
                              </p>
                            </div>
                          </div>
                          {/* Footer Socials */}
                          <div className="footer-social">
                            <a href="https://www.x.com/OKAYINTERRUPT">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://bit.ly/sai4ull">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-pinterest-p"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                      <div className="single-footer-caption mb-50">
                        <div className="footer-tittle">
                          <h4>Our Solutions</h4>
                          <ul>
                            <li>
                              <a href="#">Design & Creatives</a>
                            </li>
                            <li>
                              <a href="#">Telecommunication</a>
                            </li>
                            <li>
                              <a href="#">Restaruant</a>
                            </li>
                            <li>
                              <a href="#">Programming</a>
                            </li>
                            <li>
                              <a href="#">Architecture</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                      <div className="single-footer-caption mb-50">
                        <div className="footer-tittle">
                          <h4>Support</h4>
                          <ul>
                            <li>
                              <a href="#">Design & Creatives</a>
                            </li>
                            <li>
                              <a href="#">Telecommunication</a>
                            </li>
                            <li>
                              <a href="#">Restaruant</a>
                            </li>
                            <li>
                              <a href="#">Programming</a>
                            </li>
                            <li>
                              <a href="#">Architecture</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer-bottom area */}
              <div className="footer-bottom-area">
                <div className="container">
                  <div className="footer-border">
                    <div className="row d-flex align-items-center">
                      <div className="col-xl-12">
                        <div className="footer-copy-right text-center">
                          <p>
                            Copyright &copy; {currentYear} All rights reserved
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
