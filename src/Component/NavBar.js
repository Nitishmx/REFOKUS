
import React from 'react'
import Button from './Button'

function NavBar() {
  return (
    <div className="max-w-screen-xl mx-auto p-3 flex items-center justify-between border-b-[1px] border-zinc-700">
       <div className='flex items-center'>
         <img src='https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg' className="cursor-pointer" alt='image'></img>
          <div className='link flex gap-10 ml-32 cursor-pointer'>
            {["Home","Work","Culture","","News"].map((item,index)=>(
              <a className="text-sm flex items-center gap-1 font-regular" href='#'>
              {index===1 ?(<span className="inline-block w-1 h-1 rounded-full" style={{boxShadow:"0 0 0.45em #00FF19", background:"#00FF19"}}></span>) : "" }
              {item}
              {index===3?<span className="w-[2px] h-7 bg-zinc-600"></span>:""}
            </a>
            ))}
          </div>
       </div>
       <Button/>
    </div>
  )
}

export default NavBar