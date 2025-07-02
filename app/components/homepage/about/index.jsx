// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="dark:bg-[#ddcaca] bg-gradient-to-r from-[#351b1b] to-[#8b6c6c]
                 dark:from-[#b470aa] dark:to-[#8b95b6] w-fit dark:text-black text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[black] dark:text-[white] text-xl uppercase">
            ABOUT ME
          </p>
          <p className="dark:text-gray-200 text-[#2c2b2b] text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            alt="Divyasree Bingi"
            width={270}    // adjust as needed for display size
            height={355}   // maintain the aspect ratio (e.g., 270:355 ≈ 768:1005)
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;