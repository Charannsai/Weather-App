import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Pages/Home'
import ForecastPage from './components/Pages/ForecastPage'
import WeatherMap from './components/Pages/WeatherMap'
import WeatherNews from './components/Pages/WeatherNews'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />} />
      <Route path='forecast' element={<ForecastPage />} />
      <Route path='map' element={<WeatherMap />} />
      <Route path='news' element={<WeatherNews />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)