import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from './weatherAPI';


const initialState = {
  weatherData: null,
  loading: false,
  error: null
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { setWeatherData, setLoading, setError } = weatherSlice.actions;

export const fetchWeatherData = ({city, units}) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await fetchWeather(city, units);
    dispatch(setWeatherData(data));
  } catch (error) {
    dispatch(setError('Error fetching weather data'));
  }
};

export default weatherSlice.reducer;
