import React from "react";
import "./Home.css";
import {Route} from 'react-router-dom'
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
       
        <Products/>
      </div>
    
    </div>
  );
};

export default Home;
