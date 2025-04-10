'use client'

import { CourseCard } from "./courseCard"
import { CourseTab } from "./courseTab";

export const TopCourse = () => {

    return (
      <div className="con flex flex-col w-full h-full py-2 items-start justify-center gap-4">
        <div className="top-course flex flex-col gap-3 w-full">
          <div className="title text-[24px] font-bold">
            <span>Our Top Courses</span>
          </div>
          <div className="course-con flex flex-row flex-wrap gap-4 w-full items-center justify-center">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
        <div className="my-courses flex flex-col w-full">
          <div className="flex flex-row w-full items-center justify-between px-4 mb-4">
            <div className="title text-[24px] font-bold">
              <span>My Courses</span>
            </div>
            <div className="more text-[18px] font-semibold cursor-pointer hover:underline">
              <span>View All</span>
            </div>
          </div>
          <div className="course-con flex flex-col items-center justify-center w-full overflow-hidden ">
            <CourseTab />
            <CourseTab />
            <CourseTab />
            <CourseTab />
            <CourseTab />
            <CourseTab />
          </div>
        </div>
      </div>
    );
}