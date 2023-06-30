import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import marker from './marker-icon.png'
const Map = ({ latitude, longitude, handleMapClick, clickable }) => {
    
    const icon = L.icon({
        iconUrl: marker,
        iconSize: [45, 45],
        iconAnchor: [12, 45],
        popupAnchor: [1, -34],
    });

    const MapClickHandler = () => {
        useMapEvents({
            click: handleMapClick,
        });

        return null;
    };

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={18}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors" />
            {latitude !== 0 && longitude !== 0 && (
                <Marker position={[latitude, longitude]} icon={icon}>
                </Marker>
            )}
            {clickable && <MapClickHandler />}
        </MapContainer>
    );
};

export default Map;
