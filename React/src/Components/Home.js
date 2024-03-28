import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home.css';
import NavbarManager from './ManageNavBar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('role') !=='Sales Manager')
    navigate('/login');
  },[])
  return (
    <div>
      
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">Manage Products</h2>
        <p className="dashboard-description">Click below to manage products</p>
        <Link to="/products" className="dashboard-link">Manage Products</Link> {/* Use Link instead of anchor tag */}
      </div>
      <div className="dashboard-card">
        <h2 className="dashboard-title">Manage Customers</h2>
        <p className="dashboard-description">Click below to manage customers</p>
        <Link to="/customers" className="dashboard-link">Manage Customers</Link> {/* Use Link instead of anchor tag */}
      </div>
      <div className="dashboard-card">
        <h2 className="dashboard-title">Manage Orders</h2>
        <p className="dashboard-description">Click below to manage orders</p>
        <Link to="/orders" className="dashboard-link">Manage Orders</Link> {/* Use Link instead of anchor tag */}
      </div>
    </div>
    </div>
  );
}

export default Home;