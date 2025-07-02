// @flow strict
"use client";


import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/AnimationLottieClient";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6]"></span>
          <span className="dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6] w-fit dark:text-[black] text-white p-2 px-5 text-xl rounded-md">
            EXPERIENCE
          </span>
          <span className="w-24 h-[2px] dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative bg-[#8b6c6c] dark:bg-[#ddcaca] rounded-lg">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm  text-[#22186add] dark:text-[#7c3131d5]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className=" text-[black] dark:text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-black">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base text-black">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;