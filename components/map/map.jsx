import {useRef, useState, useEffect} from 'react';
import styles from './map.module.scss';

const Map = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapContainer.current && !map) {
      setMap(
        new google.maps.Map(mapContainer.current, {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8,
        })
      );
    }
  }, [map, mapContainer]);

  return <div ref={mapContainer} className={styles.map} />;
};

export default Map;
