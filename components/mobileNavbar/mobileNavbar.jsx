import Image from 'next/image';
import Link from 'next/link';
import styles from './mobileNavbar.module.scss';
import {useContext, useRef, useEffect, useState} from 'react';
import MobileMenuContext from '../../context/mobileMenuContext';
import MobileMenu from '../mobileMenu/mobileMenu';

const MobileNavbar = () => {
  const {showMenu, handleShowMenuOnClick} = useContext(MobileMenuContext);
  const navbarContainer = useRef();
  const [location, setLocation] = useState();

  useEffect(() => {
    const setLocationHandler = () => {
      const {bottom, left, right} =
        navbarContainer.current.getBoundingClientRect();
      setLocation({bottom, left, right});
    };
    setLocationHandler();

    window.addEventListener('resize', setLocationHandler);
    return () => {
      window.removeEventListener('resize', setLocationHandler);
    };
  }, [showMenu]);

  useEffect(() => {
    if (!showMenu) {
      document.body.style.overflow = 'auto';
    }
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    }
  }, [showMenu]);

  return (
    <div
      className={`${styles.navbar} ${showMenu ? styles.show : ''}`}
      ref={navbarContainer}
    >
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
      <MobileMenu location={location} />
    </div>
  );
};

export default MobileNavbar;
