import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Orders.css'


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [customerId, setCustomerId] = useState('');
  const [orderId, setOrderId] = useState('');
  const [newStatusIds, setNewStatusIds] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5231/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const searchOrdersByCustomerId = async () => {
    try {
      const response = await axios.get(`http://localhost:5231/api/orders/search?customerId=${customerId}`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error searching orders:', error);
    }
  };

  const searchOrdersByOrderId = async () => {
    try {
      const response = await axios.get(`http://localhost:5231/api/orders/searchh?orderId=${orderId}`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error searching orders:', error);
    }
  };

  const resetSearch = () => {
    setCustomerId('');
    setOrderId('');
    fetchOrders();
  };

  const updateOrderStatus = async (orderId, newStatusId) => {
    try {
      const confirmed = window.confirm('Are you sure you want to update the order status?');
      if (confirmed) {
        const updatedOrder = {
          Id: orderId,
          Sid: newStatusId
        };
        await axios.put(`http://localhost:5231/api/orders/${orderId}/status?newStatusId=${newStatusId}`, updatedOrder);
        fetchOrders();
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const statusMap = {
    Status001: 'Order Placed',
    Status002: 'Order Processing',
    Status003: 'Order Shipped',
    Status004: 'Order In-transit',
    Status005: 'Order Delivered',
    Status006: 'Order Cancelled'
  };

  return (
    <div>
      {/* <br/>
      <br/>
      <div/> */}
      <h1>Order Management</h1>
      <div>
        <input type="text" placeholder="Customer ID" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
        <button onClick={searchOrdersByCustomerId}>Search</button>
        <input type="text" placeholder="Order ID" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        <button onClick={searchOrdersByOrderId}>Search</button>
        <button onClick={resetSearch}>Reset</button>
      </div>
      <div>
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.cid}</td>
                <td>{order.pid}</td>
                <td>{order.qty}</td>
                <td>{statusMap[order.sid]}</td>
                <td>
                  <select value={newStatusIds[order.id] || ''} onChange={(e) => setNewStatusIds({ ...newStatusIds, [order.id]: e.target.value })}>
                    <option value="" disabled>Select Status</option>
                    <option value="Status001">Order Placed</option>
                    <option value="Status002">Order Processing</option>
                    <option value="Status003">Order Shipped</option>
                    <option value="Status004">Order In-transit</option>
                    <option value="Status005">Order Delivered</option>
                    <option value="Status006">Order Cancelled</option>
                  </select>
                  <button onClick={() => updateOrderStatus(order.id, newStatusIds[order.id])}>Update Status</button>
                </td>
              </tr>
            ))}
          </tbody>
          <br/>
          <br/>
        </table>
      </div>
    </div>
  );
};

export default Orders;