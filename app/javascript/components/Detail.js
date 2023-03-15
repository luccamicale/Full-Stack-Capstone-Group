import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/detail/Detail';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import loggg from './img/loggg.png';
import logo from './img/logo.gif';

import '../styles/Detail.css';

const Detail = ({setProduct}) => {
  const navigate = useNavigate();

  const product = useSelector((state) => state.product);
  
  const dispatch = useDispatch();
  

  const params = useParams();
  const idProduct = Number(params.id);
  

  useEffect(() => {
    dispatch(fetchProduct(idProduct));
  }, [dispatch]);

  return (

        <div className='product-wrapper'>
          <img src="https://s2.gifyu.com/images/logo87cfadd86b233016.gif" alt="Logo" className='logo-details' />

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
