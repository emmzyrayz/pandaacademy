import {majors} from "../../components/_lib/data/courses.json";
import Link from "next/link";
import "./style.css";

export default function CourseList() {
  return (
    <>
      <section className="slider-area slider-area2">
        <div className="slider-active">
          {/* <!-- Single Slider --> */}
          <div className="single-slider slider-height2">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-11 col-md-12">
                  <div className="hero__caption hero__caption2">
                    <h1 data-animation="bounceIn" data-delay="0.2s">
                      Our courses
                    </h1>
                    {/* <!-- breadcrumb Start--> */}
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/courses">Courses</a>
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

      {/* ?__COURSES_AREA */}
      <div className="courses-area section-padding40 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2>Our featured Majors</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {majors.map((major) => (
              <div className="col-lg-4" key={major.majorId}>
                <div className="properties properties2 mb-30">
                  <div className="properties__card">
                    <div className="properties__img overlay1">
                      <Link href={`/majors/${major.majorId}`}>
                        <div>
                          <i className={`${major.majorIcon} img`}></i>
                        </div>
                      </Link>
                    </div>
                    <div className="properties__caption">
                      <p>
                        {major.majorName}
                        <i className={major.majorIcon}></i>
                      </p>
                      <h3>
                        <Link href={`/courses/${major.majorId}`}>
                          <span>{major.courses[0].courseName}</span>
                        </Link>
                      </h3>
                      <p>{major.courses[0].description}</p>
                      <div className="properties__footer d-flex justify-content-between align-items-center">
                        <div className="restaurant-name">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half"></i>
                          </div>
                          <p>
                            <span>(4.5)</span> based on 120
                          </p>
                        </div>
                        <div className="price">
                          <span>$135</span>
                        </div>
                      </div>
                      <Link href={`/majors/${major.majorId}`}>
                        <span className="border-btn border-btn2">
                          Find out more
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mt-40">
                <a href="#" className="border-btn">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ?__COURSES_AREA */}

      {/* __TOP__TOPICS */}
      <div className="topic-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2>Explore top subjects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic1.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">UI/UX</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic2.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">HTML5</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic3.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">CSS3</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic4.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">JAVASCRIPT ES6+</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic5.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">JQUERY</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic6.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">TAILSWIND</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic7.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">GIT</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic8.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">NODEJS</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-topic text-center mb-30">
                <div className="topic-img">
                  <img src="/assets/img/gallery/topic8.png" alt="" />
                  <div className="topic-content-box">
                    <div className="topic-content">
                      <h3>
                        <a href="#">REACTJS</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-tittle text-center mt-20">
                <a href="courses.html" className="border-btn">
                  View More Subjects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* __TOP__TOPICS */}

      {/* __SERVICES_AREA */}
      <div className="services-area services-area2 section-padding40">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="single-services mb-30">
                <div className="features-icon">
                  <img src="/assets/img/icon/icon1.svg" alt="" />
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
                  <img src="/assets/img/icon/icon2.svg" alt="" />
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
                  <img src="/assets/img/icon/icon3.svg" alt="" />
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
      {/* __SERVICES_AREA */}
      <h1>Course List</h1>
      <h2>Course 1</h2>
      <h2>Course 2</h2>
      <h2>Course 3</h2>
      <h2>Course 4</h2>
    </>
  );
}
