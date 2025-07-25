import React, { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [recentCities, setRecentCities] = useState([]);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      setWeather(data);
      setCity(cityName);
      localStorage.setItem("lastCity", cityName);
      setRecentCities((prev) => {
        const updated = [cityName, ...prev.filter(c => c !== cityName)].slice(0, 5);
        localStorage.setItem("recentCities", JSON.stringify(updated));
        return updated;
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("lastCity");
    const savedRecent = JSON.parse(localStorage.getItem("recentCities")) || [];
    setRecentCities(savedRecent);
    if (savedCity) fetchWeather(savedCity);
  }, []);

  const clearRecentCities = () => {
  localStorage.removeItem("recentCities");
  setRecentCities([]);
};


  return (
    <WeatherContext.Provider
      value={{ weather, loading, error, fetchWeather, recentCities, clearRecentCities }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
