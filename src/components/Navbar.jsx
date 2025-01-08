import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className="text-[lightblue]
     flex justify-center items-right h-24 max-w-[1440px] mx-auto"
    >
      <ul className="hidden md:flex uppercase">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Work</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="fixed right-4 block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
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
  );
};

export default Navbar;
