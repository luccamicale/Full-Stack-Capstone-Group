import { configureStore } from '@reduxjs/toolkit';
import myReducer from './greetings/Greetings';

const store = configureStore({
  reducer: {
    greetings: myReducer,
  },
});

export default store;