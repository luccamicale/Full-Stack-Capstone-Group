import React from "react";
import logo from './img/logo.png';
//import './Login.css'
//import fetchUsers from '../redux/registration/Registration';
import { useSelector , useDispatch } from "react-redux";
import { useState } from "react";
import { createUser } from "../redux/registration/Registration";
function Signup() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('Password');
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    const userData = {username,password};
    dispatch(createUser(userData));
  }
  return (
      <div className="signup">
        <div className="landinglogo"><img src={logo} alt="TESLA"/></div>
        <div className="signup-box">
            <h1>Log in</h1>
            <div className="signupform">
                <form className="signupformtag" onSubmit={handleSubmit}>
                <div><input type="text" value={username} onChange={(e) => setUsername(e.target.value) }/></div>
                <div><input type="text" value={password}  onChange={(e) => setPassword(e.target.value) }/></div>
                <button type="submit">Signup</button>
                </form>
            </div>
        </div>
      </div>
    );
  }

  export default Signup;