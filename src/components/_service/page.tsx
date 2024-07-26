import "./style.css";
import "../../app/ext-style.css";
import Image from "next/image";

function Service() {
  return (
    // {/* Services Area */}
    <div className="services-area">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="single-services mb-30">
              <div className="features-icon">
                <Image
                  src="/assets/img/icon/icon1.svg"
                  alt="Books"
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
              </div>
              <div className="features-caption">
                <h3>60+ UI/UX Courses</h3>
                <p>The automated Process all your website task.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="single-services mb-30">
              <div className="features-icon">
                <Image
                  src="/assets/img/icon/icon2.svg"
                  alt="Books"
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
              </div>
              <div className="features-caption">
                <h3>Expert Instructors</h3>
                <p>The automated Process all your website task.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="single-services mb-30">
              <div className="features-icon">
                <Image
                  src="/assets/img/icon/icon3.svg"
                  alt="Books"
                  style={{width: "100%", height: "auto", objectFit: "cover"}}
                  width={500}
                  height={300}
                />
              </div>
              <div className="features-caption">
                <h3>Life Time Access</h3>
                <p>The automated Process all your website task.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
