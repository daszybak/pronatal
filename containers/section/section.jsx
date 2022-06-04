import styles from './section.module.scss';

const Section = ({title, children}) => {
  return (
    <div className={styles['outer-section']}>
      <div className={styles.section}>
        <h3>{!title ? `Title` : title}</h3>
        {!children ? (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, minima
            tempore nesciunt, nihil, consequuntur corporis beatae laborum eius
            recusandae nulla accusamus? Distinctio minima et delectus, fugit
            vero consectetur molestias culpa!
          </p>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Section;
