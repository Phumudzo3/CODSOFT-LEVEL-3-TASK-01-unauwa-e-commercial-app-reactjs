import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { Card } from './Card'

export const Filteritems = (ProductItem) => {
  const [item,setItems]=useState(ProductItem)
  return (
    <div className='row'>
   <h1>item filter</h1>
<Card item={item}/>
   <ProductItem/>
    </div>
  )
}
