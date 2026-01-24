import Form from '../form/form';
import styles from './contact.module.scss';
import Info from '../../components/info/info';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';

const Contact = () => {
  return (
    <div className={styles.kontakt}>
      <div className={styles.content}>
        <SectionMainTitle className={styles.title}>Kontakt</SectionMainTitle>
        <div className={styles.info}>
          <Info />
        </div>
        <div className={styles.form}>
          <div id="form" className={styles.anchor}></div>
          <Form />
        </div>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1391.2!2d15.95994!3d45.80224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d70a1e9b7a7d%3A0x8c7d6a5b4c3d2e1f!2sTratinska%20ul.%2036%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1706000000000!5m2!1shr!2shr"
            width="100%"
            height="300"
            style={{border: 0, borderRadius: '8px'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Poliklinika ProNatal - Tratinska 36, Zagreb"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
