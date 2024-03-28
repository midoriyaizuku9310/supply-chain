import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import './Home.css';
import NavbarAdmin from './NavBar';

function AdminHome() {
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('role') !=='Sales Admin')
    navigate('/login');
  
  },[])
  return (
    <div>
      
    <div className="dashboard-container">
        <div className="dashboard-card">
        <h2 className="dashboard-title">Manage Employees</h2>
        <p className="dashboard-description">Click below to manage Employee Roles</p>
        <Link to="/users" className="dashboard-link">Manage Employees</Link> {/* Use Link instead of anchor tag */}
      </div>
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

export default AdminHome;