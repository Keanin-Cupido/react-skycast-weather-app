import React from 'react';
import WeatherIcon from './WeatherIcon';
import { ForecastDay } from '../types/weather';

interface WeeklyForecastProps {
  forecast: ForecastDay[];
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ forecast }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg" role="region" aria-label="Weekly Weather Forecast">
      <h2 className="text-lg font-bold mb-4" aria-label="Weekly Forecast">7-Day Forecast</h2>
      <div className="grid grid-cols-2 gap-4">
        {forecast.map((day, index) => {
          const date = new Date(day.date);
          const dayName = index === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short' });
          return (
            <div key={index} className="flex flex-col items-center bg-gray-800 rounded-lg p-4" role="listitem">
              <span className="text-sm text-gray-300" aria-label={`Weather for ${dayName}`}>{dayName}</span>
              <WeatherIcon condition={day.day.condition.text} className="w-10 h-10" aria-hidden="true" />
              <div className="flex gap-2 mt-2">
                <span className="text-lg font-semibold" aria-label={`Max temperature ${Math.round(day.day.maxtemp_c)} degrees`}>{Math.round(day.day.maxtemp_c)}°</span>
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