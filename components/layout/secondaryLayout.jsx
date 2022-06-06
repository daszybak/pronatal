import CopyrightCard from '../copyrightCard/copyrightCard';
import Navbar from '../navbar/navbar';
import styles from './secondaryLayout.module.scss';

function SecondaryLayout({children}) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <CopyrightCard />
    </div>
  );
}

export default SecondaryLayout;
