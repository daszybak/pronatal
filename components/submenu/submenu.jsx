import Link from 'next/link';
import {useEffect, useRef} from 'react';
import styles from './submenu.module.scss';

const Submenu = ({showSubmenu, submenuInfo, submenuContent}) => {
  const {center, bottom} = submenuInfo;
  const container = useRef(null);

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
  useEffect(() => {
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [center, bottom]);

  // useEffect(() => {
  //   console.log('container', container.current);
  //   if (showSubmenu) {
  //     const timeout = setTimeout(() => {
  //       container.current.style.display = 'block';
  //       return () => clearTimeout(timeout);
  //     }, 10);
  //   }

  //   if (!showSubmenu) {
  //     const timeout = setTimeout(() => {
  //       container.current.style.display = 'none';
  //       return () => clearTimeout(timeout);
  //     }, 250);
  //   }
  // }, [showSubmenu]);

  return (
    <div
      ref={container}
      className={
        showSubmenu
          ? `${styles.submenu} ${styles['submenu-s']} ${styles.show}`
          : `${styles.submenu} ${styles['submenu-s']}`
      }
    >
      <ul className={styles['submenu-list']}>{renderedLinks}</ul>
    </div>
  );
};

export default Submenu;
