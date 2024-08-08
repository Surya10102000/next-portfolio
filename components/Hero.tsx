"use client";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="pt-24 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="italic text-2xl md:text-3xl  font-extrabold my-4 md:mb-8">
          <p className="relative -left-3 text-gray-400 dark:text-gray-900">
            {"<h1>"}
          </p>
          <span className="text-4xl md:text-6xl">Surya Prakash Mallah</span>
          <p className="relative -left-3 text-gray-400 dark:text-gray-900">
            {"<h1/>"}
          </p>
        </div>
        <div className="relative inline-block font-medium group py-2.5 px-2.5 ">
          <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-orange-600 "></span>
          <span className="absolute inset-0 w-full h-full bg-white border border-orange-600"></span>
          <span className="relative font-bold text-[10px] md:text-[15px] text-orange-600 ">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "C:Usersguest> Fullstack developer",
                1000,
                "C:Usersguest> Designer",
                1000,
                "C:Usersguest> OS contributer",
                1000,
              ]}
              speed={10}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </span>
        </div>
      </div>
      <div className="mt-64 animate-bounce duration-1000 md:mt-56">
        {/* down arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};
export default Hero;
