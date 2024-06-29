import React from 'react'
import NavBar from './Component/NavBar'
import Works from './Component/Works'
import Stripes from './Component/Stripes'

function App() {
  return (
    <div className='w-full h-screen font-["satoshi"] bg-zinc-800 text-white'>
     <NavBar/>
     <Works/>
     <Stripes/>
    </div>
  )
}

export default App