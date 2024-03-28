import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Supply2 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleLoginButton = () => {
    handleLogin(username, password);
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5231/api/DataExtraction/getAllUsers');

      const users = await response.json();
      console.log(users)

      const user = users.find(user => user.username === username && user.password === password);
      localStorage.setItem("currentUser",user)
      if (user) {
        if (user.role === 'sales professional') {
          
          console.log("Navigated to the Professional Page ")
          navigate('/orders')
        }
        else if (user.role == 'Sales Manager') {
          console.log("Navigated to the Sales Manager Page ")
         
          navigate('/home')
        }
        else if (user.role == 'Sales Admin'){
        console.log("Navigated to the Administartor Part")
      
        navigate('/adminhome')
      }
    }
      else{
        console.log("Navigated to the 404 Not Found Landing Page ")
        navigate('./failed')
      }
    } catch (error) {
     
    }
  };

  return (
    <div>
      <h3> Enter the User Credentials to Login </h3>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="UserName" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLoginButton}>Login</button>
    </div>
  );
}
export default Supply2