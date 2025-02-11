import {StaticImageData} from "next/image";

// image
import Top1 from "@/assets/img/gallery/featured1.png";
import Top2 from "@/assets/img/gallery/featured2.png";
import Top3 from "@/assets/img/gallery/featured3.png";
import Top4 from "@/assets/img/gallery/featured4.png";
import Top5 from "@/assets/img/gallery/featured5.png";
import Top6 from "@/assets/img/gallery/featured6.png";


import { MediaRenderer } from "@/utils/mediarender";
import { IoAlertCircle } from "react-icons/io5";

interface Topic {
  id: string;
  img: StaticImageData;
  title: string;
}

const topTopic: Topic[] = [
  {
    id: "1",
    img: Top1,
    title: "UI/UX",
  },
  {
    id: "2",
    img: Top2,
    title: "HTML5",
  },
  {
    id: "3",
    img: Top3,
    title: "CSS3",
  },
  {
    id: "4",
    img: Top4,
    title: "Javascript ES6+",
  },
  {
    id: "5",
    img: Top5,
    title: "JQuery",
  },
  {
    id: "6",
    img: Top6,
    title: "Tailwind CSS",
  },
  {
    id: "7",
    img: Top2,
    title: "NextJs",
  },
  {
    id: "8",
    img: Top4,
    title: "Git",
  },
];

export const TopCourse = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-full items-center justify-center p-4 md:p-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Explore Top Topics
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl">
        {topTopic.map((topic) => (
          <div
            key={topic.id}
            className="aspect-square rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl shadow-md"
          >
            <div className="relative w-full h-full group cursor-pointer">
              <div className="absolute inset-0 z-20">
                <MediaRenderer
                  sources={[
                    {
                      type: "image",
                      url: topic.img.src,
                      alt: topic.title,
                    },
                  ]}
                  fallbackIcon={IoAlertCircle}
                  returnNull={false}
                  width="100%"
                  height="100%"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 z-30 flex items-center justify-center transition-colors duration-500 group-hover:bg-black/50">
                <span className="text-lg md:text-xl font-semibold md:font-bold text-center px-4 transition-colors duration-500 group-hover:text-white group-hover:font-underline">
                  {topic.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full max-w-[240px] h-[60px] text-lg lg:text-xl font-medium border-2 border-black/70 rounded transition-all duration-300 hover:bg-black hover:text-white">
        View More Subjects
      </button>
    </div>
  );
};
