import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/signup';

export const fetchUsers = createAsyncThunk('FETCHUSERS', () => axios.get(url)
  .then((response) => {
    const users = response.data;
    return users;
  }));

export const createUser = createAsyncThunk(
  'users/createUser',
  async (userData) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(userData)
    };
    const response = await fetch(url, requestOptions)
      .then((data) => data.json())
        return response;
      });

// export const cancelReservation = createAsyncThunk(
//   'reservations/cancelReservation',
//   async (reservationId) => {
//     const requestOptions = {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json; charset=UTF-8' },
//     };
//     const response = await fetch(`${url}/${reservationId}`, requestOptions)
//       .then((data) => data.json())
//     return response;
//   });      

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    userStatus : '',
    getUserStatus: '',
 //   cancelStatus: ''
  },
  reducers: {
    updateUserStatus: (state, action) => {
      state.userStatus = action.payload;
    //  state.cancelStatus = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state, action) => {
      state.getUserStatus = "pending"
      return state
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.getUserStatus = "rejected"
      return state
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload
      state.getUserStatus = "fulfilled"
      return state
    })
    .addCase(createUser.pending, (state, action) => {
      state.userStatus = "pending"
      return state
    })
    .addCase(createUser.rejected, (state, action) => {
      state.reserveStatus = "rejected"
      return state
    })
    .addCase(createUser.fulfilled, (state, action) => {
      if (action.payload.date != null) {
        state.userStatus = "fulfilled"
      }
      return state
    })
    // .addCase(cancelReservation.pending, (state, action) => {
    //   state.cancelStatus = "pending"
    //   return state
    // })
    // .addCase(cancelReservation.rejected, (state, action) => {
    //   state.cancelStatus = "rejected"
    //   return state
    // })
    // .addCase(cancelReservation.fulfilled, (state, action) => {
    //   if (action.payload.message == 'reservation deleted') {
    //     state.cancelStatus = "fulfilled"
    //   }
    //   return state
    // })
  },
});

export const { updateUserStatus } = userSlice.actions;
export default userSlice.reducer