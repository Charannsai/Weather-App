import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Modal from './Modal'; 

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setError('Please enter a city name!');
            setShowModal(true);
            return;
        }
        onSearch(searchTerm);
        setError('');
        setSearchTerm(''); 
    };

    const closeModal = () => {
        setShowModal(false);
        setError('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <div className="flex items-center space-x-2 w-full md:max-w-xs sm:w-full min-[320px]:max-w-fit min-[320px]:mx-auto">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search City..."
                className={`text-black px-3 w-full py-2 rounded-full border focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-400'} transition-all ease-in-out duration-300 `}
            />
            <button
                onClick={handleSearch}
                className="text-black px-4 py-2 rounded-full bg-gray-100 hover:bg-black hover:text-white transition duration-300"
            >
                <FaSearch size={24} />
            </button>

        </div>
            {error && !showModal && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {showModal && <Modal message={error} onClose={closeModal} />}

        </div>
    );
};

export default Search;