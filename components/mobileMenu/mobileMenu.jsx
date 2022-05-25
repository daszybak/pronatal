import styles from './mobileMenu.module.scss';
import MobileMenuContext from '../../context/mobileMenuContext';
import {useContext} from 'react';

const MobileMenu = () => {
  const {showMenu} = useContext(MobileMenuContext);

  return (
    <div className={`${styles.menu} ${showMenu ? styles.show : ''}`}>
      Mobile Menu
    </div>
  );
};

export default MobileMenu;
