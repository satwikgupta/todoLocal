// store.js
import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './storeSlice'; 

const store = configureStore({
  reducer: storeReducer,
});

export default store;