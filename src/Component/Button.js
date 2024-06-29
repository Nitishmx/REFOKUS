import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className='min-w-40 px-3 py-2 bg-zinc-100 rounded-full text-black flex justify-between items-center'>
        <span className='text-sm font-medium'>Get Started</span>
        <IoIosReturnRight />

    </div>
  )
}

export default Button