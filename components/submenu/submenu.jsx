import Link from 'next/link';
import {useEffect, useRef} from 'react';
import styles from './submenu.module.scss';

const Submenu = ({showSubmenu, submenuInfo, submenuContent}) => {
  const {center, bottom} = submenuInfo;
  const container = useRef(null);

  const renderedLinks = submenuContent.map((name) => {
    return (
      <li>
        <Link href={`${name}`}>
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

  useEffect(() => {});

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
