import { configureStore } from '@reduxjs/toolkit';
import myReducer from './home/Home';
import homesSlice from './home/Home';
import productReducer from './detail/Detail';

const store = configureStore({
  reducer: {
    homes: homesSlice,
    product: productReducer
  },
});

export default store;
