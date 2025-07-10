import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      console.log("Weather Data:", response.data);

    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header
        city={city}
        setCity={setCity}
        handlesearch={handleSearch}
      />
      <div className="h-1 bg-green-500"></div>
      <Home
        weatherData={weatherData}
      />
      <Footer weatherData={weatherData}/>
    </div>
  );
}

export default App;