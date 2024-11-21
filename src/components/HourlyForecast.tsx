import React from 'react';
import WeatherIcon from './WeatherIcon';
import { HourForecast } from '../types/weather';

interface HourlyForecastProps {
  hours: HourForecast[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ hours }) => {
  return (
    <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-4 text-white">
      <div className="grid grid-cols-6 gap-4">
        {hours.slice(0, 6).map((hour, index) => {
          const time = new Date(hour.time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true,
          });
          return (
            <div key={index} className="flex flex-col items-center gap-1">
              <span className="text-sm text-gray-400">{time}</span>
              <WeatherIcon condition={hour.condition.text} className="w-8 h-8" />
              <span className="text-lg font-semibold">{Math.round(hour.temp_c)}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;