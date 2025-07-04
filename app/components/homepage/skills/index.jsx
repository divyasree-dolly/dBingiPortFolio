// @flow strict

"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import React, { useState } from "react";

function Skills() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6]"></span>
          <span className="dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6] w-fit text-white dark:text-[black] p-2 px-5 text-xl rounded-md">
            SKILLS
          </span>
          <span className="w-24 h-[2px] dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6]"></span>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          className="dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6] text-white px-4 py-2 rounded-md text-sm hover:bg-[#2a2928] transition"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      <div className="w-full my-12">
        {!showAll ? (
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#8b6c6c] dark:bg-[#8b95b6] shadow-none shadow-gray-50 group-hover:border-violet-500  transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-lg whitespace-nowrap">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillsData.map((skill, id) => (
              <div className="w-36 h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#8b6c6c] dark:bg-[#8b95b6] shadow-none shadow-gray-50 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-full rounded-lg"
                      />
                    </div>
                    <p className="dark:text-white text-[black] text-sm sm:text-lg whitespace-nowrap">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;