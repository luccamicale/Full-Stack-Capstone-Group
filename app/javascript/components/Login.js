import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { fetchUsers } from '../redux/registration/Registration';
import { useNavigate } from 'react-router-dom';

function Login() {

  const path = '/Home';
  const navigate = useNavigate();
  const [username, setUsername] = useState('Username');
  const [password, setPassword] = useState('Password');
  const users = useSelector((state) => state.users.users);
  console.log(`users.username= ${users}`)
  //const usernameArray = users.username.split()
  if(users.username === username) {
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      const userData = {username,password};
    navigate(path);
    }


    }
 
 
  

    return (
      <form onSubmit={handleSubmit}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      
        <input type="number" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button type="submit">Log in</button>
    </form>
    );
}

  export default Login;