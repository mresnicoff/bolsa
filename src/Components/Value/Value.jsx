import React from "react";
import { ValuesData } from "../../Constants";

const Value = () => {
  return (
    <section className="Value">
      <p className="text-center py-10 text-xl font-bold md:py-20 dark:text-white">
        The Value that hold us true and to account
      </p>
      <div className="grid sm:grid-cols-3 gap-10 sm:gap-4 items-center justify-center pb-10 sm:pb-16">
        {ValuesData.slice(0, 3).map((ValuesData) => {
          let colorclass = null;
          let imgbgclass = null;
          const bg1 = "hover:bg-[#eeedf7] dark:hover:bg-[#eeedf7]";
          const bg2 = "hover:bg-[#fcfae3] dark:hover:bg-[#fcfae3]";
          const bg3 = "hover:bg-[#f7edf5] dark:hover:bg-[#f7edf5]"; 
          const imgbg1 = "bg-[#dedef8]";
          const imgbg2 = "bg-[#f3f2ad]";
          const imgbg3 = "bg-[#f7d1e1]";
          if (ValuesData.id == 1) {
            colorclass = bg1;
            imgbgclass = imgbg1;
          } else if (ValuesData.id == 2) {
            colorclass = bg2;
            imgbgclass = imgbg2;
          } else {
            colorclass = bg3;
            imgbgclass = imgbg3;
          }
          return (
            <div
              key={ValuesData.id}
              className={`flex h-40 sm:h-52 flex-col rounded-xl p-4 lg:p-8 ${colorclass ? colorclass : ""} dark:bg-slate-600 dark:text-slate-50 dark:hover:text-black`}
            >
              <div className="flex gap-3 items-center">
                <div className={`rounded-xl p-3 ${imgbgclass}`}>
                  <img
                    src={ValuesData.logo}
                    width={25}
                    alt={ValuesData.title}
                  />
                </div>
                <span className="font-bold">{ValuesData.title}</span>
              </div>
              <p className="mt-4 text-black-400 text-sm ">{ValuesData.desc}</p>
            </div>
          );
        })}
        <div className="valuecard my-10 bg-blueColor flex flex-wrap gap-10 justify-between items-center rounded-xl p-8 md:mt-20 md:mb-8 sm:p-16 sm:col-span-3 bg-cover">
          <div className="left">
            <p className="text-blueColor font-extrabold text-2xl mb-3">
              Ready to switch a carrer?{" "}
            </p>
            <p className="font-extrabold text-2xl ">Let's Get Started ! </p>
          </div>
          <div className="right">
            <button className="border-2 border-blueColor rounded-lg text-lg font-semibold px-8 py-5 text-blueColor hover:bg-white hover:text-black ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
