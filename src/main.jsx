import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/Pages/Home';
import ForecastPage from './components/Pages/ForecastPage';
import WeatherMap from './components/Pages/WeatherMap';
import WeatherNews from './components/Pages/WeatherNews';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' Component={<App />}>
          <Route index Component={<Home />} />
          <Route path='/forecast' Component={<ForecastPage />} />
          <Route path='/map' Component={<WeatherMap />} />
          <Route path='/news' Component={<WeatherNews />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
