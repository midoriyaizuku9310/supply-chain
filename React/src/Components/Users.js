import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';
import { useNavigate } from 'react-router';

function Users() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedRoleId, setSelectedRoleId] = useState('');
   
    useEffect(() => {
      fetchUsers();
    }, []);
    const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('role') !=='Sales Admin')
    navigate('/login');
  },[])
   
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5231/api/User');
        console.log(response.data)
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
   
    const handleChangeRole = async () => {
      try {
        await axios.put(`http://localhost:5231/api/User/updateRole/${selectedUserId}/${selectedRoleId}`);
        console.log(`Changed role for user ${selectedUserId} to role ${selectedRoleId}`);
      } catch (error) {
        console.error('Error changing role:', error);
      }
    };
   
    return (
      <div>
        <h1>User Role Management</h1>
        <div>
          <label>Select User:</label>
          <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
            <option value="">Select User</option>
            {users.map(user => (
              <option key={user.userId} value={user.userId}>{user.userName} </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Role:</label>
          <select value={selectedRoleId} onChange={(e) => setSelectedRoleId(e.target.value)}>
            <option value="">Select Role</option>
            <option value="1">Sales Professional</option>
            <option value="2">Sales Manager</option>
          </select>
        </div>
        <button onClick={handleChangeRole}>Change Role</button>
        <div>
        <h2>All Users</h2>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.roleName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>    
    );
  };

export default Users;


