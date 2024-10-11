# **Weather App 🌤️**

This Weather App is a responsive, modern web application built with Vite, React, and Tailwind CSS, designed to provide users with accurate and up-to-date weather information. The app allows users to search for weather data by city and view forecasts, weather maps, and related news articles. It features a clean, user-friendly interface with dynamic search functionality and error handling for incorrect city inputs.

## Key Features
- **Real-time Weather Data:** Get current weather updates for any city with temperature, humidity, wind speed, and more.
- **5-day Forecast:** View detailed 5-day, 3-hour interval forecasts for your selected location.
- **Weather Maps:** Explore weather conditions on a map with options for different data layers (e.g., temperature, precipitation).
- **News:** Stay informed with the latest news articles relevant to your location.
  NOTE : As of now the News Articles will not be fetched due to subscription issues. Thank You! 
- **Interactive Search:** Easily search for a city, and the app fetches and displays the weather data. Smoothly reset search fields for new queries.
- **Error Handling:** Alerts users with a modal if an incorrect city name is entered, ensuring a seamless experience.
- **Mobile-Friendly Design:** Fully responsive layout with a toggle menu bar for mobile devices and smooth animations for enhanced user experience.
- **Futuristic Aesthetic:** Stylish and interactive design using Tailwind CSS for a modern, futuristic look.

## Technologies Used
- **Vite:** For lightning-fast build and development.
- **React:** As the core library for building user interfaces.
- **Tailwind CSS:** For styling and responsive design.
- **OpenWeatherMap API:** For fetching real-time weather data.

## Installation and Setup
1. Clone the repository:
```bash
git clone https://github.com/Charannsai/Weather-App.git
```
2. Install dependencies:
``` bash
npm install
```
3. Create a .env file and add your OpenWeatherMap API key:
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```
4. Start the development server:
```
npm run dev
```

## Future Enhancements
- Implement hourly forecasts.
- Add more weather map layers (e.g., wind speed, cloud cover).
- Integration with geolocation for automatic location detection.
- Multilingual support.
Feel free to contribute by opening issues or submitting pull requests!


## License
This project is licensed under the MIT License.
