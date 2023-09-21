import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { JobsData } from '../../Constants'

const Jobs = () => {

  return (
    <div className="flex gap-10 justify-center flex-wrap items-center py-10">
      {JobsData.slice(0,8).map((job) => {
        return (
          <div key={job.id}  className='flex-grow group flex flex-col justify-between h-[300px] w-[250px] p-[20px] mt-4 bg-white rounded-md  shadow-lg shadow-gray-400 hover:bg-[#2a68ff]' >
            <div className="upperpart flex justify-between items-center" >
              <div className="titlecountry flex-grow">
                <p className='title font-bold group-hover:text-white text-xl'>{job.title}</p>
                <p className='text-[#8b8b8b] group-hover:text-[#dadada] '>{job.location}</p>
              </div>
              <span className='mt-[-20px] text-[#8b8b8b] group-hover:text-[#dadada]'><BiTimeFive className='inline mb-0.5 mr-1' />{job.time}</span>
            </div>
            <div className="lowerpart border-t-2 mt-4 group-hover:text-white ">
              <p className='mt-4 text-sm text-[#adaaaa] group-hover:text-white' >{job.desc}</p>
              <div className="company flex justify-start items-center mt-4 mb-3">
                <img className='p-0' src={job.logo} width={25} alt="" />
                <p className='text-sm font-medium ml-1'>{job.company}</p>
              </div>
            </div>
            <button className='border-[2px] font-medium rounded-[10px] block p-2 w-full hover:bg-white group-hover:text-black ]'>Apply Now</button>
          </div>
        )
      })}


      {/* <div className='group w-[250px] p-[20px] mt-4 bg-white rounded-md  shadow-lg shadow-gray-400 hover:bg-[#2a68ff]' >
        <div className="upperpart flex justify-between items-center" >
          <div className="titlecountry">
            <p className='title font-bold group-hover:text-white'>Web Developer</p>
            <p className='text-[#8b8b8b] group-hover:text-[#dadada] '>Canada</p>
          </div>
          <span className='mt-[-20px] text-[#8b8b8b] group-hover:text-[#dadada]'><BiTimeFive className='inline mb-0.5 mr-1' />Now</span>
        </div>
        <div className="lowerpart border-t-2 mt-4 group-hover:text-white ">
          <p className='mt-4 text-sm text-[#adaaaa] group-hover:text-white' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique repellat non ea, ipsum minus iure!</p>
          <div className="company flex justify-start items-center mt-4 mb-3">
            <img className='p-0' src={logo2} width={25} alt="" />
            <p className='text-sm font-medium ml-1'>Uranas Tech Pvt. Ltd</p>
          </div>
        </div>
        <button className='border-[2px] font-medium rounded-[10px] block p-2 w-full hover:bg-white group-hover:text-black ]'>Apply Now</button>
      </div> */}
    </div>
  )
}

export default Jobs