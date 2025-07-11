import React from 'react';
import cloudvideo from '../assets/cloud.mp4';

const Home = ({ weatherData }) => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    return (
        <>
            {weatherData ? (
                <div className="relative flex flex-col min-h-screen">
                    {/* Video Background */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-[50vh] object-cover z-0"
                    >
                        <source src={cloudvideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Text Overlays */}
                    <div className="absolute top-0 left-0 w-full h-[50vh] flex items-center justify-center z-10 px-4">
                        <h1 className="text-white text-3xl sm:text-4xl font-bold drop-shadow-lg text-center">
                            Current Weather
                        </h1>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-[50vh] flex items-end justify-start p-4 sm:p-6 z-10">
                        <h2 className="text-white text-2xl font-semibold drop-shadow-md">
                            {weatherData.name}
                        </h2>
                    </div>

                    <div className="absolute top-0 left-0 w-full h-[50vh] flex items-end justify-end p-4 sm:p-6 z-10">
                        <h2 className="text-white text-md font-medium drop-shadow-md">
                            {currentDate}
                        </h2>
                    </div>

                    {/* Weather Data Grid */}
                    <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[52vh] p-5">
                        <WeatherCard title="Temperature" value={`${(weatherData.main.temp)}°C`} />
                        <WeatherCard title="Temperature Feels like" value={`${(weatherData.main.feels_like)}°C`} />
                        <WeatherCard title="Humidity" value={`${weatherData.main.humidity}%`} />
                        <WeatherCard title="Wind Speed" value={`${(weatherData.wind.speed * 18 / 5).toFixed(1)} km/h`}/>
                        <WeatherCard title="Weather" value={weatherData.weather[0].main} />
                        <WeatherCard title="Weather Description" value={weatherData.weather[0].description} />
                        <WeatherCard title="Sunrise" value={`${new Date(weatherData.sys.sunrise*1000).toLocaleTimeString()}`} />
                        <WeatherCard title="Sunset" value={`${new Date(weatherData.sys.sunset*1000).toLocaleTimeString()}`} />
                        
                    </div>
                </div>
            ) : (
                <div className="text-gray-500 text-center mt-10 text-lg">
                    Search for a city to see the weather.
                </div>
            )}
        </>
    );
};

// ✅ Reusable Card Component
const WeatherCard = ({ title, value }) => (
    <div className="flex flex-col gap-2 p-5 bg-white/60 backdrop-blur-md rounded-2xl shadow-md">
        <h5 className="text-gray-700 font-semibold">{title}</h5>
        <p className="text-xl font-medium">{value}</p>
    </div>
);

export default Home;
