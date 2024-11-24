import React from 'react';
import WeatherIcon from './WeatherIcon';
import { ForecastDay } from '../types/weather';

interface WeeklyForecastProps {
  forecast: ForecastDay[];
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ forecast }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/35 rounded-2xl p-6 text-white shadow-lg" role="region" aria-label="Weekly Weather Forecast">
      <h2 className="text-2xl font-bold mb-4 text-blue-400" aria-label="Weekly Forecast">7-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {forecast.map((day, index) => {
          const date = new Date(day.date);
          const dayName = index === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });
          return (
            <div
              key={index}
              className={`flex flex-col items-center ${dayName === 'Today' ? 'bg-blue-700/25 border border-blue-500' : 'bg-gray-700'} rounded-lg p-4 transition-transform transform hover:scale-105 shadow-md`}
              role="listitem"
              aria-label={`Weather for ${dayName}`}
            >
              <span className="text-sm text-gray-300 mb-4" aria-label={`Weather for ${dayName}`}>{dayName}</span>
              <WeatherIcon condition={day.day.condition.text.toLowerCase()} className="w-16 h-16" aria-hidden="true" />
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-lg font-semibold text-blue-400" aria-label={`Max temperature ${Math.round(day.day.maxtemp_c)} degrees`}>{Math.round(day.day.maxtemp_c)}°</span>
                <span className="text-sm text-gray-400" aria-label={`Min temperature ${Math.round(day.day.mintemp_c)} degrees`}>{Math.round(day.day.mintemp_c)}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyForecast;