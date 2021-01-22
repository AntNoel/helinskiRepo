import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Weather = ({ capital }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const endpoint = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`;
  const [weather, setWeather] = useState('');
  useEffect(() => {
    axios.get(endpoint).then((response) => {
      setWeather(response.data.current);
    });
  }, []);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>
        <span>temperature:</span> {weather.temperature} Celsius
      </p>
      {<img src={weather.weather_icons} />}

      <p>
        <span>wind:</span> {weather.wind_speed} MPH direction {weather.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
