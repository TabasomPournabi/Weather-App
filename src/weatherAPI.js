export const fetchWeather = async (city, units) => {
    // 4e7e30485ac513416d23ba5645054524 is my key in https://home.openweathermap.org/api_keys
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=4e7e30485ac513416d23ba5645054524`);
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  };
  