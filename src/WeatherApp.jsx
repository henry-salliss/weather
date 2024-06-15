import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForecast from './components/WeatherForecast';

const WeatherApp = () => {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <h1>Weather App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/forecast">Forecast</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/forecast" element={<WeatherForecast />}/>
          <Route path="/" element={<WeatherDisplay />}/> 
        </Routes>

        {/* Footer Section */}
        <footer className="footer">
          <p>© 2024 Weather App. All rights reserved.</p>
          {/* Social media links or credits */}
        </footer>
      </div>
    </Router>
  );
};

export default WeatherApp;
