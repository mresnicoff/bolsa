import React from 'react'
import { AiOutlineSearch, AiFillCloseCircle, AiOutlineHome } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { sortby, level, type } from '../../Constants'

const Search = () => {
  return (
    <section className='Search' >
      <div className='grid gap-9 bg-[#d4d7da] rounded-[10px] p-[1rem] md:p-[3rem] ' >
        <form action="">
          <div className="flex flex-wrap w-full justify-between items-center rounded-lg gap-[20px] bg-white p-5 shadow-lg shadow-grey-700 ">
            <div className="flex flex-grow items-center ">
              <AiOutlineSearch className='icon mr-1' />
              <input className='bg-transparent w-full text-blue-600 focus:outline-none font-medium' placeholder='Search Job...' type="text" />
              <AiFillCloseCircle className='text-lg text-[#a5a6a6] hover:text-black' />
            </div>
            <div className="flex flex-grow justify-between items-center">
              <AiOutlineHome className='icon mr-1' />
              <input className='bg-transparent w-full text-blue-600 focus:outline-none font-medium' placeholder='Search Company...' type="text" />
              <AiFillCloseCircle className='text-lg text-[#a5a6a6] hover:text-black' />
            </div>
            <div className="flex flex-grow justify-between items-center">
              <GoLocation className='icon mr-1' />
              <input className='bg-transparent w-full text-blue-600 focus:outline-none font-medium' placeholder='Search Location...' type="text" />
              <AiFillCloseCircle className='text-lg text-[#a5a6a6] hover:text-black' />
            </div>
            <button className='bg-[#2a68ff] flex-grow shrink text-white max-w-full p-3 px-10 rounded-[10px] w-30 hover:bg-blue-500 '>Search</button>
          </div>
        </form>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <div className="flex  items-center gap-4">
            <label htmlFor="relevance" className='font-semibold text-[#6f6f6f]' >Sort By:</label>
            <select className='bg-white rounded-md px-4 py-1 ' name="" id="relevance">
              {sortby.map((options) => (
                <option key={options.id} value={options.value}>{options.value}</option>
              ))}
              {/* <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option> */}
            </select>
          </div>
          <div className="flex  items-center gap-4">
            <label htmlFor="type" className='font-semibold text-[#6f6f6f]' >Type:</label>
            <select className='bg-white rounded-md px-4 py-1 ' name="" id="type">
              {type.map((type) => (
                <option key={type.id} value={type.value}>{type.value}</option>
              ))}
            </select>
          </div>
          <div className="flex  items-center gap-4">
            <label htmlFor="level" className='font-semibold text-[#6f6f6f]' >Level:</label>
            <select className='bg-white rounded-md px-4 py-1 ' name="" id="level">
              {level.map((level) => (
                <option key={level.id} value={level.id}>{level.value}</option>
              ))}
            </select>
          </div>
          <button className='hover:text-[#2a68ff] text-[#6f6f6f] text-md px-2 py-2' >Clear All</button>
        </div>
      </div>
    </section>
  )
}

export default Search