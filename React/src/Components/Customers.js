import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Customers.css'
import { useNavigate } from 'react-router';
function Customers() {

const navigate = useNavigate()
useEffect(() => {
  if(localStorage.getItem('role') !=='Sales Admin' && localStorage.getItem('role') !=='Sales Manager')
  navigate('/login');
},[])

  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    cid :'',
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    axios.get('http://localhost:5231/api/Customer')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  };

  const addCustomer = () => {
    axios.post('http://localhost:5231/api/Customer', newCustomer)
      .then(() => {
        fetchCustomers();
        setNewCustomer({
          cid:'',
          name: '',
          phone: '',
          email: '',
          address: ''
        });
      })
      .catch(error => console.error('Error adding customer:', error));
  };

  const deleteCustomer = cid => {
    axios.delete(`http://localhost:5231/api/Customer/${cid}`)
      .then(() => {
        fetchCustomers();
      })
      .catch(error => console.error('Error deleting customer:', error));
  };

  const fetchCustomerById = cid => {
    axios.get(`http://localhost:5231/api/Customer/${cid}`)
      .then(response => {
        setSelectedCustomer(response.data);
        setSelectedCustomerId(cid);
      })
      .catch(error => console.error('Error fetching customer by ID:', error));
  };

  const updateCustomer = () => {
    console.log(selectedCustomerId);
    console.log(selectedCustomer)
    axios.put(`http://localhost:5231/api/Customer/${selectedCustomerId}`,selectedCustomer)
      .then(() => {
        fetchCustomers();
        setSelectedCustomerId('');
        setSelectedCustomer({
          name: '',
          phone: '',
          email: '',
          address: ''
        });
      })
      .catch(error => console.error('Error updating customer:', error));
  };
  return (
    
    <div>
      <h2>Add Customer</h2>
      <div>
        <input
          type="text"
          placeholder="Customer Id"
          value={newCustomer.cid}
          onChange={e => setNewCustomer({ ...newCustomer, cid: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newCustomer.name}
          onChange={e => setNewCustomer({ ...newCustomer, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={newCustomer.phone}
          onChange={e => setNewCustomer({ ...newCustomer, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newCustomer.email}
          onChange={e => setNewCustomer({ ...newCustomer, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newCustomer.address}
          onChange={e => setNewCustomer({ ...newCustomer, address: e.target.value })}
        />
        <button onClick={addCustomer}>Add</button>
      </div>
      {selectedCustomerId && (
        <div>
          <h2>Edit Customer</h2>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={selectedCustomer.name}
              onChange={e => setSelectedCustomer({ ...selectedCustomer, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              value={selectedCustomer.phone}
              onChange={e => setSelectedCustomer({ ...selectedCustomer, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Email"
              value={selectedCustomer.email}
              onChange={e => setSelectedCustomer({ ...selectedCustomer, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              value={selectedCustomer.address}
              onChange={e => setSelectedCustomer({ ...selectedCustomer, address: e.target.value })}
            />
            <button onClick={updateCustomer}>Update</button>
          </div>
        </div>
      )}
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.cid}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>
                <button onClick={() => deleteCustomer(customer.cid)}>Delete</button>
                <button onClick={() => fetchCustomerById(customer.cid)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default Customers;