"use client";

import React, {useRef} from "react";
import {MediaRenderer} from "@/utils/mediarender";
import {StaticImageData} from "next/image";
import {IoAlertCircle} from "react-icons/io5";

// Images
import Team1 from "@/assets/img/people/avatar/team1.png";
import Team2 from "@/assets/img/people/avatar/team2.png";
import Team3 from "@/assets/img/people/avatar/team3.png";
import Team4 from "@/assets/img/people/avatar/tam4.png";
import Team5 from "@/assets/img/people/avatar/author.png";

interface ExpertProp {
  img: StaticImageData;
  name: string;
  text: string;
}

const expertData: ExpertProp[] = [
  {
    img: Team1,
    name: "Mr Saiful",
    text: "I am a boy",
  },
  {
    img: Team2,
    name: "Mr Saiful",
    text: "I am a boy",
  },
  {
    img: Team3,
    name: "Mrs Sarah",
    text: "I am a boy",
  },
  {
    img: Team4,
    name: "Mrs Joyful",
    text: "I am a boy",
  },
  {
    img: Team5,
    name: "Mr Saiful",
    text: "I am a boy",
  },
];

export const Expert = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full h-full p-[3%]">
      <div className="flex w-full h-full items-center justify-center text-2xl md:text-4xl md:font-bold font-semibold">
        <span>Community Experts</span>
      </div>

      <div
        ref={containerRef}
        className="flex flex-row items-center justify-start gap-6 w-full h-full overflow-x-auto scroll-smooth scrollbar-hide whitespace-nowrap"
      >
        {[...expertData, ...expertData].map((expert, index) => (
          <div
            key={index}
            className="inline-flex flex-shrink-0 flex-col items-center justify-center w-[280px] h-full gap-4 p-4 transition-transform duration-700 hover:rotate-[360deg]"
          >
            <div className="flex items-center justify-center w-[240px] h-[240px] rounded-full bg-black/70 relative">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: expert.img,
                    alt: `${expert.name} avatar`,
                    priority: true,
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                className="w-[190px] h-[190px]"
                containerStyle={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="text-xl font-semibold">{expert.name}</h2>
              <span className="text-[18px] font-[500]">{expert.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
