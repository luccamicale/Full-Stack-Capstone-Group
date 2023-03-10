import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createProduct } from '../redux/detail/Detail';
import { useNavigate } from 'react-router-dom';

import '../styles/Add-product.css';


const ProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const reserveStatus = useSelector((state) => state.reservations.reserveStatus);
  // const [successMsg, setSuccess] = useState(false);

  // const product = useSelector((state) => state.product);
  const placeholderTextarea = 'Enter some description about the product';
  const placeholderPrice = 'Price';

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      image,
      price,
      description
    }
    dispatch(createProduct(productData));
  }

  // useEffect(() => {
  //   navigate('/Home');
  //   dispatch(createProduct(productData));
  // }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className="form-add-product-container">
      {/* <div className="form-add-product-container"> */}
        <h1 className='add-new-product-title'>Add new product</h1>
        <div className="product-fields">
          <div className='input-field'>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}
            placeholder="Product name" autoComplete='true' />
          </div>

          <div className='input-field'>
            <input type="text" onChange={(e) => setImage(e.target.value)} value={image} placeholder="Image URL" />
          </div>

          <div className='input-field'>
            <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}
            placeholder={placeholderPrice} autoComplete='true'/>
          </div>

          <div className='input-field'>
            <textarea maxLength="1000" minLength="10px" onChange= {(e) => setDescription(e.target.value)}
              value ={description}  autoComplete="true" placeholder={placeholderTextarea} />

          </div>

        </div>

        <input type="submit" value = "Add product" className='btn-add-product' />
      {/* </div> */}
    </form>
  )
}

export default ProductForm
