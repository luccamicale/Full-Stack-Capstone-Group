import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/products';

export const fetchProduct = createAsyncThunk('FETCHPRODUCT', (id) => axios.get(`${url}/${id}`)
  .then((response) => {
    const product = response.data;
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

  export const cancelProduct = createAsyncThunk(
    'products/cancelProduct',
    async (productId) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      };
      const response = await fetch(`${url}/${productId}`, requestOptions)
        .then((data) => data.json())
      return response;
    });

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    status: '',
    cancelStatus: ''
  },
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload;
      state.cancelStatus = action.payload;
      return state;
    },
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
       .addCase(cancelProduct.pending, (state, action) => {
        state.cancelStatus = "pending"
        return state
      })
      .addCase(cancelProduct.rejected, (state, action) => {
        state.cancelStatus = "rejected"
        return state
      })
      .addCase(cancelProduct.fulfilled, (state, action) => {
        if (action.payload.message == "product deleted") {
          state.cancelStatus = "fulfilled";
        }
        return state
      })
  },
});

export const { updateStatus } = productSlice.actions;
export default productSlice.reducer;
