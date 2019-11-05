import React, { FC } from 'react';
import styles from './Navigation.module.scss';
import logo from '../../assets/logo.svg';
import ScrollLink from '../scroll-link/ScrollLink';

const Navigation: FC = props => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="noodle logo" />
        <span>NOODLE</span>
      </div>

      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <ScrollLink className={styles.navListLink} href="#about">
            about
          </ScrollLink>
        </li>
        <li className={styles.navListItem}>
          <ScrollLink className={styles.navListLink} href="#features">
            features
          </ScrollLink>
        </li>
        <li className={styles.navListItem}>
          <ScrollLink className={styles.navListLink} href="#getapp">
            get the app
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
