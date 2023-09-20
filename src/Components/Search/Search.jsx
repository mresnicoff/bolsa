import React from 'react'
import { AiOutlineSearch, AiFillCloseCircle, AiOutlineHome } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const Search = () => {
  return (
    <div className='grid gap-10 bg-[#d4d7da] rounded-[10px] p-[3rem] ' >
      <form action="">
        <div className="flex w-full justify-between items-center rounded-lg gap-[10px] bg-white p-5 shadow-lg shadow-grey-700 ">

        <div className="flex items-center ">
          <AiOutlineSearch className='icon mr-1' />
          <input className='bg-transparent w-full text-blue-600 focus:outline-none font-medium' placeholder='Search Job' type="text" />
          <AiFillCloseCircle className='text-lg text-[#a5a6a6] hover:text-black' />
        </div>
        <div className="flex justify-between items-center">
          <AiOutlineHome className='icon mr-1' />
          <input className='bg-transparent w-full text-blue-600 focus:outline-none font-medium' placeholder='Search Company' type="text" />
          <AiFillCloseCircle className='text-lg text-[#a5a6a6] hover:text-black' />
        </div>
        <div className="flex justify-between items-center">
          <GoLocation className='icon mr-1' />
          <input className='bg-transparent w-full text-blue-600 focus:outline-none font-medium' placeholder='Search Location' type="text" />
          <AiFillCloseCircle className='text-lg text-[#a5a6a6] hover:text-black' />
        </div>
        </div>
      </form>
    </div>
  )
}

export default Search