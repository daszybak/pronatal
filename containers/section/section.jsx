import Anchor from '../../components/anchor/anchor';
import styles from './section.module.scss';

const Section = ({title, children, align, mainTitle, id}) => {
  return (
    <div className={styles['outer-section']}>
      <div className={styles.section} style={{textAlign: align}}>
      <Anchor id={id}/>
        {mainTitle}
        {typeof title === 'object' ? (
          title
        ) : (
          <h3>{!title ? `Title` : title}</h3>
        )}

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
