import styles from './footbar.module.scss';
import Form from '../form/form';
import CopyrightCard from '../../components/copyrightCard/copyrightCard';
import {useRef} from 'react';
import useIntersection from '../../hooks/useIntersection';
import Link from 'next/link';
import {IoMailOutline} from 'react-icons/io5';

const Footbar = () => {
  const footbarContainer = useRef();
  const isFootbarConatinerVisible = useIntersection(footbarContainer);

  return (
    <footer className={styles.footer} ref={footbarContainer}>
      <div id="footer" className={styles.anchor}></div>
      <Form />
      {!isFootbarConatinerVisible && (
        <Link href="/#footer">
          <a className={styles['menu-btn']} style={{height: 'auto'}}>
            <IoMailOutline />
            &nbsp;Naručite se
          </a>
        </Link>
      )}
      <CopyrightCard />
    </footer>
  );
};

export default Footbar;
