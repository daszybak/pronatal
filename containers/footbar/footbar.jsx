import styles from './footbar.module.scss';
import Form from '../form/form';
import CopyrightCard from '../../components/copyrightCard/copyrightCard';
import {useRef, useState, useEffect} from 'react';
import ContactButton from '../../components/contactButton/contactButton';
import SectionMainTitle from '../../components/sectionMainTitle/sectionMainTitle';
import Section from '../section/section';

const Footbar = () => {
  const [showButton, setShowButton] = useState(false);
  const footbarContainer = useRef();
  useEffect(() => {
    setShowButton(true);
  }, []);

  return (
    <footer className={styles.footer} ref={footbarContainer}>
      <div id="footer" className={styles.anchor}></div>
      <SectionMainTitle>Upit</SectionMainTitle>
      <Form />
      {showButton && <ContactButton footbarContainer={footbarContainer} />}
      <CopyrightCard />
    </footer>
  );
};

export default Footbar;
