import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { createUser } from "../redux/registration/Registration";
import { fetchUsers } from "../redux/registration/Registration";
import './Signup.css';

const Signup = () => {
  const { userStatus, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "" || password !== "") {
      const userData = { username, password };
      dispatch(createUser(userData));
    } else {
      alert("please fill all fields");
    }
  };

  useEffect(() => {
    if (userStatus === "fulfilled") {
      setSuccessMsg(true);
      dispatch(fetchUsers());
      setTimeout(() => {
        navigate("/login");
        setSuccessMsg(false);
      }, 2000);
    }
  }, [userStatus]);

  return (
    <div className="signup-container">
      <div className="signup-logo"><img src="https://s2.gifyu.com/images/logo87cfadd86b233016.gif" alt="TESLA" /></div>

      <p className="success-msg" style={{ color: 'green' }}>
        {successMsg && 'User created successfully'}
      </p>
      
      <div className="signup-box">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <div className="form-input">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="signup-btn">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
