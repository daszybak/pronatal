import {useEffect, useRef, useContext} from 'react';
import Link from 'next/link';
import styles from './mobileSubmenu.module.scss';
import MobileMenuContext from '../../context/mobileMenuContext';

const MobileSubmenu = ({
  showSubmenu,
  submenuInfo,
  submenuContent,
  submenuRoute,
}) => {
  const submenuContainer = useRef(null);
  const {closeMenu} = useContext(MobileMenuContext);

  const handleOnLinkClick = (e) => {
    e.stopPropagation();
    closeMenu();
  };

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
          href={`${submenuRoute}#${name
            .split(' ')
            .map((name) => name.slice(0, 1).toLowerCase() + name.slice(1))
            .join('-')}`}
        >
          <a onClick={handleOnLinkClick}>
            {name.split(' ').map((name, index) => {
              return <span key={index}>{name}&nbsp;</span>;
            })}
          </a>
        </Link>
      </li>
    );
  });

  return (
    <div className={styles.submenu} ref={submenuContainer}>
      <ul onClick={(e) => e.stopPropagation()}>{renderedLinks}</ul>
    </div>
  );
};

export default MobileSubmenu;
