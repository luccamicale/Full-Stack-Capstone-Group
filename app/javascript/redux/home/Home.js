import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/products';

export const fetchGreetings = createAsyncThunk('FETCHMESSAGE', () => axios.get(url)
  .then((response) => {
    const greeting = response.data;
    console.log(greeting)
    return greeting;
  }));

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (_, action) => action.payload);
  },
});

export default greetingsSlice.reducer;