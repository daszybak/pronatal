import styles from './contactButton.module.scss';
import useIntersection from '../../hooks/useIntersection';
import Link from 'next/link';
import {IoMailOutline} from 'react-icons/io5';
import {useEffect, useState} from 'react';

const ContactButton = ({footbarContainer}) => {
  const isFootbarContainerVisible = useIntersection(footbarContainer);

  if (isFootbarContainerVisible) return null;

  return (
    <Link href="/#footer">
      <a className={styles['menu-btn']} style={{height: 'auto'}}>
        <IoMailOutline />
      </a>
    </Link>
  );
};

export default ContactButton;
