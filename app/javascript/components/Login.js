import React from "react";
import logo from './img/logo.png';


function Login() {

    return (
      <div className="login">
        <div className="logo"><img src={logo} alt="TESLA"/></div>
        <div className="login-box">
            <h1>Log in</h1>
            <div className="loginform">
                <form>
                <div><input type="text" value="User name"/></div>
                <div><input type="text" value="Password"/></div>
                <button type="submit">Log in</button>
                </form>
                <p>Don't have an account?</p>
                <p>Create Account</p>
            </div>
        </div>
      </div>
    );
  }

  export default Login;