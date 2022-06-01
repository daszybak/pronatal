import Form from '../form/form';
import styles from './contact.module.scss';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import Map from '../../components/map/map';

const Contact = () => {
  return (
    <div className={styles.kontakt}>
      <div className={styles.content}>
        <Wrapper apiKey={process.env.NEXT_PUBLIC_MAPS_API}>
          <Map
            position={{
              lat: process.env.NEXT_PUBLIC_MAPS_LAT,
              lng: process.env.NEXT_PUBLIC_MAPS_LNG,
            }}
          />
        </Wrapper>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
