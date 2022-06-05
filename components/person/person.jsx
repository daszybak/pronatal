import styles from './person.module.scss';
import Image from 'next/image';

const Person = ({src, alt, right}) => {
  return (
    <div className={styles.person}>
      <div
        className={styles.image}
        style={{
          order: `${right ? '2' : '1'}`,
          justifySelf: `${right ? 'end' : ''}`,
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
      <div style={{order: `${right ? '1' : '2'}`}}>Lorem ipsum</div>
    </div>
  );
};

export default Person;
