import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import image from './t6esp1pk.jpg'
const Supply = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError,setLoginError] = useState(false);
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
      if (user) {
        localStorage.setItem('role',user.role)
        console.log(localStorage.getItem('role'))
        if (user.role === 'sales professional') {
          // Redirect to sales manager page
          // Example: history.push('/sales-manager');
          console.log("Navigated to the Professional Page ")
          navigate('/professionals')
          window.location.reload()
          
        }
        else if (user.role == 'Sales Manager') {
          console.log("Navigated to the Sales Manager Page ")
          // Redirect to other page based on role
          // Example: history.push('/other-page');
          navigate('/home')
          window.location.reload()
        }
        else if (user.role == 'Sales Admin') {
          console.log("Navigated to the Administartor Part")
          // Display an error message for invalid credentials
          navigate('/adminhome')
          window.location.reload()
        }
      }
      else {
        setLoginError(true);
        // console.log("Navigated to the 404 Not Found Landing Page ")
        // navigate('/failed')
      }
    } catch (error) {
      console.error('Error during login :',error);
      // Handle error
    }
  };

  return (
   
    <div className="login-container">
      <h2>Login</h2>
      <div className='login-container'>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="User Name" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        {loginError && <p className="error-message">Invalid credentials</p>} {/* Render error message if loginError is true */}
      </div>
      <div className='login-container button'>
        <button onClick={handleLoginButton}>Login</button>
      </div>
    </div>
  
  );
}
export default Supply