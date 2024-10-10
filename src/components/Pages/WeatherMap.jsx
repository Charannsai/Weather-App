import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { useOutletContext } from 'react-router-dom';
import Modal from '../Modal';

const WeatherMap = () => {
    const { searchLocation, setSearchLocation } = useOutletContext();
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const openWeatherMapApiKey = import.meta.env.VITE_API_KEY_2; 

    useEffect(() => {
        if (!mapInstance.current) {
            mapInstance.current = L.map(mapRef.current).setView([0, 0], 2)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapInstance.current);
        }

        if (searchLocation) {
            fetchCoordinates(searchLocation);
        } else {
            setIsLoading(false);
        }

        return () => {
            setSearchLocation(''); 
        };
    }, [searchLocation, setSearchLocation]);

    const fetchCoordinates = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}`);
            if (!response.ok) throw new Error('City not found');
            const data = await response.json();
            const { lat, lon } = data.coord; 

            
            mapInstance.current.setView([lat, lon], 12)

            
            L.marker([lat, lon]).addTo(mapInstance.current)
                .bindPopup(`Location: ${city}`)
                .openPopup();

            
            const weatherLayer = `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${openWeatherMapApiKey}`;
            L.tileLayer(weatherLayer).addTo(mapInstance.current);

            setIsLoading(false);
        } catch (error) {
            setError('Please enter a valid city name.');
            setShowModal(true);
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setError('');
    };

    return (
        <div >
            <div className='container mx-auto px-4'>
                <h2 className="text-3xl min-[320px]:text-2xl sm:text-4xl font-extrabold mb-4 text-red-600 drop-shadow text-center mt-4">Explore the Weather Map!</h2>
                <p className='text-justify font-semibold mb-8 text-gray-700'>
                    Welcome to WeatherNow’s Weather Map!🌍.Whether you're planning your next adventure or just curious about what's happening around the world, our interactive map provides all the information you need at your fingertips. Simply zoom in on this area to get instant access to current weather conditions and temperatures. Start your journey to weather awareness today!
                </p>
                <div ref={mapRef} style={{ height: '500px',marginBottom:'16px', width: '100%' }} className="-z-0"></div>
                {isLoading && <p className="text-center mt-4">Loading map...</p>}
            </div>
            
            
            {showModal && <Modal message={error} onClose={closeModal} />}
        </div>
    );
};

export default WeatherMap;
