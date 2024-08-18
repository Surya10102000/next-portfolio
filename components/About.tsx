"use client";

import LinkButton from "./LinkButton";

const About = () => {
  return (
    <div className="min-h-[50vh] mt-10 pb-8 bg-gradient-to-r from-red-600 to-orange-500">
      <div className="max-w-3xl mx-auto flex flex-col items-center px-4 py-12">
        <h1 className="text-3xl font-bold tracking-wide text-center">
          Hello world!
        </h1>
        <p className=" text-center font-normal pt-6">
          After starting my coding journey almost 10 years ago with an
          undergraduate class introducing C++, I have decided to make a bold
          career move into web development. I am a problem solver, curious, and
          love working towards improving my skills in whatever I do. I was drawn
          to web development because it allows me to flex my creative muscles
          while creating something I am passionate about. I am open to new
          opportunities or people to share ideas with!
        </p>
        <div className="flex mt-4 gap-4">
          <LinkButton/>
        </div>   
      </div>
    </div>
  );

};
export default About;
