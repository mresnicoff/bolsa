import React from "react";

import { JobsData } from "../../Constants";
import { Job } from "../../Components/Job/Job.jsx";

const Jobs = () => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const handlePreviousPage= () => {
    setCurrentPage((prevPage) => prevPage - 1); }
const handleNextPage = () => {
  setCurrentPage((prevPage) => prevPage + 1); }
  return (
    <section id="jobs">
        <div className="flex justify-center mt-5 dark:text-white"> 
  <button
    onClick={handlePreviousPage}
    disabled={currentPage === 1}
    className="mr-2"
  >
    Anterior
  </button>
  <button
    onClick={handleNextPage}
    disabled={Math.min((currentPage - 1) * 8 + 8, 10) >= JobsData.length}
  >
    Siguiente
  </button>
</div>
      <div className="flex gap-10 justify-center flex-wrap items-center py-5 sm:py-10">
        {JobsData.slice((currentPage - 1) * 8, Math.min((currentPage - 1) * 8 + 8, 10)).map((job) => {
          return (
<Job key={job.id} id={job.id} title={job.title} location={job.location} time={Job.time} desc={job.desc} logo={job.logo} company={job.company}/>
          );
        })}
      </div>
    
    </section>
  );
};

export default Jobs;
