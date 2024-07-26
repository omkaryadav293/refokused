import React from 'react'

function Stripe({val , index}) {
  return (
      
        <div key={index} className='w-[16.66%] border-[1.4px] border-l-0 border-zinc-500 flex justify-between items-center px-5 py-3'>
        <img src={val.image} alt="" />
        <div className='font-semibold text-xl'> {val.number}</div>
        </div>
      )
        
}
    
 

export default Stripe
