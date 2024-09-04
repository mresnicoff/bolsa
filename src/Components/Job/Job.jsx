import React from "react";
import { BiTimeFive } from "react-icons/bi";
import {Link} from "react-router-dom"
export const Job = ({id,title,location,time,desc,logo,empresa}) => {
    
    return (
<div key={id}
className="grow-0 flex-grow group flex flex-col justify-between h-[300px] w-[270px] p-3 md:p-[20px] mt-4 bg-white rounded-md shadow-lg shadow-gray-400 dark:hover:bg-blueColor hover:bg-[#2a68ff] dark:bg-slate-700 dark:shadow-none "
>
<div className="upperpart flex justify-between items-stretcht">
  <div className="titlecountry flex-grow">
    <p className=" title font-bold group-hover:text-white text-xl dark:text-blueColor">
      {title}
    </p>

  </div>
  <span className="ml-2 w-48 overflow-hidden whitespace-nowrap mt-[-20px] text-[#8b8b8b] group-hover:text-[#dadada] dark:text-slate-300">
    <BiTimeFive className="inline mb-0.5 mr-1" />{time==0? "Hoy":` ${time} dias`}
    <div className="text-[#8b8b8b] group-hover:text-[#dadada] dark:text-slate-400 ">
      {location}
      <div className="text-sm font-medium ml-1 dark:text-slate-300">
      {empresa}
    </div>
    </div>
  </span>
</div>
<div className="max-h-[50px] grow-0 lowerpart border-t-2 mt-4 group-hover:text-white ">
  <p className="mt-4 text-sm text-[#adaaaa] group-hover:text-white dark:text-slate-200">
    {desc}
  </p>
  <div className="company flex justify-start items-center mt-4 mb-3">


  </div>
</div>
<Link to={`postularse/${id}`} className="border-[2px] font-medium rounded-[10px] block p-2 w-full dark:text-slate-100 dark:bg-blueColor dark:border-transparent dark:group-hover:border dark:group-hover:border-white dark:hover:text-blueColor dark:hover:bg-white hover:bg-white">
  Postularse
</Link>
</div>
);
};
