import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import './Login.css';

const Login = ({ setLogin }) => {

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
      <div className="login-logo"><img src="https://s2.gifyu.com/images/logo87cfadd86b233016.gif" alt="TESLA" /></div>
      <p className="error-msg" style={{ color: 'red' }}>{error}</p>
      <div className='login-box'>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-input">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </div>

          <div className="form-input">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <button type="submit" className="login-btn">Log in</button>
          <div className="signup-link">
            <NavLink to="/signup"  >
              Don't have an account? Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;