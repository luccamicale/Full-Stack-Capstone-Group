import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const homes = useSelector((state) => state.homes);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="latest-model">Latest Models</h1>
      <hr></hr>
      <h4 className="tesla-model">Please select a Tesla Model</h4>
      <Slider {...settings}>
        {homes.map((home) => (
          <Link to={`${home.id}`} key={home.id}>
            <div className="container">
              <img className="image" src={home.image}></img>
              <h2>{home.name}</h2>
              <h3>{home.description}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
