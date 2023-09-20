import React from 'react'
import { navLinks } from '../../Constants'

const Navbar = () => {
  return (
    <div className=' w-full navbar flex justify-between items-center pt-8 pb-8'>
      <div className="text-xl ">
        <a href="#">
          <h1 className="font-medium"><strong className='text-[#2a68ff] font-extrabold mr-0.5'>Job</strong>Portal</h1>
        </a>
      </div>
      <ul className='hidden sm:flex items-center gap-3 relative '>
        {navLinks.map((li) => (
          <li className='text-[#6f6f6f] text-base hover:text-[#2a68ff]' key={li.label}>
            <a href={li.href}>{li.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex mr-2 leading-4 flex-col gap-1 sm:hidden ">
        <div className="h-[3px] bg-black w-8"></div>
        <div className="h-[3px] bg-black w-8"></div>
        <div className="h-[3px] bg-black w-8"></div>
      </div>
    </div>
  )
}

export default Navbar