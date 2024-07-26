import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-lg mx-auto py-20 flex gap-2 '>
      <Card width={"basis-1/2"} para={true}  btn={false} hover={false} />
      <Card width={"basis-2/3"} para={false} btn={true} hover={true} />
      </div>
    </div>
  )
}

export default Cards
