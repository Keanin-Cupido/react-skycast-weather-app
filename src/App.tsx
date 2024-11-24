import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Search, Settings } from 'lucide-react';
import WeatherCard from './components/WeatherCard';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from './components/WeeklyForecast';
import { getWeatherData } from './services/weatherService';
import type { WeatherData } from './types/weather';

// images
import logo from '/weather_icons/11_heavy_rain_color_w96.webp';

// fonts
import '@fontsource/poppins/200.css'
import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/700.css'; // Bold
import Footer from './components/Footer';
import WeatherMap from './components/WeatherMap';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Cape Town');
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherData(city);
        setWeather(data);
      } catch (error) {
        // toast.error('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-blue-950 flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-start gap-2">
          <img src={logo} alt="logo" width={64} />
          <h1 className="text-6xl font-bold">SkyCast</h1>
        </div>
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 py-16 font-poppins">
      <Toaster position="top-right" />
      
      <header className="max-w-6xl bg-gray-800 border border-blue-500/35 rounded-2xl p-6 shadow-lg mx-auto flex justify-center md:justify-between items-center flex-wrap mb-16 gap-4 md:gap-2">
        <div className="flex items-center justify-start gap-2">
          <img src={logo} alt="logo" width={48} />
          <h1 className="text-3xl font-bold">SkyCast</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search city..."
              className="bg-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              aria-label="Search city"
            />
          </div>
          <button
            onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}
            className="bg-gray-700 w-10 h-10 rounded-full font-bold hover:bg-gray-600 transition-colors flex items-center justify-center"
            aria-label={`Switch to ${unit === 'C' ? 'Fahrenheit' : 'Celsius'}`}
          >
            °{unit}
          </button>
          <button className="bg-gray-700 w-10 h-10 rounded-full hover:bg-gray-600 transition-colors flex items-center justify-center" aria-label="Settings">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {weather && (
        <main className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-3">
              <WeatherCard
                city={weather.location.name}
                time={weather.location.localtime}
                unit={unit}
                temperature={unit === 'C' ? weather.current.temp_c : weather.current.temp_f}
                condition={weather.current.condition.text}
                aqi={70}

                humidity={weather.current.humidity}
                wind={weather.current.wind_kph}
                uv_index={weather.current.uv}
                wind_deg={weather.current.wind_degree}
              />
            </div>
            <div className="col-span-1 h-full">
              <WeatherCard
                city="Air Quality"
                time="Today"
                unit={unit}
                temperature={unit === 'C' ? weather.current.temp_c : weather.current.temp_f}
                condition={'sparkles'}
                aqi={70}

                humidity={0}
                wind={0}
                uv_index={0}
                wind_deg={0}
              />
            </div>
          </div>

          {/* <WeatherMap /> */}
          
          <HourlyForecast hours={weather.forecast.forecastday[0].hour} />
          <WeeklyForecast forecast={weather.forecast.forecastday} />
        </main>
      )}

      <div className="mt-12">
        <Footer />
      </div>

    </div>
  );
}

export default App;