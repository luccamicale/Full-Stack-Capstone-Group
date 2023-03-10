import React from "react";
import logo from './img/logo.png';
import './Login.css'

function Login() {

    return (
      <div className="login">
        <div className="landinglogo"><img src={logo} alt="TESLA"/></div>
        <div className="login-box">
            <h1>Log in</h1>
            <div className="loginform">
                <form className="loginformtag">
                <div><input type="text" value="User name"/></div>
                <div><input type="text" value="Password"/></div>
                <p>Log in</p>
                </form>
                <p>Don't have an account?</p>
                <p>Create Account</p>
            </div>
        </div>
      </div>
    );
  }

  export default Login;