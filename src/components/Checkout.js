import shoppingContext from "./context/shopping/ShoppingContext";
import CheckOutProduct from "./CheckOutProduct";
import "./Checkout.css";
import React,{useContext} from 'react'
import Subtotal from "./Subtotal";

const Checkout = () => {
    const context =useContext(shoppingContext);
    const {basket,user}=context;
  return (
    <div className="checkout">
      <div className="checkout_left">
<img className="checkout_ad" src=""  alt="" />

<div>

    <h3>hello,{user?.email}</h3>
    <h2 className="checkout_title">Your Shopping Basket</h2>
    {basket.map((item)=>(<CheckOutProduct 
   key={item.id}
   id={item.id}
   title={item.title}
   image={item.image}
   price={item.price}
   rating={item.rating}
     />
    
    ))}

</div>
      </div>
      <div className="checkout_right">

        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
