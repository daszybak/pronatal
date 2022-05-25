import Image from 'next/image';
import Link from 'next/link';
import styles from './mobileNavbar.module.scss';
import {BiChevronDown} from 'react-icons/bi';
import {useState, useContext} from 'react';
import MobileMenuContext from '../../context/mobileMenuContext';

const MobileNavbar = () => {
  const {showMenu, handleShowMenuOnClick} = useContext(MobileMenuContext);

  return (
    <div className={styles.navbar}>
      <div className={styles['image-container']}>
        <Link href="/">
          <a>
            <Image
              src="/images/pronatal-.png"
              width="203"
              height="27"
              alt="ProNatal"
            />
          </a>
        </Link>
      </div>
      <div
        className={`${styles['burger-menu']} ${showMenu ? styles.checked : ''}`}
        onClick={handleShowMenuOnClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MobileNavbar;
