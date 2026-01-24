import styles from './person.module.scss';
import Image from 'next/image';
import {useState} from 'react';

const truncateAtSentence = (text, maxLength = 300) => {
  if (!text || text.length <= maxLength) return text;

  // Find the last complete sentence within maxLength
  const truncated = text.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('. ');

  if (lastPeriod > 100) {
    // Return text up to and including the period
    return text.substring(0, lastPeriod + 1);
  }

  // Fallback: cut at word boundary
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? text.substring(0, lastSpace) + '...' : truncated + '...';
};

const Person = ({src, alt, right, children, priority}) => {
  const [showMore, setShowMore] = useState(false);

  const truncatedText = truncateAtSentence(children, 300);
  const hasMoreContent = children && children.length > 300;
  const renderedText = showMore ? children : truncatedText;

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
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
        />
      </div>
      <div style={{order: `${right ? '1' : '2'}`}} className={styles.text}>
        <p>
          {renderedText}
          {hasMoreContent && (
            <>
              &nbsp;
              <span>
                <button onClick={() => setShowMore((state) => !state)}>
                  {showMore ? 'Smanji' : 'Saznaj više...'}
                </button>
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Person;
