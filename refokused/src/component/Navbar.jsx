import React from 'react'
import Buttons from './Buttons'

const Navbar = () => {
  return (
    <div className='max-w-screen-lg py-3 mx-auto flex items-center justify-between border-b border-zinc-500 border-b-[1px] '>
    <div className="nleft flex items-center ">
      <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
      <div className="links flex gap-10 ml-20">
        {["Home","Work","About","","News", "Creer"].map((item,index)=>(
            item.length===0? (<span key={index} className='h-8 w-[1px] bg-zinc-600 '></span>) : <a key= {index} href="#">{index ===1 && (<span style={{boxShadow:"0 0 0.25em green"}} className='h-2 w-2 bg-green-500 rounded-full inline-block'></span>)}{item}</a>
        ))}
      </div>

    </div>
    <Buttons/>
    
    </div>
  )
}

export default Navbar
