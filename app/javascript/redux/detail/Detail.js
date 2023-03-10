import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/products';

export const fetchProduct = createAsyncThunk('FETCHPRODUCT', (id) => axios.get(`${url}/${id}`)
  .then((response) => {
    const product = response.data;
    console.log(product)
    return product;
  }));


  export const createProduct = createAsyncThunk(
    'products/createproduct',
    async (productData) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(productData)
      };
      const response = await fetch(url, requestOptions)
        .then((data) => data.json())
          return response;
  });

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: ''
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (_, action) => action.payload)
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = 'success';
        return state;
      })
      .addCase(createProduct.pending, (state, action) => {
        state.status = 'loading';
        return state;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';
         return state;
       })
  },
});

export default productSlice.reducer;
