import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/detail/Detail';
import { useParams } from 'react-router-dom';

import '../../assets/stylesheets/components/Detail.css';

function Detail() {
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
          <h2>{product.name}</h2>
          <h3>{product.id}</h3>
          <h3>{product.description}</h3>
          <h4>{product.price}</h4>

          <button type='button'> Reserve</button>
        </div>

  );
  }

  export default Detail;
