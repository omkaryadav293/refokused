import React from 'react'
import Navbar from './component/Navbar'
import Work from './component/Work'
import Stripes from './component/Stripes'
import Products from './component/Products'
import Marquees from './component/Marquees'
import Cards from './component/Cards'
import Footer from "./component/Footerdiv"
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-zinc-900 text-white '>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
