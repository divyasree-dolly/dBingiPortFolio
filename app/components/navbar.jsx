"use client";
// @flow strict
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";


function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-4xl font-kaushan text-[#18181b] dark:text-gray-200 
             hover:drop-shadow-[0_0_12px_#18181b] 
             dark:hover:drop-shadow-[0_0_12px_#fff] 
             transition duration-300 ease-in-out tracking-wider"
          >
            <span>&lt;DIVYASREE BINGI/&gt;</span>
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-gray-900 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-300">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="text-sm text-gray-900 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-300">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-gray-900 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-300">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-gray-900 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-300">EDUCATION</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#certifications">
              <div className="text-sm text-gray-900 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-300">CERTIFICATIONS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-gray-900 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-300">PROJECTS</div>
            </Link>
          </li>
        </ul>
        {mounted && (
          <button
            className="text-sm px-4 py-2 rounded-md transition-colors duration-300 text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "LIGHT" : "DARK"}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;