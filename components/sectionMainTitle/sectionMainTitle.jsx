import styles from './sectionMainTitle.module.scss';

const SectionMainTitle = ({children, align}) => {
  const renderedChildren = children.split(' ').map((word, index) => {
    return (
      <span className={styles.highlight} key={index} style={{zIndex: index}}>
        {word}&nbsp;
      </span>
    );
  });

  return (
    <h2 style={{textAlign: align, marginTop: '2rem'}}>{renderedChildren}</h2>
  );
};

export default SectionMainTitle;
