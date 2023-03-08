import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/reservations';

export const fetchReservations = createAsyncThunk('FETCHRESERVATIONS', () => axios.get(url)
  .then((response) => {
    const reservations = response.data;
    return reservations;
  }));

export const reserveProduct = createAsyncThunk(
  'reservations/reserveProduct',
  async (reservationData) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(reservationData)
    };
    const response = await fetch(url, requestOptions)
      .then((data) => data.json())
        return response;
      });

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
    reserveStatus : '',
    getReservationStatus: ''
  },
  reducers: {
    updateReservationStatus: (state, action) => {
      state.reserveStatus = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchReservations.pending, (state, action) => {
      state.getReservationStatus = "pending"
      return state
    })
    .addCase(fetchReservations.rejected, (state, action) => {
      state.getReservationStatus = "rejected"
      return state
    })
    .addCase(fetchReservations.fulfilled, (state, action) => {
      state.reservations = action.payload
      state.getReservationStatus = "fulfilled"
      return state
    })
    .addCase(reserveProduct.pending, (state, action) => {
      state.reserveStatus = "pending"
      return state
    })
    .addCase(reserveProduct.rejected, (state, action) => {
      state.reserveStatus = "rejected"
      return state
    })
    .addCase(reserveProduct.fulfilled, (state, action) => {
      if (action.payload.date != null) {
        state.reserveStatus = "fulfilled"
      }
      return state
    })
  },
});

export const { updateReservationStatus } = reservationSlice.actions;
export default reservationSlice.reducer