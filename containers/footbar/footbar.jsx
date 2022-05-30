import styles from './footbar.module.scss';
import Form from '../form/form';
import CopyrightCard from '../../components/copyrightCard/copyrightCard';

const Footbar = () => {
  return (
    <footer className={styles.footer}>
      <a id="footer" className={styles.anchor}></a>
      <Form />
      <CopyrightCard />
    </footer>
  );
};

export default Footbar;
