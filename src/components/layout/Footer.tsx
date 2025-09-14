import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <img src="/placeholder-logo.png" alt="Colegio del Valle Logo" />
          </div>
          <p>Dirección: Calle Falsa 123, Springfield</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@colegiodelvalle.edu</p>
        </div>
        <div className={styles.column}>
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/academics">Academia</a></li>
            <li><a href="/admissions">Admisiones</a></li>
            <li><a href="/student-life">Vida Estudiantil</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Síguenos</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
          <div className={styles.map}>
            <img src="/placeholder-map.png" alt="Mapa" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
