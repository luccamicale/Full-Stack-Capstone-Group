import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/detail/Detail';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './img/logo.png';
import loggg from './img/loggg.png'

import '../styles/Detail.css';

function Detail({setProduct}) {
  const navigate = useNavigate();

  const product = useSelector((state) => state.product);
  console.log(`product in details page= ${product}`);
  const dispatch = useDispatch();
  console.log(product);

  const params = useParams();
  const idProduct = Number(params.id);
  console.log(`params= ${params}`);

  useEffect(() => {
    dispatch(fetchProduct(idProduct));
  }, [dispatch]);

  return (

        <div className='product-wrapper'>

          <img src={product.image} className="product-image"></img>
         <div className='body-description'>
          <h2 className='product-name-model'>{product.name}</h2>
          <hr></hr>

            <div className='data-row'>
              <h4 className='text-label'>
                Product price
              </h4>
              <p>
                {product.price}
              </p>
            </div>

            <p className='description'>
              {product.description}
            </p>

            <h5>DISCOVER MORE MODELS</h5>

        <button type='button' className='btn-reserve-from-detail' onClick={() => { setProduct(product.id); navigate('/reservationForm') }}> Reserve</button>
        <img src={loggg} alt="Loading" className='load-details' />
         </div>
        </div>


  );
}

export default Detail;
