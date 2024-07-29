'use client'
import {useEffect} from "react";
import Image from "next/image";
import "./style.css";
import "../style.css"
import { AboutA1 } from "@/components/desc/page";
import TopTopic from "@/components/topSubject/page";
import "@fortawesome/fontawesome-free"
import "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHeartPulse, faLightbulb, faPeopleGroup, faPeopleRoof, faPersonRunning, faUserGraduate } from "@fortawesome/free-solid-svg-icons";


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
                alt="Coding"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "13px",
                }}
                width={300}
                height={500}
              />
            </div>
            <div className="col-12 col-md-12 col-lg">
              <div className="text-wrapper align-left">
                <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                  <strong>About Panda Academy</strong>
                </h1>
                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
                  Welcome to Panda Academy! We are dedicated to transforming
                  aspiring coders into job-ready developers. Our mission is to
                  provide a hands-on, immersive learning experience that equips
                  you with the skills needed to succeed in the tech industry.
                </p>
                <h2 className="mbr-section-title mbr-fonts-style mb-4 display-4">
                  <strong>Why Choose Us?</strong>
                </h2>
                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
                  At Panda Academy, we don&apos;t just teach you to code; we
                  turn you into a coding ninja! Our bootcamp is designed for
                  those who want to dive headfirst into the tech world without
                  drowning in boring lectures. We believe in hands-on learning,
                  where you&apos;ll build real projects that make your portfolio
                  shine brighter than a supernova!
                </p>
                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
                  Our mission? To transform aspiring coders into job-ready
                  developers faster than you can say &apos;JavaScript&apos;.
                  With our expert instructors, who have more experience than
                  your average superhero, you&apos;ll learn the latest
                  technologies and frameworks that employers are actually
                  looking for. Forget the fluff; we give you the real deal!
                </p>
                <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
                  Join a community of like-minded individuals who are just as
                  passionate about coding as you are. Whether you&apos;re a
                  complete newbie or a seasoned pro looking to level up, Panda
                  Academy is your ultimate coding playground. So, what are you
                  waiting for? Let&apos;s code the future together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* @emmzyrayzABout-det */}

      {/* Values */}
      <section>
        <div className="container">
          <div className="row">
            <h2 className="mbr-section-title mbr-fonts-style mb-4 display-4">
              <strong>Our Core Values</strong>
            </h2>
            <span className="val-list">
              <ul>
                <li>
                  <div className="val-top">
                    <div className="val-icon">
                      <FontAwesomeIcon icon={faUserGraduate} />
                    </div>
                    <div className="val-head">Excellence</div>
                  </div>
                  <div className="val-text">
                    We are committed to providing top-notch education and
                    continually improving our curriculum to ensure it meets the
                    latest industry standards.
                  </div>
                </li>
                <li>
                  <div className="val-top">
                    <div className="val-icon">
                      <FontAwesomeIcon icon={faPeopleGroup} />
                    </div>
                    <div className="val-head">Inclusivity</div>
                  </div>
                  <div className="val-text">
                    We believe in creating an inclusive learning environment
                    where everyone, regardless of background, can access quality
                    education and achieve their full potential.
                  </div>
                </li>
                <li>
                  <div className="val-top">
                    <div className="val-icon">
                      <FontAwesomeIcon icon={faPersonRunning} />
                    </div>
                    <div className="val-head">Practical Learning</div>
                  </div>
                  <div className="val-text">
                    We emphasize hands-on, project-based learning to ensure our
                    students can apply their knowledge in real-world scenarios.
                  </div>
                </li>
                <li>
                  <div className="val-top">
                    <div className="val-icon">
                      <FontAwesomeIcon icon={faPeopleRoof} />
                    </div>
                    <div className="val-head">Community</div>
                  </div>
                  <div className="val-text">
                    We foster a supportive and collaborative community where
                    students, instructors, and alumni can share knowledge,
                    mentor each other, and grow together.
                  </div>
                </li>
                <li>
                  <div className="val-top">
                    <div className="val-icon">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="val-head">Innovation</div>
                  </div>
                  <div className="val-text">
                    We encourage innovative thinking and problem-solving,
                    empowering our students to become leaders and innovators in
                    the tech industry.
                  </div>
                </li>
                <li>
                  <div className="val-top">
                    <div className="val-icon">
                      <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className="val-head">Integrity</div>
                  </div>
                  <div className="val-text">
                    We uphold the highest standards of honesty and integrity in
                    all our interactions and educational practices.
                  </div>
                </li>
                <li>
                  <div className="val-top">
                    <div className="val-icon">
                      <FontAwesomeIcon icon={faHeartPulse} />
                    </div>
                    <div className="val-head">Lifelong Learning</div>
                  </div>
                  <div className="val-text">
                    We promote the importance of continuous learning and skill
                    development to adapt to the ever-evolving tech landscape.
                  </div>
                </li>
              </ul>
            </span>
            <h2 className="mbr-section-title mbr-fonts-style mb-4 display-4">
              <strong>What Our Students Say</strong>
            </h2>
            <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
              &quot;Panda Academy transformed my coding skills and helped me
              land my dream job in tech!&quot; - Jane Doe
            </p>
            <h2 className="mbr-section-title mbr-fonts-style mb-4 display-4">
              <strong>Get in Touch</strong>
            </h2>
            <p className="mbr-text align-left mbr-fonts-style mb-3 display-7">
              Have questions or ready to join us? Contact us at{" "}
              <a href="mailto:info@pandaacademy.com">info@pandaacademy.com</a>.
            </p>
            <a className="btn btn-primary" href="/contact">
              Join Us Now
            </a>
          </div>
        </div>
      </section>
      {/* Values */}

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
