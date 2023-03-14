import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://reserve-tesla-car.onrender.com/api/v1/signup';
const usersUrl = 'https://reserve-tesla-car.onrender.com/api/v1/users';

export const fetchUsers = createAsyncThunk('FETCHUSERS', () => axios.get(usersUrl)
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


const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    userStatus : '',
    getUserStatus: '',
  },
  reducers: {
    updateUserStatus: (state, action) => {
      state.userStatus = action.payload;
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
      if(action.payload.length > 0) {
        state.getUserStatus = "fulfilled"
        state.users = action.payload
      }
      return state
    })
    .addCase(createUser.pending, (state, action) => {
      state.userStatus = "pending"
      return state
    })
    .addCase(createUser.rejected, (state, action) => {
      state.userStatus = "rejected";
      return state
    })
    .addCase(createUser.fulfilled, (state, action) => {
      if (action.payload.username != null) {
        state.userStatus = "fulfilled"
      }
      return state
    })
  },
});

export const { updateUserStatus } = userSlice.actions;
export default userSlice.reducer