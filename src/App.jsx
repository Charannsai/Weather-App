// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

function App() {
    const [searchLocation, setSearchLocation] = useState('');

    const handleSearch = (location) => {
        setSearchLocation(location); 
    };

    return (
        <div className='flex flex-col min-h-screen overflow-y-auto
                  [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500' >
            <Header onSearch={handleSearch} />
                 <main className='flex-grow px-4 md:px-8 lg:px-16'>
                    <Outlet context={{ searchLocation,setSearchLocation }} /> 
                 </main>
            <Footer/>
        </div>
    );
}

export default App;


