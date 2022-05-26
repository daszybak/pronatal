import Link from 'next/link';
import styles from './mobileMenu.module.scss';
import MobileMenuContext from '../../context/mobileMenuContext';
import {BiChevronDown} from 'react-icons/bi';
import {useContext, useRef, useEffect, useState} from 'react';
import MobileSubmenu from '../mobileSubmenu/mobileSubmenu';

const MobileMenu = ({location}) => {
  const {showMenu} = useContext(MobileMenuContext);
  const mobileMenuContainer = useRef();
  const [showSubmenu1, setShowSubmenu1] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const [submenuInfo, setSubmenuInfo] = useState({});

  const displaySubmenu = (e) => {
    console.log('showSubmenu');
    if (e.currentTarget.textContent === 'Usluge') {
      setShowSubmenu1(true);
      setShowSubmenu2(false);
    }
    if (e.currentTarget.textContent === 'O nama') {
      setShowSubmenu1(false);
      setShowSubmenu2(true);
    }
    const tempBtn = e.target.closest('li').getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 30;
    console.log('tempBtn', tempBtn, 'center', center, 'bottom', bottom);
    setSubmenuInfo({center, bottom});
  };

  const hideSubmenu = (e) => {
    console.log('hideSubmenu');
    console.log('e.target.id', e.currentTarget.id);
    if (e.currentTarget.id === 'submenu1') {
      setShowSubmenu1(false);
    }
    if (e.currentTarget.id === 'submenu2') {
      setShowSubmenu2(false);
    }
  };

  useEffect(() => {
    if (!location) return;
    if (showMenu) {
      mobileMenuContainer.current.style.left = `${location.left}px`;
      mobileMenuContainer.current.style.top = `${location.bottom}px`;
      return;
    }

    mobileMenuContainer.current.style.left = `0px`;
    mobileMenuContainer.current.style.top = `-1200px`;
  }, [showMenu, location?.bottom]);

  return (
    <div
      className={`${styles.menu} ${showMenu ? styles.show : ''}`}
      ref={mobileMenuContainer}
    >
      <ul>
        <li onMouseLeave={hideSubmenu} id={'submenu1'} key={'usluge'}>
          <Link href="/usluge">
            <a onMouseOver={displaySubmenu}>
              Usluge
              <BiChevronDown
                className={`${
                  showSubmenu1
                    ? `${styles.initial} ${styles.rotate}`
                    : `${styles.initial}`
                }`}
              />
            </a>
          </Link>
          <MobileSubmenu
            showSubmenu={showSubmenu1}
            submenuInfo={submenuInfo}
            submenuContent={[
              'Ginekologija',
              'Opstetricija',
              'Interna medicina',
              'Mamografija',
            ]}
          />
        </li>
        <li onMouseLeave={hideSubmenu} id={'submenu2'} key={'o nama'}>
          <Link href="/o-nama">
            <a onMouseOver={displaySubmenu}>
              <span>O</span>
              <span> nama</span>
              <span className={styles.icon}>
                <BiChevronDown
                  className={`${
                    showSubmenu2
                      ? `${styles.initial} ${styles.rotate}`
                      : `${styles.initial}`
                  }`}
                />
              </span>
            </a>
          </Link>
          <MobileSubmenu
            showSubmenu={showSubmenu2}
            submenuInfo={submenuInfo}
            submenuContent={['Naš stručni tim', 'Naša klinika', 'Iskustva']}
          />
        </li>
        <li key={'zanimljivosti'}>
          <Link href="/zanimljivosti">
            <a>
              <span>Česta</span>
              <span> pitanja</span>{' '}
            </a>
          </Link>
        </li>
        <li key={'kontakt'}>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </li>
        <li key={'Naručite'}>
          <Link href="/#footer">
            <a className="btn" style={{height: 'auto'}}>
              <span>Naručite</span>
              <span> se</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
