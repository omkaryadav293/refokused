import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imagesurl , direction}) {
  return (
    
    <div className='w-full  flex  flex-nowrap overflow-hidden'>
      <motion.div initial={{x: direction === "left"? 0 : "-100%"}} animate={{x: direction === "left"? "-100%" : 0}} transition={{ease:'linear', duration:12, repeat: Infinity}} className='flex flex-shrink-0 gap-20 py-10 pr-40'> 
      {imagesurl.map((url,index)=><img key={index} src={url} className='flex-shrink-0'/>)}
      </motion.div>
      <motion.div initial={{x: direction === "left"? 0 : "-100%"}} animate={{x: direction === "left"? "-100%" : 0}} transition={{ease:'linear', duration:12, repeat: Infinity}} className='flex flex-shrink-0 gap-20 py-10 pr-40'> 
      {imagesurl.map((url,index)=><img key={index} src={url} className='flex-shrink-0'/>)}
      </motion.div>
    </div>
  )
}

export default Marquee
