"use client";
import {useParams} from "next/navigation";
import majorData from "../../../../../components/_lib/data/courses.json";
import Link from "next/link";
import "../../../style.css";

const TopicDetail = () => {
  const params = useParams();
  const {majorId, courseId, topicId} = params;

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

  // Find the topic within the course
  const topic = course.topics.find((t) => t.topicId === topicId);

  if (!topic) {
    return <p>Topic not found</p>;
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
                        <li className="breadcrumb-item">
                          <a
                            href={`/courses/${major.majorId}/${course.courseId}`}
                          >
                            {course.courseName}
                          </a>
                        </li>
                        <li className="breadcrumb-item">
                          <a
                            href={`/courses/${major.majorId}/${course.courseId}/${topic.topicId}`}
                          >
                            {topic.topicName}
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
      <div>
        <h1>{topic.topicName}</h1>
        <p>{topic.topicDescription}</p>
        <div>
          <Link href={`/majors/${majorId}/${courseId}`}>
            <span className="border-btn border-btn2">Back to Course</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
