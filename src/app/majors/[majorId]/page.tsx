// /majors/[majorId]/page.tsx
"use client"
import { useState } from "react";
import {useParams} from "next/navigation";
import majorData from "../../../components/_lib/data/courses.json";
import "../style.css";
import Link from "next/link";
import '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

// Define the expected shape of the parameters
interface Params {
  majorId?: string;
}


const MajorPage = () => {
  // Type the params as Params
  const params = useParams() as Params;

  // Destructure and handle the possibility of undefined values
  const {majorId} = params;
  
  const majors = majorData.majors;
  const major = majors.find((m) => m.majorId === majorId);

  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  const handleCourseClick = (courseId: string) => {
    setActiveCourseId((prevId) => (prevId === courseId ? null : courseId));
  };

  if (!major) {
    return <p>Major not found</p>;
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
                      {major.majorId} courses
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
      {major.courses.map((course) => (
        <div className="container course-con" key={course.courseId}>
          <div
            className="main-con"
            onClick={() => handleCourseClick(course.courseId)}
          >
            <div className="left-con">
              <i className={`${course.courseIcon} courseIcon`}></i>
            </div>
            <div className="right-con">
              <h2>{course.courseName}</h2>
              <p>{course.description}</p>
            </div>
            <div className="drop-icon">
              <FontAwesomeIcon
                className={`up-icon ${
                  activeCourseId === course.courseId ? "active" : ""
                }`}
                icon={faAngleUp}
              />
              <FontAwesomeIcon
                className={`down-icon ${
                  activeCourseId !== course.courseId ? "active" : ""
                }`}
                icon={faAngleDown}
              />
            </div>
          </div>
          <div
            className={`drop-con ${
              activeCourseId === course.courseId ? "active" : ""
            }`}
          >
            <ul>
              {course.topics.map((topic) => (
                <li key={topic.topicId}>{topic.topicName}</li>
              ))}
            </ul>
            <Link href={`/majors/${major.majorId}/${course.courseId}`}>
              <span className="border-btn border-btn2">Find out more</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MajorPage;
