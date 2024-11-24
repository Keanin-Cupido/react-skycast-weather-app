import React from 'react';
import WeatherIcon from './WeatherIcon';

interface WeatherCardProps {
  city: string;
  time: string;
  unit: string;
  temperature: number;
  condition: string;
  aqi?: number;
  humidity: number;
  wind: number;
  wind_deg: number;
  uv_index: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  time,
  unit,
  temperature,
  condition,
  aqi,
  humidity,
  wind,
  wind_deg,
  uv_index,
}) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white shadow-lg border border-blue-500 transition-all duration-500 ease-in-out hover:shadow-xl" role="region" aria-label={`Weather for ${city}`}>
      <div className="w-full h-full flex flex-col justify-between gap-4">
        <div className="flex justify-between items-start">
          <div>
            {/* <h3 className={`font-bold ${city == 'Air Quality' ? `text-xl' : 'text-2xl'}`}>{city}</h3> */}
            <h3 className={`font-bold ${city == 'Air Quality' ? 'text-xl' : 'text-5xl'}`}>{city}</h3>
            <p className="text-sm text-gray-400">{time}</p>
          </div>
          <WeatherIcon condition={condition.toLowerCase()} className={`${city == 'Air Quality' ? 'w-16 h-16' : 'w-24 h-24'}`} aria-hidden="true" />
        </div>
        <div className="mt-2">
          <div className="flex items-baseline">
            {
              city == 'Air Quality' ? <span className="text-7xl font-semibold">{aqi} <span className='text-xl opacity-50 font-light'>aqi</span></span> : <span className="text-7xl font-semibold">{temperature}{unit == 'C' ? '°C' : '°F'}</span>

            }
            {/* {aqi && <span className="ml-2 text-sm text-gray-400">AQI {aqi}</span>} */}
          </div>
          <p className="text-md text-gray-300">{condition == 'sparkles' ? null : condition}</p>
        </div>
        {
          city == 'Air Quality' ? null :
          <div className="flex justify-between text-sm text-gray-400">
            <div>
              <p>Humidity: {humidity}%</p>
              <p>Wind: {wind} kph</p>
            </div>
            <div>
              <p>UV Index: {uv_index}</p>
              <p>Wind Degree: {wind_deg}°</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default WeatherCard;