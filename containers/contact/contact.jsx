import Form from '../form/form';
import styles from './contact.module.scss';
// import {Wrapper, Status} from '@googlemaps/react-wrapper';
import Map from '../../components/map/map';
import Info from '../../components/info/info';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';

const Contact = () => {
  return (
    <div className={styles.kontakt}>
      <div className={styles.content}>
        <SectionMainTitle className={styles.title}>Kontakt</SectionMainTitle>
        {/* <Wrapper apiKey={process.env.NEXT_PUBLIC_MAPS_API}>
          <Map
            position={{
              lat: Number(process.env.NEXT_PUBLIC_MAPS_LAT),
              lng: Number(process.env.NEXT_PUBLIC_MAPS_LNG),
            }}
          />
        </Wrapper> */}
        <div className={styles.info}>
          <Info />
        </div>
        <div className={styles.form}>
          <div id="form" className={styles.anchor}></div>
          <Form />
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
