import React, { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Modal from '../Modal';

const WeatherNews = () => {
    const { searchLocation, setSearchLocation } = useOutletContext();
    const [newsArticles, setNewsArticles] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const newsApiKey = import.meta.env.VITE_API_KEY_3;

    useEffect(() => {
        setNewsArticles([]);
        setError('');
        setIsLoading(true);

        if (searchLocation) {
            fetchNewsArticles(searchLocation);
        } else {
            setIsLoading(false);
        }

        return () => {
            setSearchLocation('');
        };
    }, [searchLocation, setSearchLocation]);

    const fetchNewsArticles = async (city) => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${city}&apiKey=${newsApiKey}`);
            if (!response.ok) throw new Error('News Data Not Found');
            const data = await response.json();
            setNewsArticles(data.articles);
            setIsLoading(false);
        } catch (error) {
            setError('Could not fetch news articles. Please try again later.');
            setShowModal(true);
            setIsLoading(false);
            console.error(error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setError('');
    };

    return (
        <div className="container mx-auto p-4">
            {
                newsArticles.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsArticles.map((article, index) => (
                            <div
                            key={index}
                            className="bg-gradient-to-br from-indigo-600 to-purple-600 p-4 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                
                                <div className="p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg">
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="font-bold text-xl text-white mb-2 hover:text-indigo-300">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        {article.description ? article.description : "No description available"}
                                    </p>
                                    <Link
                                        to={article.url}
                                        className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-white hover:text-emerald-600 border border-emerald-600 transition duration-300"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <h2 className="text-3xl min-[320px]:text-2xl sm:text-4xl font-extrabold mb-4 text-red-600 drop-shadow text-center mt-4">
                            Stay Informed with Local News!📰
                        </h2>
                        <p className='mt-8 text-lg font-bold mb-8 text-gray-700'>
                            Welcome to WeatherNow’s News Page! Here, you can stay updated with the latest news articles
                            from your city. From weather alerts to community events, our curated news feed brings you
                            the information that matters most. Whether you’re looking for local happenings or important
                            updates, we've got you covered. Dive in and discover what's new in your area today!
                        </p>
                    </div>
                )
            }

            {showModal && <Modal message={error} onClose={closeModal} />}
        </div>
    );
};

export default WeatherNews;

