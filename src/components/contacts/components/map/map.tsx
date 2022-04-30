import { useEffect, useRef, useState } from 'react';
import leaflet, { Icon, Marker } from 'leaflet';
import { QuestsLocation, ZOOM_LEVEL } from 'const';
import pinUrl from 'assets/img/icon-location.svg'
import 'leaflet/dist/leaflet.css';

const pinIcon = new Icon({
  iconUrl: pinUrl,
  iconSize: [44, 56],
  iconAnchor: [22, 56],
});

const Map = (): JSX.Element => {
  const mapRef = useRef(null);
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef && mapRef.current && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: QuestsLocation.Latitude,
          lng: QuestsLocation.Longitude,
        },
        zoom: ZOOM_LEVEL,
      });

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map]);

  if (map) {
    const marker = new Marker({
      lat: QuestsLocation.Latitude,
      lng: QuestsLocation.Longitude,
    });
    marker.setIcon(pinIcon).addTo(map);
  }

  return <div style={{height: '100%', width: '100%'}} ref={mapRef} />;
};

export default Map;
