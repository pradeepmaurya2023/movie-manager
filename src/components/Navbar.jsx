import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-neutral-800 min-h-16 justify-between items-center px-10 font-cursive text-white min-w-full">
        <div className="logo">
          <h2 className="text-2xl font-bold font-mono hover:text-yellow-400 cursor-pointer transition-all hover:scale-125 duration-150">
            MovieHub
          </h2>
        </div>
        <div className="navLinks ">
          <ul className="flex gap-5">
            <li className="hover:text-yellow-400 cursor-pointer transition-all hover:scale-125 duration-150 hover:border-b-2 border-yellow-400  text-base">
              Home
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all hover:scale-125 duration-150 hover:border-b-2 border-yellow-400  text-base">
              About Us
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all hover:scale-125 duration-150 hover:border-b-2 border-yellow-400  text-base">
              WatchList
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
