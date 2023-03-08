import React from 'react';
//import { Routes, Route } from 'react-router-dom';

//import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function NavBar() {
 // const dispatch = useDispatch();
 // dispatch(retrieveRocket());

  return (
    <div className="navbar">

      <ul className="ul-nav">
        <li className="link-item">
          <NavLink className="item" to="/">
            INSERT LOGO HERE
          </NavLink>
        </li>
        <li className="link-item">
          <NavLink className="item" to="/Home">
            Home
          </NavLink>
        </li>

        {/* <li>
          <NavLink className="item" to="/Details">
            Details
          </NavLink>
        </li> */}
        <li>
          <NavLink className="item" to="/Reservations">
            Reservations
          </NavLink>
        </li>
     </ul>

    </div>
  );
}

export default NavBar;
