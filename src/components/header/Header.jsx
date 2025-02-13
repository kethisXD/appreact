import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src='./logo.png' alt="Логотип" className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">О нас</a></li>
          <li className={styles.navItem}><a href="/about" >Услуги</a></li>
          <li className={styles.navItem}><a href="/contact">Аренда</a></li>
        </ul>
      </nav>
      <button className={`${styles.ovalButton} rubik-regular-italic`}>Связаться</button>
    </header>
  );
};

export default Header;
