// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="
      relative rounded-lg border w-full
      bg-gradient-to-r to-[#351b1b] from-[#8b6c6c]
      dark:bg-gradient-to-r dark:from-[#ddcaca] dark:to-[#e5b896]
      border-[#1b2c68a0]
    ">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400 dark:bg-red-900"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400 dark:bg-orange-900"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200 dark:bg-green-900"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl dark:text-[#351b1b]">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-[black] dark:text-purple-600">const</span>
            <span className="mr-2 text-white dark:text-red-500">project</span>
            <span className="mr-2 text-[#573339] dark:text-pink-700">=</span>
            <span className="text-gray-400 dark:text-gray-600">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white dark:text-red-500">name:</span>
            <span className="text-gray-400 dark:text-gray-600">{`'`}</span>
            <span className="text-amber-300 dark:text-yellow-900">{project.name}</span>
            <span className="text-gray-400 dark:text-gray-600">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white dark:text-red-500">tools:</span>
            <span className="text-gray-400 dark:text-gray-600">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300 dark:text-yellow-900">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400 dark:text-gray-600">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400 dark:text-gray-600">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white dark:text-red-500">myRole:</span>
            <span className="text-orange-400 dark:text-blue-900">{project.role}</span>
            <span className="text-gray-400 dark:text-gray-600">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white dark:text-red-500">Description:</span>
            <span className="text-cyan-600 dark:text-purple-500">{' ' + project.description}</span>
            <span className="text-gray-400 dark:text-gray-600">,</span>
          </div>
          <div><span className="text-gray-400 dark:text-gray-600">{`};`}</span></div>
        </code>
        {/* Add code link button below the code block */}
        {project.code && (
          <div className="mt-4 flex justify-end">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 underline hover:text-blue-700 transition"
            >
              View Code
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;