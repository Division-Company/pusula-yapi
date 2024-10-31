import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Özel simge
const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
});

// Haritayı yeni konuma taşıyan bileşen
function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
}

export default function LocationMap({ location = "Istanbul", coordinates = [41.0082, 28.9784] }) {
    return (
        <MapContainer
            center={coordinates}
            zoom={5}
            style={{ width: '150px', height: '150px', borderRadius: '8px' }}
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            attributionControl={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates} icon={customIcon}>
                <Popup>{location}</Popup>
            </Marker>
            {/* Yeni konum güncellendiğinde haritayı taşıyan bileşen */}
            <ChangeMapView coords={coordinates} />
        </MapContainer>
    );
}
