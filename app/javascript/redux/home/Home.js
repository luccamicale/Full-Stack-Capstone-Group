import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/products';

export const fetchHomes = createAsyncThunk('FETCHMESSAGE', () => axios.get(url)
  .then((response) => {
    const home = response.data;
    console.log(home)
    return home;
  }));

const homesSlice = createSlice({
  name: 'homes',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchHomes.fulfilled, (_, action) => action.payload);
  },
});

export default homesSlice.reducer;