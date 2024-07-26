import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
        <div className=" max-w-screen-lg mx-auto py-10 flex gap-32">
            <div className=" basis-1/2  font-[poppins] text-[8vw] leading-none tracking-tight font-semibold">
            refokus.
            </div>
            <div className="basis-1/2  gap-4 flex  ">
            <div className="basis-1/3">
             <h4 className='mb-8 text-zinc-400 capitalize font-regular text-xl'>socials</h4>
             {["Instagram", "Twitter (x?)", "LinkedIn",].map((item , index) => <a  key={index} className='capitalize block mt-2 text-zinc-500  '>{item} </a>)}
            </div>
            <div className="basis-1/3">
             <h4  className='capitalize mb-8 text-zinc-400 font-regular text-xl'>Sitemap</h4>
             {["Home", "Work", "Career","contact"].map((item , index) => <a  key={index} className='block mt-2 text-zinc-500 capitalize '>{item} </a>)}
            </div>
            <div className="basis-2/3 flex flex-col items-end">
            <p className='text-right block text-zinc-500'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img className='block w-40 mt-10' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
            </div>
            </div>
        </div>
     
    </div>
  )
}

export default Footer
