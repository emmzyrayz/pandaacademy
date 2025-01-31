'use client'

import { Banner } from "@/components/banner/page";
import { FeaturedCourses } from "@/components/featured/page";
import { Navbar } from "@/components/navbar/page";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const handleResize = () => {
      console.log("Window width:", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='bg-white'>
     <Navbar />
     <Banner />
     <FeaturedCourses />
    </div>
  );
}
