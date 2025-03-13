import React from 'react';
import Map, { Marker } from 'react-map-gl';

const MapboxComponent = () => {
  return (
    <Map
      initialViewState={{
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 10,
      }}
      style={{ width: '100%', height: '400px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="your_mapbox_access_token"
    >
      <Marker latitude={37.7749} longitude={-122.4194} color="red" />
    </Map>
  );
};

export default MapboxComponent;
