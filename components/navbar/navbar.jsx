import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
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
                <a>Usluge</a>
              </Link>
            </li>
            <li>
              <Link href="/o-nama">
                <a>O nama</a>
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
                <a className="btn">Naručite se</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
