import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Search, Settings } from 'lucide-react';
import WeatherCard from './components/WeatherCard';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from './components/WeeklyForecast';
import { getWeatherData } from './services/weatherService';
import type { WeatherData } from './types/weather';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('London');
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await getWeatherData(city);
        setWeather(data);
      } catch (error) {
        toast.error('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-zinc-900 backdrop-blur-lg bg-opacity-50 text-white p-6">
      <Toaster position="top-right" />
      
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">SkyCast</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search city..."
              className="bg-slate-700/50 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button
            onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}
            className="bg-slate-700/50 p-2 rounded-full hover:bg-slate-600/50 transition-colors"
          >
            °{unit}
          </button>
          <button className="bg-slate-700/50 p-2 rounded-full hover:bg-slate-600/50 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {weather && (
        <main className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WeatherCard
              city={weather.location.name}
              time={weather.location.localtime}
              temperature={unit === 'C' ? weather.current.temp_c : weather.current.temp_f}
              condition={weather.current.condition.text}
              aqi={70}
            />
            <WeatherCard
              city="Air Quality"
              time="Today"
              temperature={weather.current.temp_c}
              condition={weather.current.condition.text}
              aqi={70}
            />
          </div>
          
          <HourlyForecast hours={weather.forecast.forecastday[0].hour} />
          <WeeklyForecast forecast={weather.forecast.forecastday} />
        </main>
      )}
    </div>
  );
}

export default App;