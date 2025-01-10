import React from "react";
import { ReactTyped } from "react-typed";
import headshot from "../assets/headshot2.png";
import Cards from "./Cards";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-darkslategray text-white">
      <div className="flex flex-col md:flex-row items-center max-w-[1440px] mx-auto p-4">
        <div className="w-1/3 flex justify-center md:justify-start pr-20">
          <img
            src={headshot}
            className="mx-auto max-w-full h-auto rounded-full"
          />
        </div>
        <div className="md:w-2/3 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="flex justify-center items-center">
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold py-4">
              I am a...
            </h1>

            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"></p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#4d2fd2]"
              strings={[
                "Software Engineer",
                "Mobile Developer",
                "Full-Stack Web Developer",
                "College Student",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="md:text-3xl sm:text-2xl py-4">
              My name is Edan Gortzak and I am an Electrical Engineering and
              Computer Science Student at UC Berkeley interested in software
              engineering, mobile and web development, ML/AI, data science, and
              more.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <FaGithub size={40} className="mx-2" />
        <FaLinkedin size={40} className="mx-2" />
        <FaInstagram size={40} className="mx-2" />
        <FaEnvelope size={40} className="mx-2" />
      </div>
    </div>
  );
};

export default Home;
