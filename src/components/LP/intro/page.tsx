import Inthumb from "@/assets/img/gallery/topic1.png";
import VideoRenderer from "@/utils/videoRenderer";
import {FaChartLine, FaCheck} from "react-icons/fa";

export const IntroCon = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row w-full h-full items-center justify-center p-[3%] gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col w-full lg:w-1/2 h-full items-start justify-center gap-4">
        {/* Icon Section */}
        <div className="flex w-20 h-20 rounded-full bg-black items-center justify-center text-white text-3xl">
          <FaChartLine />
        </div>

        {/* Heading Section */}
        <h1 className="text-4xl font-semibold text-black/70 lg:text-6xl lg:font-bold">
          Learn new skills online with top educators
        </h1>

        {/* Description Section */}
        <p className="text-lg font-light text-black/70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, autem?
          Sunt officia quisquam totam ut est non repellendus assumenda rerum?
        </p>

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
                Join millions of people from around the world learning together.
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

      {/* Video Section */}
      <div className="w-full lg:w-1/2 h-full max-w-[800px] min-h-[500px] mx-auto rounded-lg overflow-hidden shadow-lg">
        <VideoRenderer
          src="https://youtu.be/4xnV9l8yHhg?si=pfE9YxJ177kpBKcR"
          sourceType="youtube"
          thumbnail={Inthumb}
          controls={true}
          autoPlay={false}
        />
      </div>
    </div>
  );
};
