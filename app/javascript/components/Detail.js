import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/detail/Detail';

function Detail() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(product)

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (

        <div>
          <h2>{product.name}</h2>
          <h3>{product.id}</h3>
          <h3>{product.description}</h3>
          <h4>{product.price}</h4>
          <img src={product.image}></img>
        </div>

  );
  }

  export default Detail;
