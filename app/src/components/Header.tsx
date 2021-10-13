import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <p>Hello World</p>
      <Link to="/test">About</Link>
    </div>
  );
}

export default Header;
