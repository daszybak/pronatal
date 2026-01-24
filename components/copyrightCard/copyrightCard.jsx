import styles from './copyrightCard.module.scss';

const CopyrightCard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.card}>
      © Poliklinika ProNatal, {currentYear}. Sva prava pridržana. | Design by&nbsp;
      <a
        href="https://www.karlodelmis.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        karlodelmis.com
      </a>
    </div>
  );
};

export default CopyrightCard;
