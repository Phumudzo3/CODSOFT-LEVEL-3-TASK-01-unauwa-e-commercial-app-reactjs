/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import shoppingContext from './context/shopping/ShoppingContext'

import './ProductItems.css'

function Product ({
  id, image, title, rating, price
}) {
  const context = useContext(shoppingContext)
  const { addToBasket } = context
  const AddToBasketHandler = () => {
    addToBasket({
      item: {
        id, image, title, rating, price
      }
    })
  }
  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="product_price">{`$${price}`}</p>
      </div>
      <button className="product_button" onClick={AddToBasketHandler}>
        Add to basket
      </button>
    </div>
  )
}

export default Product
