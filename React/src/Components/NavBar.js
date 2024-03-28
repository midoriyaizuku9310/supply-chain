import { Link } from 'react-router-dom'; //add routes here 
import './navbar.css'
import React from 'react';
import LogoutButton from './Logout';


const NavbarAdmin = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navdiv">
                    <div className="logo"><a href="#">SalesPro Inc.</a> </div>
                    <ul>

                        {/* <li><Link to=""> Home </Link></li>
                        <li><Link to="/products"> Products </Link></li>
                        <li><Link to="/customers"> Customer </Link></li>
                        <li><Link to="/orders"> Order </Link></li>
                        <li><Link to="/users"> Professionals </Link></li> */}
                        {localStorage.getItem('role') === null && (
                            <li><Link to="login"> LogIn </Link></li>
                        )
                        }
                        {localStorage.getItem('role') === 'Sales Admin' && (
                            <ul>
                                <li><Link to="/adminhome"> Home </Link></li>
                                <li><Link to="/products"> Products </Link></li>
                                <li><Link to="/customers"> Customers </Link></li>
                                <li><Link to="/orders"> Orders </Link></li>
                                <li><Link to="/users"> Employees </Link></li>
                                <li><Link to="/logout"> Logout </Link></li>
                            
                            </ul>
                        )
                        }

                        {localStorage.getItem('role') === 'Sales Manager' && (
                            <ul>
                                <li><Link to="home"> Home </Link></li>
                                <li><Link to="/products"> Products </Link></li>
                                <li><Link to="/customers"> Customers </Link></li>
                                <li><Link to="/orders"> Orders </Link></li>
                                
                                <li><Link to="/logout"> Logout </Link></li>
                            </ul>
                        )
                        }
                        {localStorage.getItem('role') === 'sales professional' && (
                            <ul>
                                <li><Link to="professionals"> Home </Link></li>
                                
                                <li><Link to="/orders"> Orders </Link></li>
                                
                                <li><Link to="/logout"> Logout </Link></li>
                            </ul>
                        )
                        }




                    </ul>
                </div>
            </nav>
        </div>

    );
};



export default NavbarAdmin;