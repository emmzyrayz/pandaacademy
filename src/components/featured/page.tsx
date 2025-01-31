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

// Helper
// Add type guard functions
function isStaticImageData(image: string | StaticImageData | null): image is StaticImageData {
  return image !== null && typeof image !== 'string' && 'src' in image;
}

function isString(image: string | StaticImageData | null): image is string {
  return typeof image === 'string';
}


export const FeaturedCourses = () => {
  // Helper function to get image source and handle error tracking
  const getImageSource = (image: string | StaticImageData | null) => {
    if (isStaticImageData(image)) {
      return image.src;
    }
    if (isString(image)) {
      return image;
    }
    return null;
  };

  return (
    <div className="flex w-full h-full p-[5%]">
      <div className="featured-con flex flex-col w-full h-full gap-10">
        <div className="featured-head flex w-full items-center justify-center text-[28px] font-bold">
          <h1>Our Featured Courses</h1>
        </div>

        <div className="featured-items w-full h-full flex flex-row flex-wrap items-center justify-center gap-10 ">
          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured1) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured2) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured3) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured4) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured5) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured6) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured1) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured4) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured3) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>

          <div className="featured-item flex flex-col items-center justify-center w-[250px] md:w-[500px] h-full gap-2 shadow-xl rounded-lg cursor-pointer scale-100 hover:scale-105  hover:shadow-2xl transition-all duration-500 group">
            <div className="item-img flex items-center justify-center w-full h-1/2">
              <MediaRenderer
                sources={[
                  {
                    type: "image",
                    url: getImageSource(Featured6) || "",
                    alt: "Main image",
                  },
                ]}
                fallbackIcon={IoAlertCircle}
                returnNull={false}
                width={550}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="item-bottom flex flex-col items-center justify-center w-full h-1/2 p-[2%] gap-4">
              <div className="it-title flex w-full items-center justify-start text-[14px] font-thin opacity-60">
                <p>User Experience/Interface</p>
              </div>
              <h2 className="it-head flex w-full items-center justify-start text-[19px] font-semibold ">
                Fundamentals of UI/UX for Web Application Design
              </h2>
              <div className="it-desc flex w-full items-center justify-start text-[14px] font-normal opacity-70">
                The automated process all your website tasks. Discover tools and
                techniques to engage effectively with vulnerable children and
                young people.
              </div>
              <div className="it-info flex flex-row items-center justify-between w-full px-3">
                <div className="rating flex flex-col items-start justify-center">
                  <div className="icons text-black/60">startsss</div>
                  <div className="text flex flex-row items-center justify-center gap-3 text-[16px] font-[600]">
                    <span className="text-black/60">(4.5)</span>
                    <p className="flex">based on 120</p>
                  </div>
                </div>
                <span className="price">
                  <span className="currency">$</span>
                  <span className="digit">135</span>
                </span>
              </div>
              <div className="item-btn flex w-full h-[60px] items-center justify-center border-[1px] rounded-lg text-[18px] font-semibold group-hover:bg-black/70 hover:bg-black group-hover:text-white">
                <span>Find Out More ...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}