import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHomes } from '../redux/home/Home';
import '../styles/home.css';

import {useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import Detail from './components/Detail';

function Home() {
  const home = useSelector((state) => state.homes);
  const dispatch = useDispatch();
  console.log(home)

  const navigate = useNavigate();


  const handleDetailsClick = () => {
    const pathToDetail = '/Details';
    navigate(pathToDetail);
   // <Link to="/Details"></Link>
  };

  useEffect(() => {
    dispatch(fetchHomes());
  }, [dispatch]);

  return (
    <div>
      {home.map((home) =>

(  <Link to={`${home.id}`} key={home.id}>
{/* <button type='button' onClick={handleDetailsClick} className="btn-to-details"> */}
        <div className='container'>
            <h2>{home.name}</h2>

            <h3>{home.id}</h3>
            <h3>{home.description}</h3>
            <h4>{home.price}</h4>

            <img className='image' src={home.image}></img>
        </div>

        {/* </button> */}
        </Link>)
      )}

    </div>

  );
  }

  export default Home;
