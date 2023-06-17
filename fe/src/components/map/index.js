import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Gmap = ({ center, setCenter, handleMapClick, selectedLocation }) => {

    const getCenter = () => {
        // Get the current position using the browser's geolocation API
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setCenter({ lat: latitude, lng: longitude });
                selectedLocation = center;
            },
            error => {
                console.error('Error getting the current position:', error);
            }
        );
    }

    if (!center) {
        getCenter();
    }

    return (
        <Map
            google={window.google}
            zoom={16}
            initialCenter={center}
            onClick={handleMapClick}
        >
            {selectedLocation && <Marker position={selectedLocation} />}
        </Map>
    );
};
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8F4lK0x68Em-oDEAqckFImvW9k-Fz8Ow'
})(Gmap);
