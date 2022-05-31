import styles from './title.module.scss';

const Title = () => {
  return (
    <div className={styles.title}>
      <h1>Poliklinika ProNatal</h1>
      <h2>
        Pružamo usluge iz ginekologije i opstetricije, interne medicine,
        radiologije - mamografije i urologije
      </h2>
    </div>
  );
};

export default Title;
