import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 w-full bg-darkslategray text-white z-50">
      <div
        className="text-[lightblue]
     flex justify-center items-right h-24 max-w-[1440px] mx-auto bg-darkslategray "
      >
        <ul className="hidden md:flex uppercase py-6 font-bold  ">
          <li className="px-4">
            <Link to="/">
              <button className="uppercase font-bold hover:scale-125 duration-200">
                Home
              </button>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about">
              <button className="uppercase font-bold hover:scale-125 duration-200">
                About
              </button>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/work">
              <button className="uppercase font-bold hover:scale-125 duration-200">
                Work
              </button>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/projects">
              <button className="uppercase font-bold hover:scale-125 duration-200">
                Projects
              </button>
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">
              <button className="uppercase font-bold hover:scale-125 duration-200">
                Contact
              </button>
            </Link>
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
