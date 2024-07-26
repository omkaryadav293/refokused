import React from 'react'
import Product from './Product'

function Products() {
  
    let products = [
        {title:"Arqitle", description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", 
        live:true, val:false,
        },
        {title:"TTR", description:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", 
        live:true, val:false,
        },
        {title:"YIR 2022", description:"We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", 
        live:true, val:true,
        },
        {title:"Yahoo!", description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", 
        live:true, val:false,
        },
        {title:"RainFall", description:" global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", 
        live:true, val:true,
        },
    ]
    
  return (
    <div className='py-10'>
        {products.map((item, index)=>  <Product key={index} item={item} /> )}
     
    </div>
  )
}

export default Products
