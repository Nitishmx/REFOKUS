import React from 'react'
import NavBar from './Component/NavBar'
import Works from './Component/Works'
import Stripes from './Component/Stripes'
import Products from './Component/Products'

function App() {
  return (
    <div className='w-full h-full font-["satoshi"] bg-zinc-800 text-white'>
     <NavBar/>
     <Works/>
     <Stripes/>
     <Products/>
    </div>
  )
}

export default App