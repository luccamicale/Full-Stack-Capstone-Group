import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/reservations';

export const fetchReservations = createAsyncThunk('FETCHRESERVATIONS', () => axios.get(url)
  .then((response) => {
    const reservations = response.data;
    //console.log(reservations)
    return reservations;
  }));

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.fulfilled, (_, action) => action.payload);
  },
});

export default reservationSlice.reducer