import React from "react";
import Project from "./Project";
import testLogo from "../assets/headshot2.png";
import flowmap from "../assets/flowmap.png";
import soundcases from "../assets/soundcases.png";

const Cards = () => {
  return (
    <div className="w-full py-2 px-4 bg-slategray text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="w-full h-64 shadow-xl bg-[lightblue] flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <Project
            title="FlowMap"
            logo={flowmap}
            description="A full-stack mobile application to help college students locate menstrual products on campus using React Native
framework and integrating with Firebase to store and display user comments and feedback in real time."
            link="https://docs.google.com/presentation/d/1bqeO4ani1VlCfm3IYkJYj1oIU4yaCVzUKMei8BLNzoU/edit?usp=sharing"
          />
        </div>
        <div className="w-full h-64 shadow-xl bg-[lightblue] flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <Project
            title="Mentora"
            description="An interactive Voice AI Tutor geared towards elementary 
            and middle school aged students which takes on the form of their favorite fictional characters from movies and TV shows."
            link="https://devpost.com/software/edupal-ai"
          />
        </div>
        <div className="w-full h-64 shadow-xl bg-[lightblue] flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
          <Project
            title="XR Sound Cases"
            logo={soundcases}
            description="Developed test cases for the extended reality platform, WebXR, to better understand the capabilities and limitations of a variety of audio/sound related properties on the platform. "
            link="https://docs.google.com/presentation/d/1H5_6iM7bElPSsFEubjJ6q68rD2b75FIk9TCFbV3UJP4/edit?usp=sharing"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
