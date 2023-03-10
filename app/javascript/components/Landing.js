import React from "react";
import logo from './img/logo.png';
import './Landing.css'


function Landing() {

    return (
      <div className="landing">
        <div className="logo"><img src={logo} alt="TESLA"/></div>
        <div className="title"><h1>The future is electric</h1></div>
        <div className="subtitle"><h3>Model S</h3></div>
      </div>
    );
  }

  export default Landing;
