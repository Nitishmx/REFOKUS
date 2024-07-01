import React from 'react'
import Button from './Button'

function Product({value}) {
  return (
    <div className='w-full py-20 text-white'>
         <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-semibold'>{value.title}</h1>
            <div className='dets w-1/3'>
                 <p className='mb-10'>{value.description}</p>
                 <Button/>
            </div>
         </div>
    </div>
  )
}

export default Product