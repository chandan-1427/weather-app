import React, { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

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
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedCity = localStorage.getItem("lastCity");
    if (savedCity) fetchWeather(savedCity);
  }, []);

  return (
    <WeatherContext.Provider
      value={{ weather, loading, error, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
