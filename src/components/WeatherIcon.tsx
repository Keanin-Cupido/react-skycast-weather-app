import React from 'react';
import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Moon, Rainbow, Sun } from 'lucide-react';
import { WeatherIconProps } from '../types/weather';

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = 'w-6 h-6' }) => {
  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return <Sun className={className} />;
      case 'partly cloudy':
      case 'cloudy':
        return <Cloud className={className} />;
      case 'rain':
      case 'heavy rain':
        return <CloudRain className={className} />;
      case 'snow':
        return <CloudSnow className={className} />;
      case 'drizzle':
        return <CloudDrizzle className={className} />;
      case 'thunder':
      case 'lightning':
        return <CloudLightning className={className} />;
      case 'rainbow':
        return <Rainbow className={className} />;
      case 'night':
      case 'moon':
        return <Moon className={className} />;
      default:
        return <Sun className={className} />;
    }
  };

  return getIcon();
};

export default WeatherIcon;