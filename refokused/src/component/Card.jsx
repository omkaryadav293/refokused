import { motion } from 'framer-motion';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function Card({width , para , btn, hover}) {
  return (
    
    <motion.div whileHover={{backgroundColor: hover===true && "#7443ff" , paddingLeft: hover===false && "22px"}} className={`${width} bg-zinc-800 rounded-xl h-[45vh] flex flex-col justify-between p-4  `}>
        <div className={`top w-full `}> 
            <div className='flex justify-between items-center '>
                <h2>heading</h2>
                <BsArrowRight/>
            </div>
            <div className=' font-[roboto] font-semibold  text-2xl mt-5'>
                <h1  className=' font-[roboto]' >whatever heading.</h1>
            </div>
        </div>
        <div className="down w-full">
            {btn && 
            <>
            <h1 className='text-7xl font-[roboto] font-semibold leading-none tracking-tight'>Start a project</h1>
            <button className='rounded-full border-[1px] border-zinc-500 px-5 py-2 mt-5'>Contact Us</button>
            </>
            }
            {para &&  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eaque alias corporis</p>}
           
        </div>
      
    </motion.div>
  )
}

export default Card
