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
    if (e.target.textContent === 'Usluge') {
      setShowSubmenu1(true);
      setShowSubmenu2(false);
    }
    if (e.target.textContent === 'O nama') {
      setShowSubmenu1(false);
      setShowSubmenu2(true);
    }
    const tempBtn = e.target.closest('li').getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 9;
    setSubmenuInfo({center, bottom});
  };

  useEffect(() => {});

  return (
    <div className={styles.navbar}>
      <Banner />
      <nav className={styles.nav}>
        <div>
          <div>
            <Link href="/">
              <a>
                <Image src="/images/pronatal-.png" width="203" height="27" />
              </a>
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/usluge">
                  <a onMouseOver={displaySubmenu}>
                    Usluge
                    <BiChevronDown />
                  </a>
                </Link>
                <Submenu
                  showSubmenu={showSubmenu1}
                  submenuInfo={submenuInfo}
                  submenuContent={[
                    'Ginekologija',
                    'Opstetricija',
                    'Interna medicina',
                    'Radiologija - mamografija',
                  ]}
                />
              </li>
              <li>
                <Link href="/o-nama">
                  <a onMouseOver={displaySubmenu}>
                    <span>O</span>
                    <span> nama</span>
                    <span className={styles.icon}>
                      <BiChevronDown />
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
              <li>
                <Link href="/zanimljivosti">
                  <a>Zanimljivosti</a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="btn">
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
