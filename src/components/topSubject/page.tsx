import "./style.css";
import Image from "next/image";

function TopTopic() {
  return (
    <div className="topic-area section-padding40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="section-tittle text-center mb-55">
              <h2>Explore top Topics</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="single-topic text-center mb-30">
              <div className="topic-img">
                <Image
                  src="/assets/img/gallery/topic1.png"
                  alt=""
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
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
                <Image
                  src="/assets/img/gallery/topic2.png"
                  alt=""
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
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
                <Image
                  src="/assets/img/gallery/topic3.png"
                  alt=""
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
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
                <Image
                  src="/assets/img/gallery/topic4.png"
                  alt=""
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
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
                <Image
                  src="/assets/img/gallery/topic5.png"
                  alt=""
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
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
                <Image
                  src="/assets/img/gallery/topic6.png"
                  alt=""
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
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
                <Image
                  src="/assets/img/gallery/topic7.png"
                  alt=""
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
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
                <Image
                  src="/assets/img/gallery/topic8.png"
                  alt=""
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
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
  );
}

export default TopTopic;
