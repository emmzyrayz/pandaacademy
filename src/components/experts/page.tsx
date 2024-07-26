"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {TiArrowLeft, TiArrowRight} from "react-icons/ti";
import "./style.css";
import Image from "next/image";

function Experts() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    arrows: true,
    prevArrow: (
      <button type="button" className="slick-prev">
        <TiArrowLeft className="i" size={30} />
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <TiArrowRight className="i" size={30} />
      </button>
    ),
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="team-area section-padding40 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-tittle text-center mb-55">
              <h2>Community experts</h2>
            </div>
          </div>
        </div>
        <Slider className="team-active" {...settings}>
          <div className="single-cat text-center">
            <div className="cat-icon">
              <Image
                src="/assets/img/gallery/team1.png"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="cat-cap">
              <h5>
                <a href="services.html">Mr. Urela</a>
              </h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="single-cat text-center">
            <div className="cat-icon">
              <Image
                src="/assets/img/gallery/team2.png"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="cat-cap">
              <h5>
                <a href="services.html">Mr. Uttom</a>
              </h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="single-cat text-center">
            <div className="cat-icon">
              <Image
                src="/assets/img/gallery/team3.png"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="cat-cap">
              <h5>
                <a href="services.html">Mr. Shakil</a>
              </h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="single-cat text-center">
            <div className="cat-icon">
              <Image
                src="/assets/img/gallery/team4.png"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="cat-cap">
              <h5>
                <a href="services.html">Mr. Arafat</a>
              </h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="single-cat text-center">
            <div className="cat-icon">
              <Image
                src="/assets/img/gallery/team3.png"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="cat-cap">
              <h5>
                <a href="services.html">Mr. Saiful</a>
              </h5>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Experts;
