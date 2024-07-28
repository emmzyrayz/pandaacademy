'use client'
import {useEffect} from "react";
import Image from "next/image";
import "./style.css";
import "../style.css"
import { AboutA1 } from "@/components/desc/page";
import TopTopic from "@/components/topSubject/page";

const About = () => {

  useEffect(() => {
    console.log("Client render");
  }, []);

  return (
    <div>
      {/* Slider Area */}
      <section className="slider-area slider-area2">
        <div className="slider-active">
          {/* <!-- Single Slider --> */}
          <div className="single-slider slider-height2">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-11 col-md-12">
                  <div className="hero__caption hero__caption2">
                    <h1 data-animation="bounceIn" data-delay="0.2s">
                      About us
                    </h1>
                    {/* <!-- breadcrumb Start--> */}
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/about">about</a>
                        </li>
                      </ol>
                    </nav>
                    {/* <!-- breadcrumb End --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Slider Area */}

      {/* ?ABout-det */}
      <section className="about-det">
        <div className="container">
          <div className="row aboutRoww justify-content-center">
            <div className="col-12 col-md-12 col-lg-6 image-wrapper">
              <Image
                src="/assets/img/gallery/pc-code1.jpg"
                alt="looo"
                style={{width: "100%", height: "auto", objectFit: "cover", borderRadius: "13px",}}
                width={300}
                height={500}
              />
            </div>
            <div className="col-12 col-md-12 col-lg">
              <div className="text-wrapper align-left">
                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                  <strong>Why Choose Us?</strong>
                </h1>
                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
                  At Panda Academy, we don’t just teach you to code; we turn you
                  into a coding ninja! Our bootcamp is designed for those who
                  want to dive headfirst into the tech world without drowning in
                  boring lectures. We believe in hands-on learning, where you’ll
                  build real projects that make your portfolio shine brighter
                  than a supernova!
                </p>
                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
                  Our mission? To transform aspiring coders into job-ready
                  developers faster than you can say 'JavaScript'. With our
                  expert instructors, who have more experience than your average
                  superhero, you’ll learn the latest technologies and frameworks
                  that employers are actually looking for. Forget the fluff; we
                  give you the real deal!
                </p>
                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
                  Join a community of like-minded individuals who are just as
                  passionate about coding as you are. Whether you’re a complete
                  newbie or a seasoned pro looking to level up, CodeMaster is
                  your ultimate coding playground. So, what are you waiting for?
                  Let’s code the future together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* @emmzyrayzABout-det */}

      {/* Service Area */}
      <div className="services-area services-area2 section-padding40">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-30">
                <div className="features-icon">
                  <Image
                    src="/assets/img/icon/icon1.svg"
                    alt=""
                    style={{width: "auto", height: "auto", objectFit: "cover"}}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="features-caption">
                  <h3>60+ UX courses</h3>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-30">
                <div className="features-icon">
                  <Image
                    src="/assets/img/icon/icon2.svg"
                    alt=""
                    style={{width: "auto", height: "auto", objectFit: "cover"}}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="features-caption">
                  <h3>Expert instructors</h3>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-30">
                <div className="features-icon">
                  <Image
                    src="/assets/img/icon/icon3.svg"
                    alt=""
                    style={{width: "auto", height: "auto", objectFit: "cover"}}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="features-caption">
                  <h3>Life time access</h3>
                  <p>The automated process all your website tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Area */}

      {/* AboutA1 */}
      <AboutA1 />
      {/* AboutA1 */}

      {/* Top subject */}
      <TopTopic />
      {/* Top subject */}
    </div>
  );
};

export default About;
