import {useRef, useState, useEffect} from 'react';
import styles from './map.module.scss';

const Map = ({position}) => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapContainer.current && !map) {
      const map = new google.maps.Map(mapContainer.current, {
        center: position,
        zoom: 15,
      });

      const marker = new google.maps.Marker({
        position,
        map,
      });
    }
  }, []);

  return <div ref={mapContainer} className={styles.map} />;
};

export default Map;
