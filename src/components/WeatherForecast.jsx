import React, { useEffect, useState } from 'react';
import './WeatherForecast.css'

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState(null);
  const apiKey = 'b8922c8869fac17d45f1eb3a542ef3a1';
  const [city, setCity] = useState(''); // State for user input city
  const [initialCity, setInitialCity] = useState('London'); // State for initial city
    console.log('data', forecastData)
  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${initialCity}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching forecast data:', error);
        // Handle error (e.g., show error message to user)
      }
    };

    fetchForecastData();
  }, [initialCity, apiKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      setForecastData(data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="forecast-page">
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button type="submit">Get Forecast</button>
      </form>

      {/* Display Forecast Data */}
      <h2>5-Day Forecast {forecastData?.city?.name}</h2>
      {forecastData && (
          <div className="forecast-list">
          {forecastData.list.map((forecastItem) => (
            <div key={forecastItem.dt} className="forecast-item">
              <p>Date: {new Date(forecastItem.dt * 1000).toLocaleDateString()}</p>
              <p>Temperature: {forecastItem.main.temp}°C</p>
              <p>Weather: {forecastItem.weather[0].description}</p>
              {/* Additional forecast details */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
