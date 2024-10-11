import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../Modal'
const Home = () => {
    const { searchLocation,setSearchLocation } = useOutletContext()
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const apiKey = import.meta.env.VITE_API_KEY_1;
    useEffect(() => {
        setWeatherData('')
        setError('')
        setIsLoading(true);
        if (searchLocation) {
            fetchWeatherData(searchLocation);
        }
        else {
            setIsLoading(false); 
        }

        return () => {
            setSearchLocation('')
            
        }
    }, [searchLocation,setSearchLocation]);
    
    const fetchWeatherData = async (location) => {
        
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
            if (!response.ok) throw new Error('Weather Data Not Found');
            const data = await response.json();
            const weatherDetails = {
                temp: data.main.temp,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                description: data.weather[0].description,
                city: data.name,
                country: data.sys.country,
                icon: data.weather[0].icon,
            };
            setWeatherData(weatherDetails)
        } catch (error) {
            setShowModal(true)
            setError('Please enter a valid city name.');
        }
    };

    const closeModal = () => {
        setError('')
        setShowModal(false)
    };
    return (
        <div className=''>
                <h2 className="text-3xl min-[320px]:text-2xl sm:text-4xl font-extrabold mb-4 text-red-600 drop-shadow text-center mt-4">Welcome to WeatherNow</h2>
                <div className="font-sans px-4 mt-0">
           { weatherData ? (
                    <div className="my-6 bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-700 p-6 rounded-xl shadow-lg max-w-md mx-auto sm:max-w-full transform transition hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-3xl font-extrabold text-white mb-4 text-center">
                        Current Weather in {weatherData.city}, {weatherData.country}
                    </h3>
                    <div className="flex justify-center mb-4">
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
                            alt={weatherData.description}
                            className="w-20 h-20"
                        />
                    </div>
                    <div className="text-center text-white space-y-2">
                        <p className="text-2xl">🌡️ Temperature: <span className="font-bold">{weatherData.temp}°C</span></p>
                        <p className="text-xl">💧 Humidity: <span className="font-bold">{weatherData.humidity}%</span></p>
                        <p className="text-xl">🌬️ Wind Speed: <span className="font-bold">{weatherData.windSpeed} m/s</span></p>
                        <p className="text-lg capitalize">☁️ {weatherData.description}</p>
                    </div>
                </div>
                
                    
           ): (
            <div>
                     <h1 className=' font-sans text-2xl font-bold text-center mb-2 text-sky-600 min-[320px]:text-lg sm:text-2xl'>"Your Weather, Your Way."</h1>
                <p className='text-gray-700 font-bold mb-2 text-justify'>
                    Welcome to your personalized weather companion. Whether you're planning your day or preparing for an outdoor adventure, we’ve got you covered with real-time updates, accurate forecasts, and the latest news tailored to your location. Experience weather like never before with the touch of a button.
                </p>
                <p className='text-center mt-2 mb-2 text-3xl font-bold text-green-600 font-mono min-[320px]:text-lg sm:text-3xl'>
                    Search for your City above and explore what the weather has in store for you today!
                </p>
            </div>
           ) }     
            
            
            {showModal && <Modal message={error} onClose={closeModal} />}
        </div>
        </div>
    );
};

export default Home;

