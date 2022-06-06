import styles from './person.module.scss';
import Image from 'next/image';
import {useState} from 'react';

const Person = ({src, alt, right, children}) => {
  const [showMore, setShowMore] = useState(false);

  const renderedText = <>{showMore ? children : children?.substring(0, 250)}</>;

  return (
    <div className={styles.person}>
      <div
        className={styles.image}
        style={{
          order: `${right ? '2' : '1'}`,
          justifySelf: `${right ? 'end' : 'start'}`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="left top"
          loading="lazy"
        />
      </div>
      <div style={{order: `${right ? '1' : '2'}`}} className={styles.text}>
        <p>
          {renderedText}&nbsp;
          <span>
            <button onClick={() => setShowMore((state) => !state)}>
              {showMore ? 'Smanji' : 'Saznaj više...'}
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Person;
