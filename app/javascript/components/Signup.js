import React from "react";
import logo from './img/logo.png';
//import './Login.css'
import fetchUsers from '../redux/registration/Registration';
import { useSelector } from "react-redux";

function Signup() {

  const [username, setUsername] = useSate('username');
  const [password, setPassword] = useSate('Password');
  const users = useSelector((state) => state.users);


  return (
      <div className="signup">
        <div className="landinglogo"><img src={logo} alt="TESLA"/></div>
        <div className="signup-box">
            <h1>Log in</h1>
            <div className="signupform">
                <form className="signupformtag" onSubmit={handleSubmit}>
                <div><input type="text" value="User name" onChange={(e) => setUsername(e.target.value) }/></div>
                <div><input type="text" value="Password"  onChange={(e) => setPassword(e.target.value) }/></div>
                <button type="submit">Signup</button>
                </form>
            </div>
        </div>
      </div>
    );
  }

  export default Signup;