import styles from './info.module.scss';

const Info = () => {
  return (
    <div className={styles.info}>
      <div>
        <p>
          <strong>Adresa:</strong> Tratinska 36, Zagreb, Hrvatska
        </p>
        <p>
          <strong>Telefon:</strong> +385 (1) 3821 411
        </p>
        <p>
          <strong>Email:</strong> pronatal@pronatal.hr
        </p>
      </div>
    </div>
  );
};

export default Info;
