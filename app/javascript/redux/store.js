import { configureStore } from '@reduxjs/toolkit';
import myReducer from './home/Home';
import reservationSlice from './reservation/Reservation';

const store = configureStore({
  reducer: {
    homes: myReducer,
    reservations: reservationSlice,
  },
});

export default store;