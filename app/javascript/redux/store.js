import { configureStore } from '@reduxjs/toolkit';
import myReducer from './home/Home';

const store = configureStore({
  reducer: {
    greetings: myReducer,
  },
});

export default store;