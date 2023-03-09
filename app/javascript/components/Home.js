import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHomes } from '../redux/home/Home';

function Home() {
  const home = useSelector((state) => state.homes);
  const dispatch = useDispatch();
  console.log(home)

  useEffect(() => {
    dispatch(fetchHomes());
  }, [dispatch]);

  return (
    <div>
      {home.map((home) =>

(  <Link to={`${home.id}`} key={home.id}>
        <div>
            <h2>{home.name}</h2>

            <h3>{home.id}</h3>
            <h3>{home.description}</h3>
            <h4>{home.price}</h4>

            <img src={home.image}></img>
        </div>
        </Link>)
      )}

    </div>

  );
  }

  export default Home;
