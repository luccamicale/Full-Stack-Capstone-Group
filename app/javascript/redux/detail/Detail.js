import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/products';

export const fetchProduct = createAsyncThunk('FETCHPRODUCT', (id) => axios.get(`${url}/${id}`)
  .then((response) => {
    const product = response.data;
    console.log(product)
    return product;
  }));

const productSlice = createSlice({
  name: 'product',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (_, action) => action.payload);
  },
});

export default productSlice.reducer;
