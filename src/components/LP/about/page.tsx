import { MediaRenderer } from "@/utils/mediarender"
import { IoAlertCircle } from "react-icons/io5";
import AboutPng from '@/assets/img/gallery/about3.png'
import { StaticImageData } from "next/image";
import { FaCheck } from "react-icons/fa6";

interface AboutProp {
  img: StaticImageData;
}

const AboutData: AboutProp[] = [
    {
        img: AboutPng,
    },
]



export const AboutCon = () => {

    return (
      <div className="flex flex-col w-full h-full p-4 md:p-8 gap-5">
        <div className="relative w-full h-full pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <MediaRenderer
              sources={[
                {
                  type: "image",
                  url: AboutData[0].img,
                  alt: "about",
                  priority: true,
                },
              ]}
              fallbackIcon={IoAlertCircle}
              returnNull={false}
              className="w-full h-full"
              containerStyle={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
          </div>
        </div>

        <div className="text">
          <div className="title">
            Learner outcomes on courses youu will take
          </div>
          {/* List Section */}
          <div className="flex flex-col gap-4 w-full">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full mt-1">
                  <FaCheck className="text-sm" />
                </div>
                <span className="text-lg font-light text-black/70">
                  Techniques to engage effectively with vulnerable children and
                  young people.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full mt-1">
                  <FaCheck className="text-sm" />
                </div>
                <span className="text-lg font-light text-black/70">
                  Join millions of people from around the world learning
                  together.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full mt-1">
                  <FaCheck className="text-sm" />
                </div>
                <span className="text-lg font-light text-black/70">
                  Online learning is as easy and natural.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
}