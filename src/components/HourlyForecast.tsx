import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon';
import { HourForecast } from '../types/weather';

interface HourlyForecastProps {
  hours: HourForecast[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hours }) => {
  const [numHours, setNumHours] = useState(12);

  const handleHoursChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumHours(Number(event.target.value));
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-2xl p-6 text-white border border-blue-500/35 shadow-lg" role="region" aria-label="Hourly Weather Forecast">
      <h2 className="text-2xl font-bold mb-4 text-blue-400" aria-label="Hourly Forecast">Hourly Forecast</h2>
      <label htmlFor="hour-select" className="text-sm text-gray-300 mr-4">Select number of hours:</label>
      <select id="hour-select" value={numHours} onChange={handleHoursChange} className="mb-8 p-2 rounded bg-gray-700 text-white" aria-label="Select number of hours for forecast">
        <option value={6}>6 hours</option>
        <option value={12}>12 hours</option>
        <option value={24}>24 hours</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {hours.slice(0, numHours).map((hour, index) => {
          const time = new Date(hour.time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true,
          });
          return (
            <div key={index} className="flex flex-col items-center gap-2 bg-gray-700 rounded-lg p-4 transition-transform transform hover:scale-105 shadow-md" role="listitem" aria-label={`Weather at ${time}`}>
              <span className="text-sm text-gray-300">{time}</span>
              <WeatherIcon condition={hour.condition.text} className="w-16 h-16" aria-hidden="true" />
              <span className="text-sm md:text-xs font-light text-white/50 tracking-wider">{hour.condition.text}</span>
              <span className="text-lg font-semibold text-blue-400">{Math.round(hour.temp_c)}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;