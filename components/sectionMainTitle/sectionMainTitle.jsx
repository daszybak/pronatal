import styles from './sectionMainTitle.module.scss';

const SectionMainTitle = ({children}) => {
  const renderedChildren = children.split(' ').map((word, index) => {
    return (
      <span className={styles.highlight} key={index} style={{zIndex: index}}>
        {word}&nbsp;
      </span>
    );
  });

  return <h2 className={styles.title}>{renderedChildren}</h2>;
};

export default SectionMainTitle;
