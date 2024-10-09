import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import img from '../../assets/logo.png';
import Search from '../Search';

function Header({ onSearch }) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white py-4 shadow-lg relative z-10">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-12 md:flex-row md:space-x-4">
                
                <button onClick={toggleNav} className="min-[375px]:absolute min-[375px]:left-6 min-[375px]:text-3xl focus:outline-none md:hidden text-2xl text-white">
                    {isNavOpen ? <FaTimes /> : <FaBars />}
                </button>

                
                <Link to="/" className="flex items-center space-x-3 mx-auto ">
                    <img src={img} alt="Logo" className="h-10 md:w-8 md:h-8 w-10" />
                    <h1 className="text-3xl font-bold text-white drop-shadow-sm tracking-wide text-center md:text-lg md:text-left md:mx-0 md:-ml-5 lg:text-3xl">WeatherNow</h1>
                </Link>

                
                <div className="hidden md:flex items-center space-x-8">
                    <nav className="space-x-8 text-lg font-semibold tracking-wide">
                        <NavLink to="/" className={({isActive})=> `${isActive? "text-yellow-500":"text-white"} md:ml-3 hover:text-yellow-500 transition duration-300`}>Home</NavLink>
                        <NavLink to="/forecast" className={({isActive})=> `${isActive? "text-yellow-500":"text-white"} md:ml-3 hover:text-yellow-500 transition duration-300`}>Forecast</NavLink>
                        <NavLink to="/map" className={({isActive})=> `${isActive? "text-yellow-500":"text-white"} md:ml-3 hover:text-yellow-500 transition duration-300`}>Map</NavLink>
                        <NavLink to="/news" className={({isActive})=> `${isActive? "text-yellow-500":"text-white"} md:ml-3 hover:text-yellow-500 transition duration-300`}>News</NavLink>
                    </nav>
                    <Search onSearch={onSearch} />
                </div>
            </div>

            
            <div className="block md:hidden mt-4 px-4">
                <Search onSearch={onSearch} />
            </div>

            
            <div className={` fixed top-0 left-0 h-full w-52 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-6 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-20`}>
                <button
                    onClick={toggleNav}
                    className=" absolute top-4 left-4 text-white text-5xl focus:outline-none hover:text-gray-400 transition duration-100"
                >
                    &times;
                </button>

                <nav className="text-white  space-y-6 text-lg font-semibold text-center mt-12">
                    <NavLink to="/" onClick={toggleNav} className={({isActive})=> `${isActive? "text-yellow-500":"text-white"} block hover:rounded-2xl hover:bg-gray-600 p-2 transition-all duration-300`}>Home</NavLink>
                    <NavLink to="/forecast" onClick={toggleNav} className={({isActive})=> `${isActive? "text-yellow-500":"text-white"} block hover:rounded-2xl hover:bg-gray-600 p-2 transition-all duration-300`}>Forecast</NavLink>
                    <NavLink to="/map" onClick={toggleNav} className={({isActive})=> `${isActive? "text-yellow-500":"text-white"} block hover:rounded-2xl hover:bg-gray-600 p-2 transition-all duration-300`}>Map</NavLink>
                    <NavLink to="/news" onClick={toggleNav} className={({isActive})=> `${isActive? "text-yellow-500":"text-white"} block hover:rounded-2xl hover:bg-gray-600 p-2 transition-all duration-300`}>News</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
