import Image from "next/image";

import Post1 from "@/assets/img/gallery/pc-code3.jpg";
import Post2 from "@/assets/img/gallery/pc-code2.jpg";
import Post3 from "@/assets/img/gallery/pc-code4.jpg";
import Post4 from "@/assets/img/gallery/pc-code1.jpg";
import {IoBookmarkOutline} from "react-icons/io5";
import {GiRoundStar} from "react-icons/gi";
import {LuUsers} from "react-icons/lu";
import { CourseTab } from "@/components/courses/courseTab";

// Mock data - replace with your actual data
const courses = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laudantium?",
    level: "Beginner",
    image: Post1,
    viewers: 118,
    rating: 4.5,
    instructor: "Mr John Doe",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laudantium?",
    level: "Intermediate",
    image: Post2,
    viewers: 118,
    rating: 4.5,
    instructor: "Mr John Doe",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laudantium?",
    level: "Beginner",
    image: Post3,
    viewers: 118,
    rating: 4.5,
    instructor: "Mr John Doe",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laudantium?",
    level: "Advance",
    image: Post4,
    viewers: 118,
    rating: 4.5,
    instructor: "Mr John Doe",
  },
  {
    id: 5,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laudantium?",
    level: "Beginner",
    image: Post1,
    viewers: 118,
    rating: 4.5,
    instructor: "Mr John Doe",
  },
  {
    id: 6,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laudantium?",
    level: "Beginner",
    image: Post2,
    viewers: 118,
    rating: 4.5,
    instructor: "Mr John Doe",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start">
      <div className="top-course flex flex-col w-full  gap-5 p-4">
        <div className="header flex flex-row w-full items-center justify-between p-3 text-[18px] xl:text-[20px] font-semibold">
          <span>Top courses you may like</span>
          <span className="view-btn text-purple-600 hover:underline cursor-pointer">
            View all
          </span>
        </div>

        {/* Responsive Grid Container */}
        <div className="course-container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card flex flex-col w-full h-full items-center justify-center p-4 relative bg-white/40 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer gap-3 border border-black/10 "
            >
              <div className="flex w-full h-48 items-center justify-center relative rounded-2xl overflow-hidden">
                <div className="icon absolute flex items-center justify-center text-[22px] top-3 right-3 p-3 rounded-full text-gray-400 bg-white/40 hover:bg-white/70 hover:text-white/70 transition-all duration-500 ease-in-out">
                  <IoBookmarkOutline />
                </div>
                <div className="w-full h-full bg-gray-200">
                  {/* Replace with your actual image component */}
                  <Image
                    src={course.image}
                    alt="card image"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="belt flex flex-row items-center justify-between w-full px-2">
                <div className="tag text-[14px] font-semibold text-green-700 bg-green-100 p-2 rounded-xl">
                  {course.level}
                </div>
                <div className="info flex flex-row items-center gap-4 text-[14px] font-medium text-gray-500">
                  <div className="viewers flex flex-row items-center justify-center gap-1">
                    <div className="icon">
                      <LuUsers />
                    </div>
                    <span className="text">{course.viewers}</span>
                  </div>
                  <div className="rating flex flex-row items-center justify-center gap-1">
                    <div className="icon text-yellow-400">
                      <GiRoundStar />
                    </div>
                    <span className="text">{course.rating}</span>
                  </div>
                </div>
              </div>

              <div className="down flex flex-col w-full items-center justify-center gap-2">
                <div className="flex flex-row w-full items-center justify-center text-[13px] font-semibold text-center">
                  {course.title}
                </div>
                <div className="user flex w-full items-center justify-start gap-2 px-2 py-1">
                  <div className="flex items-center justify-center">
                    <div className="w-[40px] h-[40px] rounded-xl shadow-lg bg-gray-200">
                      <Image
                        src={course.image}
                        alt=""
                        width={100}
                        height={100}
                        className="w-[40px] h-[40px] rounded-xl shadow-lg object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex text-[14px] font-semibold text-purple-700 h-full items-center justify-center">
                    {course.instructor}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="course-tab flex flex-col w-full items-center justify-start gap-3 p-2">
        <CourseTab />
        <CourseTab />
        <CourseTab />
        <CourseTab />
      </div>
    </div>
  );
}
