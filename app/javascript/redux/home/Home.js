import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://reserve-tesla-car.onrender.com/api/v1/products';

export const fetchHomes = createAsyncThunk('FETCHMESSAGE', () => axios.get(url)
  .then((response) => {
    const home = response.data;
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
