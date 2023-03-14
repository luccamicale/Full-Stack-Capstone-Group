import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';

function Login({ setLogin }) {

  const path = '/Home';
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector((state) => state.users.users);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== '' || password !== '') {
     const loginUser = users.filter((user) => user.username === username && user.password === password)
      if (loginUser.length > 0) {
        localStorage.setItem('user', JSON.stringify(loginUser[0]));
        setLogin(true);
      } else {
        setError('Please enter valid user name and password')
      }
    } else {
      setError('Please enter valid user name and password');
    }
  }


  return (
    <div className="login-container">
      <h1>Log in</h1>
      <p className="error-msg" style={{ color: 'red' }}>{error}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Log in</button>
      </form>
      <div>
        <p>Don't have an account?</p>
        <NavLink className="link-item" to="/signup"  >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default Login;