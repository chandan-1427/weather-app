import React, { useState, useContext, useEffect, useRef } from "react";
import WeatherContext from "../context/WeatherContext";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const { recentCities, clearRecentCities } = useContext(WeatherContext);
  const suggestionsRef = useRef(null);

  // Filter recent cities based on input
  const filteredSuggestions = recentCities.filter((item) =>
    item.toLowerCase().includes(city.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
    setShowSuggestions(false);
    setHighlightedIndex(-1);
  };

  const handleSelectSuggestion = (suggestion) => {
    setCity("");
    setShowSuggestions(false);
    setHighlightedIndex(-1);
    onSearch(suggestion);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
        e.preventDefault();
        handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
      }
    }
  };

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [showSuggestions, city]);

  return (
    <div className="relative flex flex-col items-center my-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          onKeyDown={handleKeyDown}
          className="px-4 py-2 rounded border border-gray-300 w-64 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-14 left-0 right-0 bg-white border border-gray-200 rounded shadow z-10 w-64 mx-auto"
        >
          <ul>
            {filteredSuggestions.map((item, idx) => (
              <li
                key={idx}
                onMouseDown={() => handleSelectSuggestion(item)} // Fix mouse selection issue
                className={`px-4 py-2 cursor-pointer ${
                  highlightedIndex === idx
                    ? "bg-blue-100 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <button
            onMouseDown={(e) => {
              e.preventDefault(); // Prevent input blur
              clearRecentCities();
            }}
            className="w-full text-center text-sm text-red-500 py-2 border-t hover:bg-gray-50"
          >
            Clear Recent
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
