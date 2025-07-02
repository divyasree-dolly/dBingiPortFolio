// @flow strict
import { certificates } from "@/utils/data/certificates"; // create this file similarly to educations.js
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Certificates() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6]"></span>
          <span className="dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6]  w-fit dark:text-[black] text-white p-2 px-5 text-xl rounded-md">
            CERTIFICATIONS
          </span>
          <span className="w-24 h-[2px] dark:bg-[#ddcaca] bg-gradient-to-r to-[#8b6c6c]
                from-[#351b1b]  dark:from-[#b470aa] dark:to-[#8b95b6] "></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
              style={{ textDecoration: "none" }}
            >
              <div className="rounded-lg border border-[#1f223c] bg-[#8b6c6c] dark:bg-[#8b95b6] shadow-none shadow-gray-50 transition-all duration-500">
                <GlowCard identifier={`certificate-${cert.id}`}>
                  <div className="flex flex-col items-center justify-center aspect-square w-80 rounded-2xl relative mx-auto p-6">
                    {/* Date at top */}
                    <p className="text-xs sm:text-sm text-[#3d0e23] mb-4">{cert.date}</p>
                    {/* Larger image */}
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={120}
                      height={120}
                      className="h-full w-full rounded-lg object-contain"
                    />
                    {/* Title and issuer */}
                    <p className="text-base sm:text-xl mb-1 font-medium uppercase text-center leading-tight">
                      {cert.title}
                    </p>
                    {/* <p className="text-sm sm:text-base text-center">{cert.issuer}</p> */}
                  </div>
                </GlowCard>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
