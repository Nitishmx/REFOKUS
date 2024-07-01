import React from 'react'
import Product from './Product'

function Products() {
    let products=[
        {title:"arqitel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
        {title:"TTR",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:true},
        {title:"YIR 2022",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
        {title:"Yahoo!",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",live:true,case:false},
    ]
  return (
    <div>
    {products.map((item,index)=>{
        return(
        <Product value={item}/>

        )
    })}
    </div>
  )
}

export default Products