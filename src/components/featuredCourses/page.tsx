import "./style.css";
import "../../app/style.css";
import Image from "next/image";

function FeaturedCourse() {
  return (
    <div className="courses-area section-padding40 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-tittle text-center mb-55">
              <h2>Our Featured Courses</h2>
            </div>
          </div>
        </div>
        <div className="courses-actives">
          {/* Single */}
          <div className="properties pb-20">
            <div className="properties__card">
              <div className="properties__img overlay1">
                <a href="#">
                  <Image
                    src="/assets/img/gallery/featured1.png"
                    alt="Someone wearing blue long sleeve setting a smart watch"
                    style={{width: "100%", height: "auto", objectFit: "cover"}}
                    width={500}
                    height={300}
                  />
                </a>
              </div>
              <div className="properties__caption">
                <p>User Experience/Interface</p>
                <h3>
                  <a href="#">
                    Fundamentals of UX/UI for Web Application Design
                  </a>
                </h3>
                <p>
                  The automated process all your website tasks. Discover tools
                  and techniques to engage effectively with vulnerable children
                  and young people.
                </p>
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
                <a href="/majors" className="border-btn border-btn2">
                  Find out more ...
                </a>
              </div>
            </div>
          </div>
          {/* Single */}
          {/* Single */}
          <div className="properties pb-20">
            <div className="properties__card">
              <div className="properties__img overlay1">
                <a href="#">
                  <Image
                    src="/assets/img/gallery/featured2.png"
                    alt="Smart watch showing the time in analog format"
                    style={{width: "100%", height: "auto", objectFit: "cover"}}
                    width={500}
                    height={300}
                  />
                </a>
              </div>
              <div className="properties__caption">
                <p>Javascript</p>
                <h3>
                  <a href="/majors">
                    Fundamentals of Javascript ES6+ for Web Application Design
                  </a>
                </h3>
                <p>
                  The automated process all your website tasks. Discover tools
                  and techniques to engage effectively with vulnerable children
                  and young people.
                </p>
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
                <a href="/majors" className="border-btn border-btn2">
                  Find out more ...
                </a>
              </div>
            </div>
          </div>
          {/* Single */}
          {/* Single */}
          <div className="properties pb-20">
            <div className="properties__card">
              <div className="properties__img overlay1">
                <a href="#">
                  <Image
                    src="/assets/img/gallery/featured3.png"
                    alt="Someone wearing blue long sleeve setting a smart watch"
                    style={{width: "100%", height: "auto", objectFit: "cover"}}
                    width={500}
                    height={300}
                  />
                </a>
              </div>
              <div className="properties__caption">
                <p>HTML5 & CSS3</p>
                <h3>
                  <a href="#">
                    Fundamentals of HTML5 & CSS3 for Web Application Design
                  </a>
                </h3>
                <p>
                  The automated process all your website tasks. Discover tools
                  and techniques to engage effectively with vulnerable children
                  and young people.
                </p>
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
                <a href="/majors" className="border-btn border-btn2">
                  Find out more ...
                </a>
              </div>
            </div>
          </div>
          {/* Single */}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourse;
