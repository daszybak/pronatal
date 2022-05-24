import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';
import {BiChevronDown} from 'react-icons/bi';
import Banner from '../banner/banner';

const Navbar = () => {
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
                  <a>
                    Usluge
                    <BiChevronDown />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/o-nama">
                  <a>
                    <span>O</span>
                    <span> nama</span>
                    <span className={styles.icon}>
                      <BiChevronDown />
                    </span>
                  </a>
                </Link>
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
