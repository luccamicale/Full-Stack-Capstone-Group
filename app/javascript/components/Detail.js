import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/detail/Detail';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
          <h3 className='product-name'>{product.name}</h3>

            <div className='data-row'>
              <p className='text-label'>
                Product price
              </p>
              <p>
                {product.price}
              </p>
              <p>
                {product.description}
              </p>
            </div>

        <button type='button' className='btn-reserve-from-detail' onClick={() => { setProduct(product.id); navigate('/reservationForm') }}> Reserve</button>

         </div>
        </div>


  );
}

export default Detail;
