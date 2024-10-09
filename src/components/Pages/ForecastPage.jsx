import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Modal from '../Modal'; 

const ForecastPage = () => {
    const { searchLocation, setSearchLocation } = useOutletContext();
    const [forecastData, setForecastData] = useState([]);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false); 
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setForecastData([]);
        setError('');
        setIsLoading(true);

        if (searchLocation) {
            fetchForecastData(searchLocation);
        } else {
            setIsLoading(false); 
        }

        return () => {
            setSearchLocation('');
        };
    }, [searchLocation, setSearchLocation]);

    const fetchForecastData = async (location) => {
        const apiKey = 'f10cde2895fc8ea3e9510acaf71642c0';
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`);
            if (!response.ok) throw new Error('Forecast Data Not Found');
            const data = await response.json();
            const forecast = data.list.map(item => ({
                dt: item.dt_txt,
                temp: item.main.temp,
                description: item.weather[0].description,
                icon: item.weather[0].icon,
            }));
            setForecastData(forecast);
            setIsLoading(false);
        } catch (error) {
            setError('Please Enter a valid city name.');
            setShowModal(true); 
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setError('');
        setShowModal(false);
    };

    return (
        <div className="mx-auto px-4 pb-4 ">
            {
                forecastData.length>0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        {forecastData.map((forecast, index) => (
                            <div key={index} className="bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-700 text-white  bg-opacity-20 p-6 rounded-xl shadow-xl backdrop-blur-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                                <h3 className="font-semibold text-xl mb-4">{new Date(forecast.dt).toLocaleString()}</h3>
                                <p className=" text-lg">🌡️ Temp: <span className="font-bold">{forecast.temp}°C</span></p>
                                <p className="text-lg capitalize">☁️ {forecast.description}</p>
                                <img src={`http://openweathermap.org/img/wn/${forecast.icon}.png`} alt={forecast.description} className="w-16 h-16 mx-auto my-4" />
                            </div>
                        ))}
                    </div>
                ):

                (
                    <div>
                        <h2 className="text-3xl min-[320px]:text-2xl sm:text-4xl font-extrabold mb-4 text-red-600 drop-shadow text-center mt-4">
                            5-Day Weather Forecast
                        </h2>
                        <h1 className='text-2xl font-bold text-center mb-2 text-blue-500 min-[320px]:text-lg sm:text-2xl'>Plan Ahead with Precision!</h1>
                        <p className='text-justify text-gray-700 mb-8 font-bold '>Welcome to your ultimate WeatherNow companion. Our 5-Day, 3-Hour Interval Forecast keeps you one step ahead of changing weather conditions. Whether you're planning an outing, managing your daily commute, or just curious about the upcoming weather, we provide real-time updates and detailed forecasts every 3 hours for the next 5 days.
                        Stay informed, stay prepared, and make the most of every moment with our accurate and reliable weather insights!</p>
                        {isLoading && <p className="text-center text-green-600 animate-pulse">Loading...</p>}
                        {forecastData.length === 0 && !error && !isLoading && (
                            <p className="text-center mt-2 mb-4 text-3xl font-bold text-green-600 font-mono min-[320px]:text-xl sm:text-3xl">Please enter a city to see the forecast.</p>
                        )}
                    </div>

                )}
            {showModal && <Modal message={error} onClose={closeModal} />} 
        </div>
    );
};

export default ForecastPage;
