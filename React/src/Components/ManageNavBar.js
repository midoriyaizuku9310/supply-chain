import { Link } from 'react-router-dom'; //add links here 
import './navbar.css'
import React from 'react';

const NavbarManager = () => {
return (
    <div>
      <nav className="navbar">
        <div className="navdiv">
          <div className="logo"><a href="#">SalesPro Inc.</a> </div>
          <ul>
         
          <li><Link to="Home"> Home </Link></li>
          <li><Link to="/products"> Products </Link></li>
          <li><Link to="/customers"> Customer </Link></li> 
          <li><Link to="/orders"> Order </Link></li>
          <li><Link to="/logout"> Logout </Link></li>
          


          </ul>
        </div>
      </nav>
    </div>
        
);
};



export default NavbarManager;