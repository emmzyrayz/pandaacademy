'use client'

import { Expert } from "@/components/LP/expert/page";
import { Join } from "@/components/LP/join/page";
import {Banner} from "@/components/LP/banner/page";
import {FeaturedCourses} from "@/components/LP/featured/page";
import {IntroCon} from "@/components/LP/intro/page";
import {TopCourse} from "@/components/LP/topCourse/page";
import {AboutCon} from "@/components/LP/about/page";
import { LpNavbar } from "@/components/navbar/page";
import { Footer } from "@/components/footer/page";

export default function landingPage()  {

    return (
      <div className="">
        <div className="bg-white flex flex-col w-full h-full items-center justify-center">
          <LpNavbar />
          <Banner />
          <FeaturedCourses />
          <IntroCon />
          <TopCourse />
          <AboutCon />
          <Expert />
          <Join />
          <Footer />
        </div>
      </div>
    );
}