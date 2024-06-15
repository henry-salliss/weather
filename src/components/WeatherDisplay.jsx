// WeatherDisplay.js

import React, { useState } from 'react';

const WeatherDisplay = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'b8922c8869fac17d45f1eb3a542ef3a1';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      {/* Search Form Section */}
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button type="submit">Get Weather</button>
      </form>

      {/* Display Weather Information */}
      {weatherData?.cod === '404' && (
        <div className='weather-display'>
          <p>City not found please try another</p>
        </div>
      )}

      {weatherData?.cod === 200 && (
        <div className="weather-display">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          {/* Additional weather details */}
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
