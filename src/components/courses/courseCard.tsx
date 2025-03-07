'use client'

import {useState} from 'react';
import Image from 'next/image';


// Photos
import Post1 from '@/assets/img/post/post_1.png';
import Post2 from '@/assets/img/post/post_2.png';
import Post3 from '@/assets/img/post/post_3.png';
import Post4 from '@/assets/img/post/post_4.png';

import ava1 from '@/assets/img/people/avatar/author.png'
import ava2 from "@/assets/img/people/avatar/comment_1.png";
import ava3 from '@/assets/img/people/avatar/comment_2.png';
import ava4 from "@/assets/img/people/avatar/comment_3.png";

// icons
import { LuUsers } from "react-icons/lu";
import { FaUserGroup } from "react-icons/fa6";
import {IoBookmarkOutline, IoBookmark} from "react-icons/io5";
import { GiRoundStar } from "react-icons/gi";

import RatingStars from '@/utils/ratingrender';

export const CourseCard = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
      <div className="flex flex-col w-[300px] h-[400px] items-center justify-center px-2 py-3 relative bg-white/40 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out gap-3 border-[1px] border-solid border-black/10 cursor-pointer">
        <div className="flex w-full h-[300px] items-center justify-center relative rounded-2xl overflow-hidden">
          <div className="icon absolute flex items-center justify-center text-[22px] top-3 right-3 w-[45px] h-[45px] rounded-full bg-white/50 hover:bg-black/50 hover:text-white/70">
            <IoBookmarkOutline />
          </div>
          <Image
            src={Post1}
            alt="card image"
            width={200}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="belt flex flex-row items-center justify-between w-full px-2">
          <div className="tag text-[14px] font-medium text-green-400 bg-green-100 p-2 rounded-xl">
            Beginner
          </div>
          <div className="info flex flex-row items-center gap-4 text-[14px] font-medium">
            <div className="viewers flex flex-row items-center justify-center gap-1">
              <div className="icon">
                <LuUsers />
              </div>
              <span className="text">118</span>
            </div>
            <div className="rating flex flex-row items-center justify-center gap-1">
              <div className="icon text-yellow-400">
                <GiRoundStar />
              </div>
              <span className="text">4.5</span>
            </div>
          </div>
        </div>
        <div className="down flex flex-col w-full items-center justify-center gap-2 ">
          <div className="flex flex-row w-full items-center justify-center text-[13px] font-medium text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            laudantium?
          </div>
          <div className="user flex w-full items-center justify-start gap-2 px-2 py-1">
            <div className="flex items-center justify-center">
              <Image
                src={ava1}
                alt=""
                width={100}
                height={100}
                className="w-[40px] h-[40px] rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="flex  h-full items-center justify-center ">Mr John Doe</div>
          </div>
        </div>
      </div>
    );
}