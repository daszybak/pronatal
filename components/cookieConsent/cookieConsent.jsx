import {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from './cookieConsent.module.scss';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našoj stranici.
            Nastavljanjem pregledavanja pristajete na korištenje kolačića.
          </p>
          <p className={styles.link}>
            Više informacija u našoj{' '}
            <Link href="/privatnost">
              <a>Izjavi o privatnosti</a>
            </Link>
            .
          </p>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleAccept} className={styles.accept}>
            Prihvaćam
          </button>
          <button onClick={handleDecline} className={styles.decline}>
            Odbijam
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
