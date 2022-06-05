import Image from 'next/image';
import Link from 'next/link';
import styles from './mobileNavbar.module.scss';
import {useContext, useRef, useEffect, useState} from 'react';
import MobileMenuContext from '../../context/mobileMenuContext';
import MobileMenu from '../mobileMenu/mobileMenu';
import {AiOutlinePhone} from 'react-icons/ai';

const MobileNavbar = () => {
  const {showMenu, handleShowMenuOnClick, closeMenu} =
    useContext(MobileMenuContext);
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
          <a onClick={closeMenu}>
            <Image
              src="/images/pronatal-.png"
              width="203"
              height="27"
              alt="ProNatal"
              priority={true}
            />
          </a>
        </Link>
      </div>
      <div className={styles.icons}>
        <a href="tel:+38513821411">
          <AiOutlinePhone className={styles.phone} />
        </a>
        <div
          className={`${styles['burger-menu']} ${
            showMenu ? styles.checked : ''
          }`}
          onClick={handleShowMenuOnClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <MobileMenu location={location} />
    </div>
  );
};

export default MobileNavbar;
