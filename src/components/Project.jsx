import React from "react";

const Project = ({ title, logo, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full w-full"
    >
      <div className="w-full h-full bg-gray-600 text-white flex flex-col justify-center items-center p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
        <img src={logo} className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-bold mb-2 font-serif h-8 flex items-center justify-center">
          {title}
        </h3>
        <div className="h-16 flex items-center justify-center">
          <p className="text-sm text-center font-serif">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;
