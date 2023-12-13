/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { Card } from './Card'

export function Filteritems (ProductItem) {
  const [item, setItems] = useState(ProductItem)
  return (
    <div className="row">
      <h1>item filter</h1>
      <Card item={item} />
      <ProductItem />
    </div>
  )
}
