'use client'
import { useState } from 'react';
import Image from 'next/image'

import './style.css'
import {FaPlus, FaArrowRotateRight, FaChevronDown} from "react-icons/fa6";
import {RxDragHandleDots2, RxDotsHorizontal} from "react-icons/rx";
import RichTextEditor from "@/components/RichTextEditor";

import CoverImg from '@/assets/img/gallery/pc-code3.jpg'


export default function CourseUpload() {

  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseContent, setCourseContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the course data
    const courseData = {
      title: courseTitle,
      description: courseDescription,
      content: courseContent,
      // Add other course fields as needed
    };

    // Send the data to your API endpoint
    try {
      const response = await fetch("/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
      });

      if (response.ok) {
        alert("Course saved successfully!");
        // Optionally redirect to course list or dashboard
        // router.push('/courses');
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error saving course:", error);
      alert("Failed to save course. Please try again.");
    }
  };

    return (
      <main className="main-con flex flex-col w-full h-full items-start justify-center p-2 ">
        <div className="bread-crumb text-[12px] xl:text-[14px]">
          <span className="faint">My Classroom</span>/
          <span className="faint">My Courses</span>/{" "}
          <span className="solid">
            Beginner&apos;s Guide to successful Company management: Business and
            User Goals
          </span>
        </div>

        <div className="upload-section flex flex-col items-center justify-center gap-3 w-full h-full">
          <div className="top flex flex-row w-full items-center justify-between py-2 px-1">
            <div className="titles text-[18px] xl:text-[20px] font-medium xl:font-semibold">
              <h2>
                Beginner&apos;s Guide to successful Company management: Business
                and User Goals
              </h2>
            </div>
            <div className="upload-btns flex flex-row gap-3">
              <span className="cancel titles text-[16px] transition-all duration-500 ease-in-out hover:bg-purple-200 xl:text-[18px] shadow-md hover:shadow-xl font-semibold cursor-pointer">
                Cancel
              </span>
              <span className="save text-black bg-purple-300 hover:bg-purple-400 titles text-[16px] xl:text-[18px] font-semibold cursor-pointer transition-all duration-500 ease-in-out shadow-md hover:shadow-xl">
                Save
              </span>
            </div>
          </div>
          <div className="bottom flex flex-row w-full h-full gap-1 ">
            <div className="basic flex flex-col w-full items-start justify-center p-3 border shadow-md border-gray-300 rounded-md gap-4">
              <h2 className="flex text-[22px] font-semibold xl:text-[24px] xl:font-bold py-3">Basic info</h2>
              <div className="name-input flex flex-col w-full item-start justify-center gap-1">
                <span className="text-[14px] font-semibold xl:text-[18px] xl:font-bold">Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Beginner's Guide to successful Company management: Business and
                User Goals"
                className='border border-gray-300 p-2 pl-4  rounded-md text-black font-medium'
                />
              </div>

              <div className="descri-input flex flex-col w-full items-start justify-center gap-1">
                <span className="text">Description</span>
                <div className="input-con">
                  <RichTextEditor
                    content={courseContent}
                    onChange={setCourseContent}
                  />
                  <span className="character-count">275 characters left</span>
                </div>
              </div>

              <div className="cover-image">
                <div className="head-t">
                  <h3>Cover image</h3>
                  <div className="t-btn">
                    <FaArrowRotateRight />
                    <span>Click to change</span>
                  </div>
                </div>
                <div className="image-con">
                  <Image alt="" src={CoverImg} width={500} height={300} />
                </div>
              </div>

              <div className="content-con shadow-lg border flex flex-col w-full h-full my-2 border-gray-200 p-2 rounded-[12px]">
                <div className="head flex flex-row w-full items-center justify-between py-4">
                  <span className='text-[20px] font-semibold xl:text-[22px] xl:font-bold'>Content</span>
                  <div className="head-btn flex flex-row items-center justify-center gap-2 text-[14px] font-medium xl:text-[16px] xl:font-semibold text-purple-600">
                    <FaPlus />
                    <span>Add new section</span>
                  </div>
                </div>

                <div className="content-tabs flex flex-col w-full h-full ">
                  <div className="content-tab flex flex-row items-center justify-between border border-gray-300 px-4 py-3 rounded-[10px] shadow-md hover:shadow-xl hover:-translate-y-[3px] hover:border-gray-400 cursor-pointer transition-all duration-500 ease-in-out w-full">
                    <div className="right flex flex-row w-[40px]  items-center justify-start text-[26px]">
                      <div className="move-icon">
                        <RxDragHandleDots2 className="drag" />
                      </div>
                    </div>
                    <div className="middle flex flex-row w-full items-center justify-between  gap-[10px] px-4">
                      <div className="join flex flex-row items-center justify-start gap-4">
                        <div className="icon text-[18px] text-gray-500 font-light">
                          <FaChevronDown />
                        </div>
                        <span className="text-[16px] xl:text-[18px] font-medium xl:font-semibold">
                          week 1 - Beginner - Introduction to Business
                          Management
                        </span>
                      </div>
                      <div className="edit-btn flex items-center justify-center w-[100px] h-[30px] border border-gray-400 rounded-[6px] hover:shadow-md text-[14px] xl:text-[16px] font-medium xl:font-semibold">
                        <span>Edit</span>
                      </div>
                    </div>
                    <div className="left flex flex-row items-center justify-end text-[26px] w-[40px]">
                      <div className="opt-icon">
                        <RxDotsHorizontal />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details"></div>
          </div>
        </div>
      </main>
    );
}