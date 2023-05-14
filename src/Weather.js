import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from './weatherSlice';

function Weather() {
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('imperial');
  const [temp, setTemp] = useState('c');
  const weatherData = useSelector((state) => state.weather.weatherData);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData({city,units}));
    // setCity('');
  };
  const unitHandler=(e)=>{
    e.preventDefault();
    if(temp ==='c'){
      dispatch(fetchWeatherData({city,units}));
      setUnits('metric')
      setTemp('f')
    }else{
      dispatch(fetchWeatherData({city,units}));
      setUnits('imperial')
      setTemp('c')

    
    }
    // temp === 'f'? setUnits("metric"):setUnits('imperial')
    // temp === 'c'? setTemp("f"):setTemp('c')
  

    // dispatch(fetchWeatherData({city,units}));
  }

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" required />
        {/* <select value={units} onChange={(e) => setUnits(e.target.value)}>
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select> */}
        <button type='button' onClick={unitHandler}>{temp}</button>
        <button type="submit">Get weather</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h3>{weatherData.name}</h3>
          <p>{weatherData.weather[0].description}</p>
          {/* {units === 'metric' ? 'C' : 'F'} */}
          <p>Temperature: {weatherData.main.temp} &deg;{units === 'metric' ? 'C' : 'F'} </p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
