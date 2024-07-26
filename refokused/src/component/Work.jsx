import React, { useState } from 'react'
import { useScroll ,motion,useMotionValueEvent } from "framer-motion"

function Work() {

  let [image,setImage] =useState( [
    {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01.jpg", top:"50%", left:"50%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg", top:"58%", left:"44%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-1080.webp", top:"65%", left:"53%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp", top:"45%", left:"45%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10.jpg", top:"70%", left:"56%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png", top:"52%", left:"62%", isActive:false},
  ]);


  const { scrollY, scrollYProgress} = useScroll()

  scrollYProgress.on("change",(data)=>{
   
    function imageShow(arr){
      setImage((prev)=>(
        prev.map((item,index)=>(
         arr.indexOf(index) === -1 ?{...item, isActive: false} : 
         {...item, isActive : true} 
        )

      )))
    }

    switch(Math.floor(data*100)){
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0,1]);
        break;
      case 3:
        imageShow([0,1,2]);
        break;
      case 4:
        imageShow([0,1,2,3]);
        break;
      case 5:
        imageShow([0,1,2,3,4]);
        break;
      case 6:
        imageShow([0,1,2,3,4,5]);
        break;
    }
  })
  

  return (
    <div className='w-full mt-14'>
        <div className="relative max-w-screen-lg mx-auto">
          <h1 className='text-[22vw] tracking-tight leading-none select-none uppercase'>work</h1>
        <div className="w-full top-0 h-full absolute ">
          {image.map((item,index)=>( item.isActive && <img key={index} className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]'style={{top: item.top, left: item.left}} src={item.url}  />))}
          </div>  
          </div>  
    </div>
  )
}

export default Work
