import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../components/navbar.css'
import logo from '../components/img/logo.gif';

function NavBar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className='nav' id="navbar">
       <div className="menuButton" id="menuButton" onClick={handleClick}><p>Menu</p></div>
       <div className={`menu ${clicked ? 'active' : ''}`}>
        <ul className="ul-nav">
        <li className="link-item">
          <NavLink className="item" to="/"onClick={handleClick}>
          <img src={logo} alt="TESLA" className='menulogo'/>
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink className="item" to="/Home"onClick={handleClick}>
            Home
          </NavLink>
        </li>
 
        <li>  
          <NavLink className="item" to="/Reservations"onClick={handleClick}>
            Reservations
          </NavLink>
        </li>
        </ul>
       </div>
    </div>
  );
}

export default NavBar;
