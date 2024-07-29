"use client";
import {useState} from "react";
import axios from "axios";
import "./style.css";
import "../style.css";
import "@fortawesome/fontawesome-free";
import "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse, faTablet } from "@fortawesome/free-solid-svg-icons";


function Contact() {

  const [placeholders, setPlaceholders] = useState({
    message: "Enter Message",
    name: "Enter your name",
    email: "Enter email address",
    subject: "Enter Subject",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFocus = (field: string) => {
    setPlaceholders((prev) => ({...prev, [field]: ""}));
  };

  const handleBlur = (field: string, defaultPlaceholder: string) => {
    setPlaceholders((prev) => ({...prev, [field]: defaultPlaceholder}));
  };

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully");
        setFormData({name: "", email: "", subject: "", message: ""});
      } else {
        setStatus("Failed to send message");
      }
    } catch (error) {
      setStatus("Error sending message");
    }
  };


  return (
    <div>
      {/* Slider area */}
      <section className="slider-area slider-area2">
        <div className="slider-active">
          {/* <!-- Single Slider --> */}
          <div className="single-slider slider-height2">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-11 col-md-12">
                  <div className="hero__caption hero__caption2">
                    <h1 data-animation="bounceIn" data-delay="0.2s">
                      Contact us
                    </h1>
                    {/* <!-- breadcrumb Start--> */}
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/contact">Contact</a>
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
      {/* Slider area */}

      {/* Contact Element */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Get in Touch</h2>
            </div>
            <div className="col-lg-8">
              <form
                onSubmit={handleSubmit}
                className="form-contact contact_form"
                id="contactForm"
                noValidate
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols={30}
                        rows={9}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={() => handleBlur("message", "Enter Message")}
                        placeholder={placeholders.message}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus("name")}
                        onBlur={() => handleBlur("name", "Enter your name")}
                        placeholder={placeholders.name}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={() =>
                          handleBlur("email", "Enter email address")
                        }
                        placeholder={placeholders.email}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus("subject")}
                        onBlur={() => handleBlur("subject", "Enter Subject")}
                        placeholder={placeholders.subject}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    Send
                  </button>
                  {status && <p>{status}</p>}
                </div>
              </form>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                <div className="media-body">
                  <h3>Lagos, Nigeria.</h3>
                  <p>Ikeja, NG 12110</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <FontAwesomeIcon icon={faTablet} />
                </span>
                <div className="media-body">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div className="media-body">
                  <h3>
                    <a href="mailto:pandaacademybootcamp@gmail.com">
                      support@pandaacademy.com
                    </a>
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Element */}
    </div>
  );
}

export default Contact;
