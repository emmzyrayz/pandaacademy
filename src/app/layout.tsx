"use client";

import {useEffect} from "react";
import {usePathname} from "next/navigation";
import Header from "../components/_header/page";
import Footer from "../components/_footer/page";
import PreLoader from "../components/_preloader/page";
import {noHeaderFooterPaths} from "./utils/constants";
import "./style.css";
import "../../public/assets/css/progressbar_barfiller.css";
import "../../public/assets/css/animated-headline.css";;

export default function RootLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  
  // Check if the current route matches any of the paths where header and footer should be hidden
  const shouldHideHeaderFooter = noHeaderFooterPaths.some((path) =>
    pathname.startsWith(path)
  );

  useEffect(() => {
    // Handle scroll events and back-to-top button click
    const handleScroll = () => {
      const scroll = window.scrollY;
      const headerSticky = document.querySelector(".header-sticky");
      const backTop = document.getElementById("back-top");

      if (scroll < 400) {
        if (headerSticky) headerSticky.classList.remove("sticky-bar");
        if (backTop) backTop.style.display = "none";
      } else {
        if (headerSticky) headerSticky.classList.add("sticky-bar");
        if (backTop) backTop.style.display = "block";
      }
    };

    const scrollToTop = (event: MouseEvent) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Attach event listeners
    document.addEventListener("scroll", handleScroll);
    const backTopLink = document.querySelector("#back-top a");
    if (backTopLink) {
      backTopLink.addEventListener("click", scrollToTop as EventListener);
    }

    // Initialize the display state
    handleScroll();

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
      if (backTopLink) {
        backTopLink.removeEventListener("click", scrollToTop as EventListener);
      }
    };
  }, []);

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
          href="/assets/img/favicon.ico"
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
        {/* <link rel="stylesheet" href="./ext-style.css" /> */}

        {/* Scripts Here */}
        <script
          src="https://cdn.jsdelivr.net/npm/modernizr@3.13.0/lib/cli.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/gijgo@1.9.13/js/gijgo.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.countdown/2.2.0/jquery.countdown.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.3.0/jquery.form.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"
          async
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxchimp/1.3.0/jquery.ajaxchimp.min.js"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/flaticon@0.1.0/main.min.js"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          async
        ></script>

        {/* javascript file */}

        <script src="./assets/js/animated.headline.js"></script>
        <script src="./assets/js/jquery.sticky.js"></script>
        <script src="./assets/js/jquery.barfiller.js"></script>
        <script src="./assets/js/hover-direction-snake.min.js"></script>
        <script src="./assets/js/contact.js"></script>
        <script src="./assets/js/mail-script.js"></script>
        <script src="./assets/js/plugins.js"></script>
        <script src="./assets/js/main.js"></script>
      </head>
      <body>
        <PreLoader />
        {!shouldHideHeaderFooter && <Header />}
        <main>{children}</main>
        {!shouldHideHeaderFooter && <Footer />}
        <div id="back-top">
          <a title="Go to Top" href="#">
            <i className="fas fa-level-up-alt"></i>
          </a>
        </div>
      </body>
    </html>
  );
}
