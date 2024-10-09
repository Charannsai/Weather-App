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
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='forecast' element={<ForecastPage />} />
          <Route path='map' element={<WeatherMap />} />
          <Route path='news' element={<WeatherNews />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
