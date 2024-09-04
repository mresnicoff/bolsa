import React from "react";
import {Jobs, Search, Value } from "./Components";
import {useLoaderData} from "react-router-dom";

const App = () => {
  const  jobsData  = useLoaderData().data  


  return (
    <div className="w-full dark:bg-slate-800">
      <div className="w-[90%] m-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
     
        <main>
          <Search />

          <Jobs jobsData={jobsData}/>
          <Value />
        </main>
      </div>
    </div>
  );
};

export default App;
