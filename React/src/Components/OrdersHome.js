import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './OrdersHome.css'
const OrdersHome = () => {
  return (
    <>
    <div className="landing-page-container">
      <div className="card">
        <Link to="/orders" className="card-link">
          <h2>Order Management</h2>
          <FaShoppingCart className="icon" />
        </Link>
      </div>
    </div>
    </>
  );
};
 
export default OrdersHome;