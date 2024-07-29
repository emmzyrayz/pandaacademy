"use client"

import {notFound} from "next/navigation";
import {useParams} from "next/navigation";
import Link from "next/link";
import majorData from "../../../../components/_lib/data/courses.json";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import "../../style.css";

// Define the expected shape of the parameters
interface Params {
  majorId?: string;
  courseId?: string;
}


function CourseDetail() {
  // Type the params as Params
  const params = useParams() as Params;

  // Destructure and handle the possibility of undefined values
  const {majorId, courseId} = params;

  // Find the major
  const major = majorData.majors.find((m) => m.majorId === majorId);

  if (!major) {
    return <p>Major not found</p>;
  }
  // Find the course within the major
  const course = major.courses.find((c) => c.courseId === `/${courseId}`);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <section className="slider-area slider-area2">
        <div className="slider-active">
          {/* <!-- Single Slider --> */}
          <div className="single-slider slider-height2">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-11 col-md-12">
                  <div className="hero__caption hero__caption2">
                    <h1 data-animation="bounceIn" data-delay="0.2s">
                      {course.courseId} courses
                    </h1>
                    {/* <!-- breadcrumb Start--> */}
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="/majors">Majors</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href={`/courses/${major.majorId}`}>
                            {major.majorName}
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a
                            href={`/courses/${major.majorId}/${course.courseId}`}
                          >
                            {course.courseName}
                          </a>
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
      {course.topics.map((topic) => (
        <div className="container course-con" key={topic.topicId}>
          <div className="main-con">
            <div className="left-con">
              {/* <i className={`${topic.topicIcon} topicIcon`}></i> */}
            </div>
            <div className="right-con">
              <h2>{topic.topicName}</h2>
              <p>{topic.topicDescription}</p>
            </div>
            <div className="drop-icon">
              <FontAwesomeIcon icon={faAngleUp} />
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          <div>
            <ul>
              <li>{topic.topicName}</li>
            </ul>
            <Link href={`/majors/${majorId}/${courseId}/${topic.topicId}`}>
              <span className="border-btn border-btn2">Find out more</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseDetail;
