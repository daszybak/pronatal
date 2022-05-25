import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';
import {BiChevronDown} from 'react-icons/bi';
import Banner from '../banner/banner';
import {useEffect, useState} from 'react';
import Submenu from '../submenu/submenu';

const Navbar = () => {
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

  useEffect(() => {});

  return (
    <div className={styles.navbar}>
      <Banner />
      <nav className={styles.nav}>
        <div>
          <div className={styles.increase}>
            <Link href="/" style={{height: '100%'}}>
              <a>
                <Image src="/images/pronatal-.png" width="203" height="27" />
              </a>
            </Link>
          </div>
          <div className={styles.increase}>
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
                <Submenu
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
                <Submenu
                  showSubmenu={showSubmenu2}
                  submenuInfo={submenuInfo}
                  submenuContent={[
                    'Naš stručni tim',
                    'Naša klinika',
                    'Iskustva',
                  ]}
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
                <Link href="/">
                  <a className="btn" style={{height: 'auto'}}>
                    <span>Naručite</span>
                    <span> se</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
