import React from 'react';
import { FaAlignCenter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const LogoutButton = () =>{
    const navigate = useNavigate();
    localStorage.removeItem('role');
    navigate('/login');
    
   return(
    <h1 style={{textAlign:'center'}}>You Have Successfully Logout!</h1>

   ) 
}

export default LogoutButton;