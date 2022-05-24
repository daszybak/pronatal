import styles from './banner.module.scss';

import Link from 'next/link';

import {IoLocation, IoCall} from 'react-icons/io5';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <div>
          <Link href={'https://goo.gl/maps/tRMv4ESTVpcxe43Y7'} passHref={true}>
            <div className={styles.link}>
              <IoLocation />

              <h6>Tratinska 36, 10000 Zagreb, Hrvatska</h6>
            </div>
          </Link>
        </div>
        <div className={styles.socials}>
          <ul>
            <li>
              <Link href="tel:+38513821411">
                <div className={styles.link}>
                  <IoCall />
                  <h6>+ 385 1 3821 411</h6>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className={styles.link}>
                  <FaFacebookF />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className={styles.link}>
                  <FaInstagram />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className={styles.link}>
                  <FaTwitter />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
