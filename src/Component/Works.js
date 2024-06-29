import React from 'react'

function Works() {
    let images=[
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"50%",left:"50%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"56%",left:"44%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"45%",left:"56%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"60%",left:"53%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"43%",left:"40%",isActive:false},
    ]
  return (
    <div className='w-full'>
         <div className='max-w-screen-xl mx-auto text-center relative'>
           <h1 className='text-[30vw] leading-none tracking-tight font-medium select-none'>work</h1>
           <div className='w-full h-full absolute top-0'>
            {images.map((item,index)=>{
                return(
                    item.isActive?(<img src={item.url} className='w-60 rounded-lg absolute bg-slate-600 -translate-x-[50%] -translate-y-[50%]' style={{top:item.top,left:item.left}}></img>):""
                )
            })}
           </div>
         </div>
    </div>
  )
}

export default Works