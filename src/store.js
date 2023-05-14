import { configureStore } from '@reduxjs/toolkit';
// import weatherReducer from '../weather/weatherSlice';
import weatherReducer from './weatherSlice'

const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
});

export default store;
