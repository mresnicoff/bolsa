import React from 'react'
import { ValuesData } from '../../Constants'

const Value = () => {
  return (
    <section className='Value' >
      <p className='text-center py-10 text-xl font-bold' >The Value that hold us true and to account</p>
      <div className="grid sm:grid-cols-3 items-center justify-center">
        {ValuesData.slice(0, 3).map((ValuesData) => {
          let colorclass = null;
          let imgbgclass = null;
          const bg1 = "hover:bg-[#eeedf7]";
          const bg2 = "hover:bg-[#fcfae3]";
          const bg3 = "hover:bg-[#f7edf5]";
          const imgbg1 = "bg-[#dedef8]"
          const imgbg2 = "bg-[#f3f2ad]"
          const imgbg3 = "bg-[#f7d1e1]"
          if (ValuesData.id == 1) {
            colorclass = bg1;
            imgbgclass = imgbg1
          } else if (ValuesData.id == 2) {
            colorclass = bg2;
            imgbgclass = imgbg2
          } else {
            colorclass = bg3;
            imgbgclass = imgbg3
          }
          return (
            <div key={ValuesData.id} className={`flex flex-col rounded-xl p-8 ${colorclass ? colorclass : ""}`}>
              <div className="flex gap-3 items-center">
                <div className={`rounded-xl p-3 ${imgbgclass}`}>
                  <img src={ValuesData.logo} width={25} alt={ValuesData.title} />
                </div>
                <span className='font-bold' >{ValuesData.title}</span>
              </div>
              <p className='mt-4 text-black-400 text-sm '>{ValuesData.desc}</p>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Value