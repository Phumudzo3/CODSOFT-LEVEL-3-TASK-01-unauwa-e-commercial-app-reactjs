import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import shoppingContext from "../context/shopping/ShoppingContext";
import { auth } from "../../firebase";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "@mui/material";

const Header = () => {
  const [search, setSearch] = useState('');
  console.log(search);
  
  const context = useContext(shoppingContext);
  const { basket, user } = context;
  const handlerAuthentication = () => {
    if (user) {
      auth.signOut();

    }

  };

  return (
    <div>
      <div className="header">
        <div className="header_logoSection">
          <Link to="/">
            <img
              className="header_logo"
              src="/asset/Nauwa shop.png"
              alt="logo" 
            />
          </Link>
          <Link to="/"></Link>

         
        </div>

        <div className="header_search">
        <input className="header_input" type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)} style={{textAlign:"center"}}/>
          <SearchIcon className="searchicon" />
        </div>
          

        
       

        <div className="header_nav" >

          <Link to={!user && "/login"}>
            <div className="header_option hp1" onClick={handlerAuthentication}>
              <span className="header_optionOne">Hello {!user ? "Guest" : user.email}</span>
              <span className="header_optionTwo">{user ? 'Sign out' : 'Sign In'}</span>
            </div>
          </Link>

          <div className="header_option">
            
          <Link to ="/order"> <span style={{
            textDecoration:"none"
          }} className="header_optionTwo">$Orders</span></Link> 
          </div>

          <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionTwo  header_basketCount">{basket?.length}</span>
            </div>
          </Link>

        </div>
        
      </div>
   
    </div>
  );
};

export default Header;
