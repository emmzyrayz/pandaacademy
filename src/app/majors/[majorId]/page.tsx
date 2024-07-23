// /majors/[majorId]/page.tsx
"use client"
import {useParams} from "next/navigation";
import {majors} from "../../../components/_lib/data/courses.json";
import "../style.css"
import "preline"

const MajorPage = () => {
  const params = useParams();
  const {majorId} = params;
  const major = majors.find((m) => m.majorId === majorId);

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
        <div className="grid grid-cols-2 gap-2" key={course.courseId}>
          <div>
            <i className={`${course.courseIcon} courseIcon`}></i>
            <h2>{course.courseName}</h2>
          </div>
          <p>{course.description}</p>
          <ul>
            {course.topics.map((topic) => (
              <li key={topic.topicId}>{topic.topicName}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MajorPage;
