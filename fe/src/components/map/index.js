import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import marker from './marker-icon.png'
const Map = ({ latitude, longitude, setValue, clickable }) => {
    const reverseGeocode = async (lat, lon) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
            const data = await response.json();

            if (response.ok && data.address) {
                const { house_number, road, city, country } = data.address;
                const addressComponents = [house_number, road, city, country].filter(Boolean);
                const address = addressComponents.join(', ');
                return address;
            } else {
                throw new Error('Reverse geocoding failed');
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const handleMapClick = (event) => {
        const { lat, lng } = event.latlng;
        setValue('latitude', lat);
        setValue('longitude', lng);
        reverseGeocode(lat, lng)
            .then((clickedAddress) => {
                setValue('address', clickedAddress);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

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
