import { Link } from 'react-router-dom'; //add links here 
import './navbar.css';
import React from 'react';

const NavbarProfessional = () => {
return (
    <div>
      <nav className="navbar">
        <div className="navdiv">
          <div className="logo"><a href="#">SalesPro Inc.</a> </div>
          <ul>
         
          <li><Link to="Home"> Home </Link></li>
          <li><Link to="Order"> Order </Link></li>
          <li><Link to="Logout"> Logout </Link></li>
          


          </ul>
        </div>
      </nav>
    </div>
        
);
};



export default NavbarProfessional;