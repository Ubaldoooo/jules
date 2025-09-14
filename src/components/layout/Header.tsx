import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <img src="/placeholder-logo.png" alt="Colegio del Valle Logo" />
      </div>
      <nav className={styles.nav}>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Sobre Nosotros</NavLink>
        <NavLink to="/academics" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Academia</NavLink>
        <NavLink to="/admissions" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Admisiones</NavLink>
        <NavLink to="/student-life" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Vida Estudiantil</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Contacto</NavLink>
      </nav>
      <div className={styles.actions}>
        <button className={styles.virtualTourButton}>Tour Virtual</button>
        <div className={styles.languageSelector}>
          <span>ES</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
