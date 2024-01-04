import React, { useState } from "react";

import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`
    ${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Jashan &nbsp; <span className="sm:block hidden ">| &nbsp;Bhayana</span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title ? "text-white" : "text-gray-400"
                } hover:text-white text-[20px] cursor-pointer font-medium`}
                onClick={() => {
                  Link.title;
                }}
              >
                <a href={`#${Link.id}`} alt="id">
                  {Link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"}
          p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4 ">
                {navLinks.map((Link) => (
                  <li
                    key={Link.id}
                    className={`${
                      active === Link.title ? "text-white" : "text-gray-400"
                    } hover:text-black font-serif font-medium cursor-grab text-[15px]`}
                    onClick={() => {
                      Link.title;
                    }}
                  >
                    <a href={`#${Link.id}`} alt="id">
                      {Link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
