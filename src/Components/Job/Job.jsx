import React from "react";
import { BiTimeFive } from "react-icons/bi";
export const Job = ({id,title,location,time,desc,logo,empresa}) => {
    
    return (
<div key={id}
className="grow-0 flex-grow group flex flex-col justify-between h-[300px] w-[270px] p-3 md:p-[20px] mt-4 bg-white rounded-md shadow-lg shadow-gray-400 dark:hover:bg-blueColor hover:bg-[#2a68ff] dark:bg-slate-700 dark:shadow-none "
>
<div className="upperpart flex justify-between items-center">
  <div className="titlecountry flex-grow">
    <p className="title font-bold group-hover:text-white text-xl dark:text-blueColor">
      {title}
    </p>
    <p className="text-[#8b8b8b] group-hover:text-[#dadada] dark:text-slate-400 ">
      {location}
    </p>
  </div>
  <span className="whitespace-nowrap mt-[-30px] text-[#8b8b8b] group-hover:text-[#dadada] dark:text-slate-300">
    <BiTimeFive className="inline mb-0.5 mr-1" />{time==0? "Hoy":`Hace ${time} dias`}
  </span>
</div>
<div className="lowerpart border-t-2 mt-4 group-hover:text-white ">
  <p className="mt-4 text-sm text-[#adaaaa] group-hover:text-white dark:text-slate-200">
    {desc}
  </p>
  <div className="company flex justify-start items-center mt-4 mb-3">

    <p className="text-sm font-medium ml-1 dark:text-slate-300">
      {empresa}
    </p>
  </div>
</div>
<button className="border-[2px] font-medium rounded-[10px] block p-2 w-full dark:text-slate-100 dark:bg-blueColor dark:border-transparent dark:group-hover:border dark:group-hover:border-white dark:hover:text-blueColor dark:hover:bg-white hover:bg-white">
  Postularse
</button>
</div>
);
};
