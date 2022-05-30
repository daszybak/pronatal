import {useEffect, useRef} from 'react';
import Link from 'next/link';
import styles from './mobileSubmenu.module.scss';

const MobileSubmenu = ({showSubmenu, submenuInfo, submenuContent}) => {
  const submenuContainer = useRef(null);

  useEffect(() => {
    if (!showSubmenu) {
      submenuContainer.current.style.visibility = 'hidden';
      submenuContainer.current.style.height = '0px';
    }

    if (showSubmenu) {
      submenuContainer.current.style.visibility = 'visible';
      submenuContainer.current.style.height = '100%';
    }
  }, [showSubmenu]);

  const renderedLinks = submenuContent.map((name, index) => {
    return (
      <li key={index.toString()}>
        <Link
          href={`/${name
            .split(' ')
            .map((name) => name.slice(0, 1).toLowerCase() + name.slice(1))
            .join('-')}`}
        >
          <a>{name}</a>
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.submenu} ref={submenuContainer}>
      <ul>{renderedLinks}</ul>
    </div>
  );
};

export default MobileSubmenu;
