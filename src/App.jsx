import React, { useContext } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorDisplay from "./components/ErrorDisplay";
import LoadingSpinner from "./components/LoadingSpinner";
import WeatherContext from "./context/WeatherContext";

const App = () => {
  const { weather, loading, error, fetchWeather } = useContext(WeatherContext);

  return (
    <div className="min-h-screen bg-sky-100 text-gray-800 p-4">
      <h1 className="text-3xl font-bold text-center my-6">🌤️ Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <LoadingSpinner />}
      <ErrorDisplay message={error} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
