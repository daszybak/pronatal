import Link from 'next/link';
import styles from './copyrightCard.module.scss';

const CopyrightCard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.card}>
      <div className={styles.links}>
        <Link href="/privatnost">
          <a>Privatnost</a>
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/impressum">
          <a>Impressum</a>
        </Link>
      </div>
      <div className={styles.copyright}>
        © Poliklinika ProNatal, {currentYear}. Sva prava pridržana. | Design by&nbsp;
        <a
          href="https://www.karlodelmis.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          karlodelmis.com
        </a>
      </div>
    </div>
  );
};

export default CopyrightCard;
