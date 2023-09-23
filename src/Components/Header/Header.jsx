import React from "react";
import { navLinks } from "../../Constants";

const Header = () => {
  return (
    <header>
      <nav className=" w-full Header flex justify-between items-center pt-8 pb-8">
        <div className="text-xl ">
          <a href="/">
            <h1 className="font-medium dark:text-white">
              <strong className="text-[#2a68ff] font-extrabold mr-0.5">
                Job
              </strong>
              Portal
            </h1>
          </a>
        </div>
        <ul className="hidden sm:flex items-center gap-3 relative ">
          {navLinks.map((li) => (
            <li
              className="text-[#6f6f6f] dark:text-slate-100 text-base hover:text-[#2a68ff]"
              key={li.label}
            >
              <a href={li.href}>{li.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex leading-4 flex-col gap-1 sm:hidden ">
          <div className="h-[3px] dark:bg-slate-100 bg-black w-8"></div>
          <div className="h-[3px] dark:bg-slate-100 bg-black w-8"></div>
          <div className="h-[3px] dark:bg-slate-100 bg-black w-8"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
