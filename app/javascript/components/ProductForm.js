import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createProduct } from '../redux/detail/Detail';
import { useNavigate } from 'react-router-dom';
import { fetchHomes } from '../redux/home/Home';
import '../styles/Add-product.css';
import { updateStatus } from '../redux/detail/Detail';


const ProductForm = () => {
  const navigate = useNavigate();
  const pathToProducts = '/Home';
  const dispatch = useDispatch();
  const [messageCreateProduct, setMessageCreateProduct] = useState(false);
  const createProductStatus = useSelector((state) => state.product.status);
  const placeholderTextarea = 'Enter some description about the product';
  const placeholderPrice = 'Price';

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (createProductStatus === 'success') {
      setMessageCreateProduct(true);
      dispatch(fetchHomes());
      setTimeout(() => {
        setMessageCreateProduct(false);
        dispatch(updateStatus(''));
        navigate(pathToProducts);
      }, 3000);
    }
  }, [createProductStatus, dispatch]);

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

  return (
    <form onSubmit={handleSubmit} className="form-add-product-container">
      <h2 className="add-new-product-title">New Car</h2>
      <h3 className='sub-title-newcar'>
        If you wish, you can add the latest Tesla model here, with its respective description, price and image.
      </h3>
      <div className="product-fields">
        <div className="input-field">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Product name"
            autoComplete="true"
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            placeholder="Image URL"
          />
        </div>

        <div className="input-field">
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder={placeholderPrice}
            autoComplete="true"
          />
        </div>

        <div className="input-field">
          <textarea
            maxLength="1000"
            minLength="10px"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            autoComplete="true"
            placeholder={placeholderTextarea}
          />
        </div>
      </div>

      <input type="submit" value="Add product" className="btn-add-product" />

      {messageCreateProduct && (
        <p className="create-product-status-text">
          'Product created successfully!'
        </p>
      )}
    </form>
  );
}

export default ProductForm
