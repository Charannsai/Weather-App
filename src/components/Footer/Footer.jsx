import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {

    

    return (
        <footer className=" bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-white py-6">
            <div className="min-[768px]:justify-evenly container mx-auto flex flex-col items-center md:flex-row space-y-4 md:space-y-0">
                
   
                <p className="text-sm text-center md:text-left">&copy; 2024 WeatherNow. All rights reserved.</p>

               
               
                <div className="flex space-x-6 justify-center">
                    <Link to="https://github.com/Charannsai" className="hover:text-gray-600 transition duration-300">
                        <FaGithub size={24} />
                    </Link>
                    <a href="https://linkedin.com/in/charan-sai-pathuri-177a9a282" className="hover:text-gray-600 transition duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://instagram.com/Saircasticc" className="hover:text-gray-600 transition duration-300">
                        <FaInstagram size={24} />
                    </a>
                </div>


                
            </div>
        </footer>
    );
}

export default Footer;
