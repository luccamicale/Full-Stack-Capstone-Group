import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { fetchUsers } from '../redux/registration/Registration';

function Login() {

  const [username, setUsername] = useState('Username');
  const [password, setPassword] = useState('Password');
  const users = useSelector((state) => state.users.users);
  const usernameArray = users.username.split()
  if(users.username.includes(username)) {
    e.preventDefault();
    handleSubmit
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