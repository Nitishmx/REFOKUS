import React from 'react'

function Stripe({item}) {
  return (
    <div className='max-w-72 border-b-2 border-l-2 border-r-2 border-zinc-600 p-4 border-t-2 flex justify-between items-center w-[16.66%]'>
        <img src={item.url} alt='image strips'></img>
        <span className='font-semibold'>{item.number}</span>
    </div>
  )
}

export default Stripe