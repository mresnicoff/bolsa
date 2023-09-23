import React from "react";
import { Footer, Header, Jobs, Search, Value } from "./Components";

const App = () => {
  return (
    <div className="w-full dark:bg-slate-800">
      <div className="w-[90%] m-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <Header />
        <main>
          <Search />
          <Jobs />
          <Value />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
