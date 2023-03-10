import { configureStore } from '@reduxjs/toolkit';
import homesReducer from './home/Home';
// import homesSlice from './home/Home';
import productReducer from './detail/Detail';
import reservationReducer from './reservation/Reservation';

const store = configureStore({
  reducer: {
    homes: homesReducer,
    product: productReducer,
     reservations: reservationReducer
  },
});

export default store;
