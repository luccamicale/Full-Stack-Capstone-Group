import { configureStore } from '@reduxjs/toolkit';
import myReducer from './home/Home';

const store = configureStore({
  reducer: {
    homes: myReducer,
  },
});

export default store;