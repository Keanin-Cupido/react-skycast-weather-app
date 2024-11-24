import React from 'react';
import { WeatherIconProps } from '../types/weather';

// Importing weather icons from the public folder
import SunnyIcon from '/weather_icons/01_sunny_color_w96.webp';
import PartlyCloudyIcon from '/weather_icons/36_partly_cloudy_night_color_w96.webp';
import CloudyIcon from '/weather_icons/06_cloudy_color_w96.webp';
import RainIcon from '/weather_icons/10_moderate_rain_color_w96.webp';
import HeavyRainIcon from '/weather_icons/11_heavy_rain_color_w96.webp';
import SnowIcon from '/weather_icons/22_snow_color_w96.webp';
import DrizzleIcon from '/weather_icons/09_light_rain_color_w96.webp';
import ThunderIcon from '/weather_icons/14_thunderstorm_color_w96.webp';
import LightningIcon from '/weather_icons/07_lightning_color_w96.webp';
import RainbowIcon from '/weather_icons/40_rainbow_color_w96.webp';
import NightIcon from '/weather_icons/02_moon_stars_color_w96.webp';
import MoonIcon from '/weather_icons/34_full_moon_color_w96.webp';

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = 'w-6 h-6' }) => {
  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return <img src={SunnyIcon} className={className} alt="Sunny weather" />;
      case 'partly cloudy':
        return <img src={PartlyCloudyIcon} className={className} alt="Partly cloudy weather" />;
      case 'cloudy':
        return <img src={CloudyIcon} className={className} alt="Cloudy weather" />;
      case 'rain':
        return <img src={RainIcon} className={className} alt="Rainy weather" />;
      case 'heavy rain':
        return <img src={HeavyRainIcon} className={className} alt="Heavy rain" />;
      case 'snow':
        return <img src={SnowIcon} className={className} alt="Snowy weather" />;
      case 'drizzle':
        return <img src={DrizzleIcon} className={className} alt="Drizzle weather" />;
      case 'thunder':
        return <img src={ThunderIcon} className={className} alt="Thunderstorm" />;
      case 'lightning':
        return <img src={LightningIcon} className={className} alt="Lightning" />;
      case 'rainbow':
        return <img src={RainbowIcon} className={className} alt="Rainbow" />;
      case 'night':
        return <img src={NightIcon} className={className} alt="Night weather" />;
      case 'moon':
        return <img src={MoonIcon} className={className} alt="Moon" />;
      default:
        return <img src={SunnyIcon} className={className} alt="Default sunny weather" />;
    }
  };

  return getIcon();
};

export default WeatherIcon;