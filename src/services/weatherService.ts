import axios from 'axios';
import { API_CONFIG } from '../config/api';
import type { WeatherData } from '../types/weather';

const weatherApi = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  params: {
    key: API_CONFIG.WEATHER_API_KEY,
  },
});

export const getWeatherData = async (city: string): Promise<WeatherData> => {
  const { data } = await weatherApi.get('/forecast.json', {
    params: {
      q: city,
      days: 7,
      aqi: 'yes',
    },
  });
  return data;
};