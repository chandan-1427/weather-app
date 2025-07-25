import React from "react";

const WeatherCard = ({ weather }) => {
  const {
    name,
    main: { temp, feels_like, humidity },
    weather: weatherDetails,
  } = weather;

  const iconCode = weatherDetails[0].icon;
  const description = weatherDetails[0].description;
  const condition = weatherDetails[0].main;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-center mt-6">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-xl">{temp}°C - {condition}</p>
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt={description}
        className="mx-auto"
      />
      <p className="text-sm text-gray-500 capitalize">{description}</p>
      <p className="text-sm text-gray-500 mt-2">
        Feels like: {feels_like}°C | Humidity: {humidity}%
      </p>
    </div>
  );
};

export default WeatherCard;
