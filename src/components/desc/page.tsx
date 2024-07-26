import "./style.css";
import "../../app/ext-style.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Image from "next/image";

function AboutA1() {
  return (
    <section className="about-area1 fix pt-10">
      <div className="support-wrapper align-items-center">
        <div className="left-content1">
          <div className="about-icon">
            <Image
              src="/assets/img/icon/about.svg"
              alt=""
              style={{width: "100%", height: "auto", objectFit: "cover"}}
              width={500}
              height={300}
            />
          </div>
          {/* <!-- section tittle --> */}
          <div className="section-tittle section-tittle2 mb-55">
            <div className="front-text">
              <h2 className="">Learn new skills online with top educators</h2>
              <p>
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </p>
            </div>
          </div>
          <div className="single-features">
            <div className="features-icon">
              <Image
                src="/assets/img/icon/right-icon.svg"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="features-caption">
              <p>
                Techniques to engage effectively with vulnerable children and
                young people.
              </p>
            </div>
          </div>
          <div className="single-features">
            <div className="features-icon">
              <Image
                src="/assets/img/icon/right-icon.svg"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={300}
                height={200}
              />
            </div>
            <div className="features-caption">
              <p>
                Join millions of people from around the world learning together.
              </p>
            </div>
          </div>

          <div className="single-features">
            <div className="features-icon">
              <Image
                src="/assets/img/icon/right-icon.svg"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="features-caption">
              <p>
                Join millions of people from around the world learning together.
                Online learning is as easy and natural.
              </p>
            </div>
          </div>
        </div>
        <div className="right-content1">
          {/* <!-- img --> */}
          <div className="right-img">
            <Image
              src="/assets/img/gallery/about2.png"
              alt=""
              style={{width: "100%", height: "auto", objectFit: "fill"}}
              width={500}
              height={300}
            />

            <div className="video-icon">
              <a
                className="popup-video btn-icon"
                href="https://www.youtube.com/watch?v=up68UAfH0d0"
              >
                <i className="fas fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutA2() {
  return (
    <section className="about-area2 fix pb-padding">
      <div className="support-wrapper align-items-center">
        <div className="right-content2">
          {/* <!-- img --> */}
          <div className="right-img">
            <Image
              src="/assets/img/gallery/about2.png"
              alt=""
              style={{width: "100%", height: "auto", objectFit: "cover"}}
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="left-content2">
          {/* <!-- section tittle --> */}
          <div className="section-tittle section-tittle2 mb-20">
            <div className="front-text">
              <h2 className="">
                Take the next step toward your personal and professional goals
                with us.
              </h2>
              <p>
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </p>
              <a href="/register" className="btn">
                Join now for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutA3() {
  return (
    <section className="about-area3 fix">
      <div className="support-wrapper align-items-center">
        <div className="right-content3">
          {/* <!-- img --> */}
          <div className="right-img">
            <Image
              src="/assets/img/gallery/about3.png"
              alt=""
              style={{width: "100%", height: "auto", objectFit: "cover"}}
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="left-content3">
          {/* <!-- section tittle --> */}
          <div className="section-tittle section-tittle2 mb-20">
            <div className="front-text">
              <h2 className="">Learner outcomes on courses you will take</h2>
            </div>
          </div>
          <div className="single-features">
            <div className="features-icon">
              <Image
                src="/assets/img/icon/right-icon.svg"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="features-caption">
              <p>
                Techniques to engage effectively with vulnerable children and
                young people.
              </p>
            </div>
          </div>
          <div className="single-features">
            <div className="features-icon">
              <Image
                src="/assets/img/icon/right-icon.svg"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="features-caption">
              <p>
                Join millions of people from around the world learning together.
              </p>
            </div>
          </div>
          <div className="single-features">
            <div className="features-icon">
              <Image
                src="/assets/img/icon/right-icon.svg"
                alt=""
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                width={500}
                height={300}
              />
            </div>
            <div className="features-caption">
              <p>
                Join millions of people from around the world learning together.
                Online learning is as easy and natural.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export {AboutA1, AboutA2, AboutA3};
