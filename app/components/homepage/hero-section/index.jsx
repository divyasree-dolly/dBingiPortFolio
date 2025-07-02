// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDiscord, FaHackerrank } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            <span className="text-[#2d2e2e] dark:text-[#d1cdcd]">
              Hello, <br />
              This is{' '}
            </span>
            <span className="text-[black] dark:text-[white]">{personalData.name} </span>
            <span className="text-[#2d2e2e] dark:text-[#d1cdcd]">{` , I'm a Professional `} </span>
            <span className="text-[black] dark:text-[white]">{personalData.designation}</span>
            
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all dark:text-pink-500 text-[#573339] hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all dark:text-pink-500 text-[#573339] hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.discord}
              target='_blank'
              className="transition-all dark:text-pink-500 text-[#573339] hover:scale-125 duration-300"
            >
              <FaDiscord size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all dark:text-pink-500 text-[#573339] hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.hackerRank}
              target='_blank'
              className="transition-all dark:text-pink-500 text-[#573339] hover:scale-125 duration-300"
            >
              <FaHackerrank size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button
                className="
                  px-3 text-xs md:px-8 py-3 md:py-4
                  rounded-full border
                  dark:border-[#0d1224] border-[white]
                  text-center md:text-sm font-medium uppercase tracking-wider
                  dark:bg-[#ddcaca] dark:text-[#0d1224]
                  bg-[#2a2928] text-white
                  no-underline transition-all duration-200 ease-out md:font-semibold
                  flex items-center gap-1 hover:gap-3
                  dark:hover:bg-[#e5b896] hover:bg-[#222121]
                "
              >
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="
                flex items-center gap-1 hover:gap-3
                rounded-full border
                border-[#0d1224] dark:border-[#8d357e]
                bg-[white] dark:bg-[#0d1224]
                bg-gradient-to-r dark:from-[#b470aa] to-[#8b6c6c]
                from-[#351b1b] dark:to-[#8b95b6]
                px-3 md:px-8 py-3 md:py-4
                text-center text-xs md:text-sm font-medium uppercase tracking-wider
                text-[white] dark:text-[black]
                no-underline transition-all duration-200 ease-out
                hover:text-white dark:hover:text-black hover:no-underline md:font-semibold
              "
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 relative rounded-lg border
          bg-gradient-to-r to-[#351b1b] from-[#8b6c6c]
          dark:bg-gradient-to-r dark:from-[#ddcaca] dark:to-[#e5b896]
          border-[#1b2c68a0]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400 dark:bg-red-900"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400 dark:bg-orange-900"></div>
              <div className="h-3 w-3 rounded-full bg-green-200 dark:bg-green-900"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-[black] dark:text-purple-600">const</span>
                <span className="mr-2 text-white dark:text-red-500">coder</span>
                <span className="mr-2 text-[#573339] dark:text-pink-700">=</span>
                <span className="text-gray-400 dark:text-gray-600">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-[white] dark:text-red-500">name:</span>
                <span className="text-gray-400 dark:text-gray-600">{`'`}</span>
                <span className="text-amber-300 dark:text-yellow-900">Divyasree Bingi</span>
                <span className="text-gray-400 dark:text-gray-600">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white dark:text-red-500">skills:</span>
                <span className="text-gray-400 dark:text-gray-600">{`['`}</span>
                <span className="text-amber-300 dark:text-yellow-900">Java</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">React</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">NextJS</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">Angular</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">Kotlin</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">NestJS</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">MySql</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">Firebasese</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">Android Studio</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">Docker</span>
                <span className="text-gray-400 dark:text-gray-600">{"', '"}</span>
                <span className="text-amber-300 dark:text-yellow-900">AWS</span>
                <span className="text-gray-400 dark:text-gray-600">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white dark:text-red-500">hardWorker:</span>
                <span className="text-orange-400 dark:text-blue-900">true</span>
                <span className="text-gray-400 dark:text-gray-600">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white dark:text-red-500">quickLearner:</span>
                <span className="text-orange-400 dark:text-blue-900">true</span>
                <span className="text-gray-400 dark:text-gray-600">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white dark:text-red-500">problemSolver:</span>
                <span className="text-orange-400 dark:text-blue-900">true</span>
                <span className="text-gray-400 dark:text-gray-600">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-600">hireable:</span>
                <span className="dark:text-purple-500 text-orange-900">function</span>
                <span className="text-gray-400 dark:text-gray-600">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400 dark:text-purple-600">return</span>
                <span className="text-gray-400 dark:text-gray-600">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
                <span className="mr-2 text-white dark:text-red-500">hardWorker</span>
                <span className="text-amber-300 dark:text-pink-500">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
                <span className="mr-2 text-white dark:text-red-500">problemSolver</span>
                <span className="text-amber-300 dark:text-pink-600">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-600">this.</span>
                <span className="mr-2 text-white dark:text-red-500">skills.length</span>
                <span className="mr-2 text-amber-300 dark:text-pink-600">&gt;=</span>
                <span className="text-orange-400 dark:text-blue-600">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400 dark:text-gray-600">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400 dark:text-gray-600">{`};`}</span></div>
              <div><span className="text-gray-400 dark:text-gray-600">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;