import React from 'react';
import Image from "next/image";
import { MediaRenderer } from "@/utils/mediarender";
import {IoAlertCircle} from "react-icons/io5";
import {StaticImageData} from "next/image";


// image 
import Featured1 from '@/assets/img/gallery/featured1.png';
import Featured2 from '@/assets/img/gallery/featured2.png';
import Featured3 from '@/assets/img/gallery/featured3.png';
import Featured4 from '@/assets/img/gallery/featured4.png';
import Featured5 from '@/assets/img/gallery/featured5.png';
import Featured6 from '@/assets/img/gallery/featured6.png';
import RatingStars from '@/utils/ratingrender';

// Define course type
interface Course {
  id: number;
  image: StaticImageData;
  category: string;
  title: string;
  description: string;
  rating: number;
  ratingCount: number;
  price: number;
}

// Course data array
const coursesData: Course[] = [
  {
    id: 1,
    image: Featured1,
    category: "User Experience/Interface",
    title: "Fundamentals of UI/UX for Web Application Design",
    description: "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: 4.5,
    ratingCount: 120,
    price: 135
  },
  {
    id: 2,
    image: Featured2,
    category: "User Experience/Interface",
    title: "Fundamentals of UI/UX for Web Application Design",
    description: "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: 4.5,
    ratingCount: 120,
    price: 135
  },
  {
    id: 3,
    image: Featured3,
    category: "User Experience/Interface",
    title: "Fundamentals of UI/UX for Web Application Design",
    description: "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: 4.5,
    ratingCount: 120,
    price: 135
  },
  {
    id: 4,
    image: Featured4,
    category: "User Experience/Interface",
    title: "Fundamentals of UI/UX for Web Application Design",
    description: "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: 4.5,
    ratingCount: 120,
    price: 135
  },
  {
    id: 5,
    image: Featured5,
    category: "User Experience/Interface",
    title: "Fundamentals of UI/UX for Web Application Design",
    description: "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: 4.5,
    ratingCount: 120,
    price: 135
  },
  {
    id: 6,
    image: Featured6,
    category: "User Experience/Interface",
    title: "Fundamentals of UI/UX for Web Application Design",
    description: "The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.",
    rating: 4.5,
    ratingCount: 120,
    price: 135
  }
];



export const FeaturedCourses = () => {
 

  return (
    <div className="flex w-full h-full p-[5%]">
      <div className="featured-con flex flex-col w-full h-full gap-10">
        <div className="featured-head flex w-full items-center justify-center text-2xl md:text-3xl font-bold">
          <h1>Our Featured Courses</h1>
        </div>

        <div className="featured-items w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="featured-item flex flex-col items-center justify-center w-full h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="item-img flex items-center justify-center w-full h-54 md:h-64 rounded-lg">
                <MediaRenderer
                  sources={[
                    {
                      type: "image",
                      url: course.image.src,
                      alt: course.title,
                    },
                  ]}
                  fallbackIcon={IoAlertCircle}
                  returnNull={false}
                  width='100%'
                  height='100%'
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div className="item-bottom flex flex-col items-center justify-center w-full h-full p-4 gap-4">
                <div className="it-title flex w-full items-center justify-start text-sm md:text-base font-thin opacity-60">
                  <p>{course.category}</p>
                </div>
                <h2 className="it-head flex w-full items-center justify-start text-lg md:text-xl font-semibold">
                  {course.title}
                </h2>
                <div className="it-desc flex w-full items-center justify-start text-sm md:text-base font-normal opacity-70">
                  {course.description}
                </div>
                <div className="it-info flex flex-row items-center justify-between w-full px-3">
                  <div className="rating flex flex-col items-start justify-center">
                    <div className="icons text-black/60">
                      <RatingStars rating={course.rating} size={16} color="#ff9900" />
                    </div>
                    <div className="text flex flex-row items-center justify-center gap-3 text-sm md:text-base font-[500]">
                      <span className="text-black/60">({course.rating})</span>
                      <p className="flex">based on {course.ratingCount}</p>
                    </div>
                  </div>
                  <span className="price">
                    <span className="currency">$</span>
                    <span className="digit">{course.price}</span>
                  </span>
                </div>
                <div className="item-btn flex w-full h-12 md:h-14 items-center justify-center border-[1px] rounded-lg text-base md:text-lg font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                  <span>Find Out More ...</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}