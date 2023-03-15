import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../components/navbar.css'
import logo from '../components/img/logo.gif';


function NavBar({ setProduct, userId }) {

  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setClicked(!clicked)
  }

  const set = () => {
    handleClick()
    setProduct(null)
  }

  return (
    <div className='nav' id="navbar">
      <div className="menuButton" id="menuButton" onClick={handleClick}><p>Menu</p></div>
      <div className={`menu ${clicked ? 'active' : ''}`}>
        <ul className="ul-nav">

          {(userId) && <> <li className="link-item">
            <NavLink className="item" to="/" onClick={handleClick} style={({ isActive }) => (isActive ? { color: '#fff', border: 'solid 1px #1dbe28', backgroundColor: '#1dbe28' } : { color: 'black' })}>
              <img src={logo} alt="TESLA" className='menulogo' />
            </NavLink>
          </li>
            <li className="link-item">
              <NavLink className="item" to="/Home" onClick={handleClick} style={({ isActive }) => (isActive ? { color: '#fff', border: 'solid 1px #1dbe28', backgroundColor: '#1dbe28' } : { color: 'black' })}>
                Cars
              </NavLink>
            </li>

            <li>
              <NavLink className="link-item" to="/reservationForm" onClick={set} style={({ isActive }) => (isActive ? { color: '#fff', border: 'solid 1px #1dbe28', backgroundColor: '#1dbe28' } : { color: 'black' })}>
                Reserve
              </NavLink>
            </li>

            <li>
              <NavLink className="link-item" to="/Reservations" onClick={handleClick} style={({ isActive }) => (isActive ? { color: '#fff', border: 'solid 1px #1dbe28', backgroundColor: '#1dbe28' } : { color: 'black' })}>
                My Reservations
              </NavLink>
            </li>

            <li>
              <NavLink className="link-item" to="/new-product" onClick={handleClick} style={({ isActive }) => (isActive ? { color: '#fff', border: 'solid 1px #1dbe28', backgroundColor: '#1dbe28' } : { color: 'black' })}>
                Add Cars
              </NavLink>
            </li>

            <li>
              <NavLink className="link-item" to="/Products" onClick={handleClick} style={({ isActive }) => (isActive ? { color: '#fff', border: 'solid 1px #1dbe28', backgroundColor: '#1dbe28' } : { color: 'black' })}>
                Delete Cars
              </NavLink>
            </li>

            <li>
              <NavLink className="link-item" to="/" onClick={() => localStorage.clear('user')} style={{ color: '#fff', border: 'solid 1px red', backgroundColor: 'red', borderRadius: '5px' }}>
                Logout
              </NavLink>
            </li>
          </>}

          {(!userId) && <><li>

            <NavLink className="link-item" to="/login" onClick={handleClick} style={({ isActive }) => (isActive ? { color: '#fff', border: 'solid 1px #1dbe28', backgroundColor: '#1dbe28' } : { color: 'black' })}>
              Log in
            </NavLink>
          </li>

          </>}
        </ul>

      </div>
    </div>
  );
}

export default NavBar;
