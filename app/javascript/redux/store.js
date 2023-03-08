import { configureStore } from '@reduxjs/toolkit';
import myReducer from './home/Home';
import homesSlice from './home/Home';
import productReducer from './detail/Detail';
import reservationSlice from './reservation/Reservation';

const store = configureStore({
  reducer: {
    homes: homesSlice,
    product: productReducer,
     reservations: reservationSlice
  },
});

export default store;
