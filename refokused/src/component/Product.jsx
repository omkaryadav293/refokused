import React from 'react'
import Buttons from './Buttons'

function Product({item}) {
    let {title , description, live, val} = item;
  return (
    <div className='w-full py-20 text-white'>
        <div className="max-w-screen-lg mx-auto flex items-center justify-between">
      <h1 className='text-5xl capitalize font-semibold'>{title}</h1>
      <div className="dets w-1/3">
        <p className='mb-8'>{description}</p>
        <div className="flex gap-5">
        {item.live && <Buttons title="Live Now"/>}
        {item.val && <Buttons title="Case study"/>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product
