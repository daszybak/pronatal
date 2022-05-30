import styles from './copyrightCard.module.scss';

const CopyrightCard = () => {
  return (
    <div className={styles.card}>
      © Poliklinika ProNatal, 2022. Sva prava pridržana. | Design by&nbsp;
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
