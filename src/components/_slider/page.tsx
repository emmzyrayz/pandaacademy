"use client";
import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; // Your custom styles
import { CustomPrevArrow, CustomNextArrow } from "./CustomArrows"
import "../../app/ext-style.css"; // External styles

const SliDer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  useEffect(() => {
    const handleAnimation = () => {
      const animatingElements = document.querySelectorAll("[data-animation]");
      animatingElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const animationDelay = htmlElement.getAttribute("data-delay") || "0s";
        const animationType = htmlElement.getAttribute("data-animation") || "";
        htmlElement.style.animationDelay = animationDelay;
        htmlElement.classList.add("animated", animationType);

        htmlElement.addEventListener("animationend", () => {
          htmlElement.classList.remove("animated", animationType);
        });
      });
    };

    handleAnimation();

    // Re-run animations on slide change
    const sliderElement = document.querySelector(".slider-active");
    if (sliderElement) {
      sliderElement.addEventListener("beforeChange", () => {
        handleAnimation();
      });
    }
  }, []);

  return (
    <section className="slider-area">
      <Slider {...settings} className="slider-active">
        <div className="single-slider slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-12">
                <div className="hero__caption">
                  <h1 data-animation="fadeInLeft" data-delay="0.5s">
                    Online learning <br />
                    Platform
                  </h1>
                  <p data-animation="fadeInLeft" data-delay="0.5s">
                    Build skills with courses, certificates, and degrees online
                    from world-class universities and companies
                  </p>
                  <a
                    href="/register"
                    className="btn hero-btn"
                    data-animation="fadeInLeft"
                    data-delay="0.7s"
                  >
                    Join for Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-slider slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-12">
                <div className="hero__caption">
                  <h1 data-animation="fadeInLeft" data-delay="0.5s">
                    Online learning <br />
                    Platform
                  </h1>
                  <p data-animation="fadeInLeft" data-delay="0.5s">
                    Build skills with courses, certificates, and degrees online
                    from world-class universities and companies
                  </p>
                  <a
                    href="/register"
                    className="btn hero-btn"
                    data-animation="fadeInLeft"
                    data-delay="0.7s"
                  >
                    Join for Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default SliDer;