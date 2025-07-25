# 🌦️ Weather App

A clean and intuitive weather application built with **React + Vite + TailwindCSS** that allows users to check real-time weather for over **10,000 cities worldwide**, including India 🇮🇳. It supports temperature, humidity, and feels-like data.

---

## 🚀 Features

- 🔍 Search from 10,000+ cities with autocomplete support
- 🌐 View weather details: temperature, humidity, wind speed, and conditions
- 🕒 Shows local time of searched city
- 🌆 Dynamically updates background and icon based on weather
- 💾 Remembers last searched city using localStorage
- 💻 Fully responsive design (mobile, tablet, desktop)
- 🔄 Loading spinner during data fetch for smooth UX

---

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📦 Getting Started

### ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

---

### 🧑‍💻 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chandan-1427/weather-app.git
   cd weather-app

Install dependencies:

npm install

Create your .env file

Add your API key:

VITE_WEATHER_API_KEY=your_openweathermap_api_key

Run the development server:

npm run dev

🌍 Usage

Type a city name into the search bar (auto-suggestions included).

View real-time weather and local time for that location.

Reopen the app to resume where you left off!

📁 Project Structure
weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CitySearch.jsx
│   │   ├── Loader.jsx
│   │   ├── WeatherCard.jsx
│   │   └── ...
│   ├── data/
│   │   └── cities.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
└── README.md

🙌 Contributing
Found a bug or have a feature idea?
Feel free to fork the repo, open an issue or submit a pull request. Contributions are always welcome!

Made with ❤️ by chandan-1427
