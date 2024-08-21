import React from "react";
import {useAuthContext} from '../../auth/authContext';
import { Job } from "../../Components/Job/Job.jsx";

const Jobs = ({jobsData}) => {
  
  const {sorted, }= useAuthContext();
  var sortedJobs= (sorted=="Localidad") ?jobsData.sort(((p1, p2) =>
    p1.localidad > p2.localidad ? 1 : p1.localidad < p2.localidad ? -1 : 0
  )):jobsData.sort(((p1, p2) =>
    p1.time > p2.time ? 1 : p1.time < p2.time ? -1 : 0
  ))
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
    disabled={Math.min((currentPage - 1) * 8 + 8, 10) >= sortedJobs.length}
  >
    Siguiente
  </button>
</div>
      <div className="flex gap-10 justify-center flex-wrap items-center py-5 sm:py-10">
        {sortedJobs.slice((currentPage - 1) * 8, Math.min((currentPage - 1) * 8 + 8, 10)).map((job) => {
          return (
<Job key={job.id} id={job.id} title={job.title} location={job.localidad} time={job.time} desc={job.desc} logo={job.logo} empresa={job.empresa}/>
          );
        })}
      </div>
    
    </section>
  );
};

export default Jobs;
