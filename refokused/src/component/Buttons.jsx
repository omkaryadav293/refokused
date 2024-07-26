import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Buttons = ({title = "Get Started"}) => {
  return (
    <div className='bg-white text-black rounded-full w-40 py-3 px-4 flex items-center justify-between cursor-pointer'>
      <span className='text-m font-semibold '>{title}</span>
      <IoIosReturnRight />
    </div>
  )
}

export default Buttons
