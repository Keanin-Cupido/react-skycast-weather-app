import React from 'react';
import WeatherIcon from './WeatherIcon';

interface WeatherCardProps {
  city: string;
  time: string;
  temperature: number;
  condition: string;
  aqi?: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  time,
  temperature,
  condition,
  aqi,
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white shadow-lg border border-blue-500 transition-all duration-500 ease-in-out hover:shadow-xl" role="region" aria-label={`Weather for ${city}`}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{city}</h3>
            <p className="text-sm text-gray-400">{time}</p>
          </div>
          <WeatherIcon condition={condition} className="w-24 h-24" aria-hidden="true" />
        </div>
        <div className="mt-2">
          <div className="flex items-baseline">
            <span className="text-5xl font-semibold">{temperature}°</span>
            {aqi && <span className="ml-2 text-sm text-gray-400">AQI {aqi}</span>}
          </div>
          <p className="text-md text-gray-300">{condition}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <div>
            <p>Humidity: 84%</p>
            <p>Wind: 7.90 km/h</p>
          </div>
          <div>
            <p>UV Index: 5.50</p>
            <p>Visibility: 3 km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;