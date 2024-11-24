import React from 'react';
import { WeatherIconProps } from '../types/weather';

// Importing weather icons from the public folder
import SunnyIcon from '/weather_icons/01_sunny_color_w96.webp';
import PartlyCloudyIcon from '/weather_icons/35_partly_cloudy_daytime_color_w96.webp';
import CloudyIcon from '/weather_icons/06_cloudy_color_w96.webp';
import RainIcon from '/weather_icons/10_moderate_rain_color_w96.webp';
import HeavyRainIcon from '/weather_icons/11_heavy_rain_color_w96.webp';
import SnowIcon from '/weather_icons/22_snow_color_w96.webp';
import DrizzleIcon from '/weather_icons/09_light_rain_color_w96.webp';
import ThunderIcon from '/weather_icons/14_thunderstorm_color_w96.webp';
import FogIcon from '/weather_icons/15_fog_color_w96.webp';
import LightningIcon from '/weather_icons/07_lightning_color_w96.webp';
import RainbowIcon from '/weather_icons/40_rainbow_color_w96.webp';
import NightIcon from '/weather_icons/02_moon_stars_color_w96.webp';
import MoonIcon from '/weather_icons/34_full_moon_color_w96.webp';
import SparklesIcon from '/weather_icons/33_sparkles_color_w96.webp';

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = 'w-6 h-6' }) => {
  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return <img src={SunnyIcon} className={className} alt="Sunny weather" />;
      case 'partly cloudy':
        return <img src={PartlyCloudyIcon} className={className} alt="Partly cloudy weather" />;
      case 'cloudy':
      case 'overcast':
        return <img src={CloudyIcon} className={className} alt="Cloudy weather" />;
      case 'rain':
      case 'patchy light rain':
      case 'light rain shower':
        return <img src={RainIcon} className={className} alt="Rainy weather" />;
      case 'heavy rain':
      case 'heavy rain at times':
        return <img src={HeavyRainIcon} className={className} alt="Heavy rain" />;
      case 'snow':
      case 'patchy moderate snow':
      case 'moderate snow':
      case 'patchy heavy snow':
      case 'heavy snow':
        return <img src={SnowIcon} className={className} alt="Snowy weather" />;
      case 'drizzle':
      case 'patchy light drizzle':
      case 'light drizzle':
      case 'freezing drizzle':
      case 'heavy freezing drizzle':
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
      case 'fog':
        return <img src={FogIcon} className={className} alt="Fog" />;
      case 'sparkles':
        return <img src={SparklesIcon} className={className} alt="Sparkles" />;
      default:
        return <img src={SunnyIcon} className={className} alt="Default sunny weather" />;
    }
  };

  return getIcon();
};

export default WeatherIcon;