import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 w-full bg-darkslategray text-white z-50">
      <div
        className="text-[lightblue]
     flex justify-center items-right h-24 max-w-[1440px] mx-auto "
      >
        <ul className="hidden md:flex uppercase py-6 font-bold  ">
          <li className="px-4">
            <button className="uppercase font-bold hover:scale-125 duration-200">
              Home
            </button>
          </li>
          <li className="px-4">
            <button className="uppercase font-bold hover:scale-125 duration-200">
              About
            </button>
          </li>
          <li className="px-4">
            <button className="uppercase font-bold hover:scale-125 duration-200">
              Work
            </button>
          </li>
          <li className="px-4">
            <button className="uppercase font-bold hover:scale-125 duration-200">
              Projects
            </button>
          </li>
          <li className="px-4">
            <button className="uppercase font-bold hover:scale-125 duration-200">
              Contact
            </button>
          </li>
        </ul>

        <div className="block md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-60% h-full border-r ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-white">Home</li>
            <li className="p-4 border-b border-white">About</li>
            <li className="p-4 border-b border-white">Work</li>
            <li className="p-4 border-b border-white">Projects</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
