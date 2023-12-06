import React, { useContext } from "react";
import shoppingContext from "./context/shopping/ShoppingContext";
import "./CheckOutProduct.css";

const CheckOutProduct = ({ id, image, title, rating, price, hideButton }) => {
  const context = useContext(shoppingContext);
  const { removeFromBasket } = context;
  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="" />
      <div className="checkout_product_info">
        <p className="checkout_product">{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="checkout_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove From basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckOutProduct;
