import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#5c73db] font-bold p-2 text-5xl">
          Welcome to my Portfolio
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          I am a...
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"></p>
          {/*<Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Software Engineer", "Mobile Developer", "Full-Stack Web Developer", "College Student"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          */}
        </div>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl py-4">
            My name is Edan Gortzak and I am an Electrical Engineering and
            Computer Science Student at UC Berkeley interested in software
            engineering, mobile and web development, ML/AI, data science, and
            more.
          </p>
        </div>
        <button className="bg-[#4d2fd2] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
