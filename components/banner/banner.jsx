import styles from './banner.module.scss';

import Link from 'next/link';

import {IoLocation, IoCall} from 'react-icons/io5';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import useResize from '../../hooks/useResize';

const Banner = () => {
  const {width} = useResize();

  return (
    <div className={styles.banner}>
      <div>
        <div>
          <a
            href={'https://goo.gl/maps/tRMv4ESTVpcxe43Y7'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.link}>
              <IoLocation />
              <h6>Tratinska 36{width > 650 ? ', Zagreb, Hrvatska' : ''}</h6>
            </div>
          </a>
        </div>
        <div className={styles.socials}>
          <ul>
            <li>
              <Link href="tel:+38513821411">
                <div className={styles.link}>
                  <IoCall />
                  <h6>+ 385 (1) 3821 411</h6>
                </div>
              </Link>
            </li>
            {width > 1350 && (
              <>
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
                  <a
                    href="https://twitter.com/marinaivanisev3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.link}>
                      <FaTwitter />
                    </div>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
