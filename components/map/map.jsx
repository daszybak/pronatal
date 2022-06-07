import {useRef, useState, useEffect} from 'react';
import styles from './map.module.scss';

const Map = ({position}) => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (mapContainer.current && !map) {
      setMap(
        new google.maps.Map(mapContainer.current, {
          center: position,
          zoom: 15,
        })
      );

      setMarker(
        new google.maps.Marker({
          map,
          position,
        })
      );
    }
  }, [map, mapContainer, marker]);

  console.log('marker', marker);
  return <div ref={mapContainer} className={styles.map} />;

  // return (
  //   <iframe
  //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.4508814809737!2d15.957777115568827!3d45.80222777910633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d724b23c701d%3A0xaec7303c4033fb32!2sPoliklinika%20ProNatal!5e0!3m2!1shr!2shr!4v1654127244941!5m2!1shr!2shr"
  //     width="600"
  //     height="450"
  //     className={styles.map}
  //     allowFullScreen=""
  //     loading="lazy"
  //     referrerPolicy="no-referrer-when-downgrade"
  //   ></iframe>
  // );
};

export default Map;
