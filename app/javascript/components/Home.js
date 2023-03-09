import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  const home = useSelector((state) => state.homes);
  
  return (
    <div>
      {home.map((home) =>

      (<Link to={`${home.id}`} key={home.id}>
        {/* <button type='button' onClick={handleDetailsClick} className="btn-to-details"> */}
        <div>
          <h2>{home.name}</h2>

          <h3>{home.id}</h3>
          <h3>{home.description}</h3>
          <h4>{home.price}</h4>

          <img src={home.image}></img>
        </div>

        {/* </button> */}
      </Link>)
      )}

    </div>

  );
}

export default Home;
