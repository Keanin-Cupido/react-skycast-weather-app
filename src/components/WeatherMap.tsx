import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  accessToken?: string;
  center?: [number, number];
  zoom?: number;
  style?: string;
}

const WeatherMap: React.FC<MapProps> = ({
  accessToken = 'pk.eyJ1Ijoia2VhbmluY3VwaWRvIiwiYSI6ImNtM3ZrNWs3cTB0aWsyanNmMWlldDVwNGkifQ.WhQfRX38u1wIUsKgj8yeGA',
  center = [-74.5, 40],
  zoom = 9,
  style = 'mapbox://styles/mapbox/streets-v9',
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!accessToken) {
      console.error('Missing Mapbox Access Token');
      return;
    }

    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style,
      center,
      zoom,
    });

    // Add navigation controls to the top-right corner of the map
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on unmount
    return () => map.remove();
  }, [accessToken, center, zoom, style]);

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />
  );
};

export default WeatherMap;
