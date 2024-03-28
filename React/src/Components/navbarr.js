import { Link } from 'react-router-dom';
import './navbar.css';
import React from 'react';

const Navbar = () => {
return (
    <div>
      <nav className="navbar">
        <div className="navdiv">
          <div className="logo"><a href="#">SalesPro Inc.</a> </div>
          <ul>
         
          <li><Link to=""> Home </Link></li>
          {/* <li><Link to="About"> About </Link></li>
          <li><Link to="Contact"> Contact </Link></li> */}
          <li><Link to="login"> Login </Link></li> 

          </ul>
        </div>
      </nav>
    </div>
        
);
};



export default Navbar;