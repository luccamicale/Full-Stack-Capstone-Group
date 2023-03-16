import { configureStore } from '@reduxjs/toolkit';
import homesReducer from './home/Home';
// import homesSlice from './home/Home';
import productReducer from './detail/Detail';
import reservationReducer from './reservation/Reservation';
import userSlice from './registration/Registration';

const store = configureStore({
  reducer: {
    homes: homesReducer,
    product: productReducer,
    reservations: reservationReducer,
    users: userSlice
  },
});

export default store;
