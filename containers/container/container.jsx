import styles from './container.module.scss';

const Container = ({children, marginTop}) => {
  return (
    <div className={styles.container} style={{marginTop}}>
      {children}
    </div>
  );
};

export default Container;
