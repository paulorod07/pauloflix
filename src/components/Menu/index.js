import React from 'react';

import logo from '../../assets/logo.png';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <nav>
      <a href="/">
        <img className={styles.logo} src={logo} alt="PAULOFLIX" />
      </a>
    </nav>
  );
}
