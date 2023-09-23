import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 p-10 sm:grid-cols-3  lg:grid-cols-5 gap-6 bg-[#2a68ff] rounded-lg">
        <div>
          <a href="/">
            <h1 className="text-lg font-medium text-white pb-2">
              <strong className="text-white font-extrabold mr-0.5">Job</strong>
              Portal
            </h1>
          </a>
          <p className="text-white text-sm font-thin leading-6 opacity-90 text-start">
            We always make our seekers and companies find the best jobs and
            employers find the best candidates
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-base font-semibold text-white">Company</span>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            About Us
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Features
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            News
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            FAQ
          </li>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-base font-semibold text-white">Resources</span>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Account
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Support Center
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Feedback
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Contact Us
          </li>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-base font-semibold text-white">Support</span>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Events
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Promo
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Demo
          </li>
          <li className="text-white opacity-75 font-thin text-sm leading-6 hover:opacity-100">
            Careers
          </li>
        </div>
        <div className="flex flex-col gap-2 col-span-2 sm:col-auto sm:gap-3">
          <span className="text-base font-semibold text-white ">
            Contact Info
          </span>
          <a
            className="text-white opacity-80 hover:opacity-100 text-xs lg:text-sm"
            href="malto:contact@jobportal.com"
          >
            contact@jobportal.com
          </a>
          <div className="">
            <AiFillInstagram className="bg-slate-200 p-2 w-9 h-9 rounded-full text-[#2a68ff] inline-block mr-1 sm:mr-3 hover:text-blue-600 hover:bg-white" />
            <AiFillFacebook className="bg-slate-200 p-2 w-9 h-9 rounded-full text-[#2a68ff] inline-block mr-1 sm:mr-3  hover:text-blue-600 hover:bg-white" />
            <AiFillTwitterCircle className="bg-slate-200 p-2 w-9 h-9 rounded-full text-[#2a68ff] inline-block hover:text-blue-600 hover:bg-white" />
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </footer >
  );
};

export default Footer;
