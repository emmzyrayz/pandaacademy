
import Image from "next/image";

// Photos
import Post1 from "@/assets/img/post/post_1.png";
import Post2 from "@/assets/img/post/post_2.png";
import Post3 from "@/assets/img/post/post_3.png";
import Post4 from "@/assets/img/post/post_4.png";

import ava1 from "@/assets/img/people/avatar/author.png";
import ava2 from "@/assets/img/people/avatar/comment_1.png";
import ava3 from "@/assets/img/people/avatar/comment_2.png";
import ava4 from "@/assets/img/people/avatar/comment_3.png";




export const CourseTab = () => {

    return (
      <section className="tab-con flex flex-row w-[95%] h-[100px] p-2 items-center justify-between bg-white/40 border border-black/10 cursor-pointer shadow-xl hover:w-[96%] hover:shadow-2xl rounded-xl hover:scale-105 duration-500 transition-all ease-in-out">
        <div className="info flex flex-row gap-2 items-center justify-center">
          <div className="img flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black">
            <Image
              src={ava1}
              alt="course 1"
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text  flex flex-col items-start justify-center gap-0">
            <div className="title text-[14px] font-semibold">
              <p>AI & Virtual Reality 🎮</p>
            </div>
            <div className="sub flex flex-row flex-nowrap text-nowrap text-[12px] ">
              <span>Session Completed: 9/12</span>
            </div>
          </div>
        </div>

        <div className="mates flex flex-row items-center justify-end h-full ">
          <hr className="h-[2px] w-[40px] rounded-lg bg-black/50 border-none rotate-[90deg] translate-x-[50px]" />
          <div className="mate-items flex w-full items-center justify-end translate-x-[50px] ">
            <div className="mate-item flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black border-[2px] border-white">
              <Image
                src={ava1}
                alt="course 1"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mate-item flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black -translate-x-[10px] border-[2px] border-white">
              <Image
                src={ava1}
                alt="course 1"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mate-item flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black -translate-x-[20px] border-[2px] border-white">
              <Image
                src={ava1}
                alt="course 1"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mate-item flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black -translate-x-[30px] border-[2px] border-white">
              <Image
                src={ava1}
                alt="course 1"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mate-item flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black -translate-x-[40px] border-[2px] border-white">
              <Image
                src={ava1}
                alt="course 1"
                width={300}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mate-item flex items-center justify-center w-[40px] h-[40px] rounded-full bg-black/70 -translate-x-[50px] border-[2px] border-white">
              <span className="w-full h-full flex items-center justify-center text-[16px] font-semibold text-white">
                +17
              </span>
            </div>
          </div>
        </div>
      </section>
    );
}