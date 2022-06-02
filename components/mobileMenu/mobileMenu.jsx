import Link from 'next/link';
import styles from './mobileMenu.module.scss';
import MobileMenuContext from '../../context/mobileMenuContext';
import {BiChevronDown} from 'react-icons/bi';
import {useContext, useRef, useEffect, useState} from 'react';
import MobileSubmenu from '../mobileSubmenu/mobileSubmenu';
import {useRouter} from 'next/dist/client/router';

const MobileMenu = ({location}) => {
  const {showMenu, handleShowMenuOnClick, closeMenu} =
    useContext(MobileMenuContext);
  const mobileMenuContainer = useRef();
  const [showSubmenu1, setShowSubmenu1] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const [submenuInfo, setSubmenuInfo] = useState({});
  const {pathname} = useRouter();

  const displaySubmenu = (e) => {
    console.log('showSubmenu');
    console.log(e.currentTarget.id);
    if (e.currentTarget.id === 'submenu1' && !e.target.closest('a')) {
      setShowSubmenu1((showSubmenu) => !showSubmenu);
      console.log('show submenu', showSubmenu1);
    }
    if (e.currentTarget.id === 'submenu2' && !e.target.closest('a')) {
      setShowSubmenu2((showSubmenu) => !showSubmenu);
    }
    const tempBtn = e.target.closest('li').getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 30;
    console.log('tempBtn', tempBtn, 'center', center, 'bottom', bottom);
    setSubmenuInfo({bottom});
  };

  useEffect(() => {
    if (!location) return;
    if (showMenu) {
      mobileMenuContainer.current.style.left = `${location.left}px`;
      mobileMenuContainer.current.style.transform = `translateY(0%)`;
      mobileMenuContainer.current.style.visibility = 'visible';
      return;
    }

    mobileMenuContainer.current.style.left = `0px`;
    mobileMenuContainer.current.style.top = `${location.bottom}px`;
    mobileMenuContainer.current.style.transform = `translateY(-100%)`;
    mobileMenuContainer.current.style.visibility = 'hidden';
  }, [showMenu, location?.bottom]);

  useEffect(() => {
    if (!showMenu) {
      setShowSubmenu1(false);
      setShowSubmenu2(false);
    }
  }, [showMenu]);

  return (
    <div
      className={`${styles.menu} ${showMenu ? styles.show : ''}`}
      ref={mobileMenuContainer}
    >
      <ul>
        <li id={'submenu1'} key={'usluge'} onClick={displaySubmenu}>
          <div>
            <div>
              <Link href="/usluge">
                <a
                  style={{
                    color: `${
                      showSubmenu1 ? 'var(--grey-400)' : 'var(--textColor)'
                    }`,
                  }}
                  onClick={closeMenu}
                >
                  Usluge
                </a>
              </Link>
            </div>
            <div>
              <BiChevronDown
                className={`${
                  showSubmenu1
                    ? `${styles.initial} ${styles.rotate}`
                    : `${styles.initial}`
                }`}
              />
            </div>
          </div>
          <MobileSubmenu
            showSubmenu={showSubmenu1}
            submenuInfo={submenuInfo}
            submenuContent={[
              'Ginekologija',
              'Opstetricija',
              'Interna medicina',
              'Mamografija',
            ]}
            submenuRoute={'/usluge'}
          />
        </li>
        <li onClick={displaySubmenu} id={'submenu2'} key={'o nama'}>
          <div>
            <div>
              <Link href="/o-nama">
                <a
                  onClick={closeMenu}
                  style={{
                    color: `${
                      showSubmenu2 ? 'var(--grey-400)' : 'var(--textColor)'
                    }`,
                  }}
                >
                  O nama
                </a>
              </Link>
            </div>
            <div className={styles.icon}>
              <BiChevronDown
                className={`${
                  showSubmenu2
                    ? `${styles.initial} ${styles.rotate}`
                    : `${styles.initial}`
                }`}
              />
            </div>
          </div>

          <MobileSubmenu
            showSubmenu={showSubmenu2}
            submenuInfo={submenuInfo}
            submenuContent={['Naš stručni tim', 'Naša klinika', 'Iskustva']}
            submenuRoute={'/o-nama'}
          />
        </li>
        <li key={'zanimljivosti'}>
          <Link href="/cesta-pitanja">
            <a
              onClick={closeMenu}
              style={{
                color: 'var(--textColor)',
              }}
            >
              <span>Česta</span>
              <span> pitanja</span>{' '}
            </a>
          </Link>
        </li>
        <li key={'kontakt'}>
          <Link href="/kontakt">
            <a
              onClick={closeMenu}
              style={{
                color: 'var(--textColor)',
              }}
            >
              Kontakt
            </a>
          </Link>
        </li>
        <li key={'Naručite'} style={{textAlign: 'center'}}>
          <Link href={pathname === '/kontakt' ? '/kontakt#form' : '/#footer'}>
            <a
              onClick={closeMenu}
              className={styles['menu-btn']}
              style={{height: 'auto'}}
            >
              Naručite se
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
