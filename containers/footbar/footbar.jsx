import styles from './footbar.module.scss';
import Form from '../form/form';
import CopyrightCard from '../../components/copyrightCard/copyrightCard';

const Footbar = () => {
  return (
    <footer className={styles.footer}>
      <div id="footer" className={styles.anchor}></div>
      <Form />
      <CopyrightCard />
    </footer>
  );
};

export default Footbar;
