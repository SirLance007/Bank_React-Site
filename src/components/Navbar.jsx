import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";
import { useState } from "react";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className=" w-full py-6 flex justify-between items-center navbar">
      <img className="ml-5 w-[124px] h-[32px]" src={logo} alt="" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-popins , cursor-pointer text-white font-normal text-[16px] mr-10`}
          >
            <a href={`#${nav.link}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] mr-5"
          onClick={() => settoggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gradient-to-r from-cyan-500 to-blue-500  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-col flex justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-popins , cursor-pointer text-white font-normal text-[16px] mr-10 mb-4 `}
              >
                <a href={`#${nav.link}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
