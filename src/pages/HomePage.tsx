import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import Card from '../components/common/Card';
import { FaChild, FaBook, FaUserGraduate } from 'react-icons/fa';


const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Educación que Inspira Futuros Líderes</h1>
          <Link to="/admissions" className={styles.heroButton}>
            Admisiones
          </Link>
        </div>
      </section>

      {/* News and Events Section */}
      <section className={styles.newsSection}>
        <h2>Noticias y Eventos</h2>
        <div className={styles.newsGrid}>
          <Card
            imageUrl="/news-1.jpg"
            title="Competencia de Robótica"
            description="Nuestros estudiantes ganaron el primer lugar en la competencia nacional de robótica."
          />
          <Card
            imageUrl="/news-2.jpg"
            title="Día de la Familia"
            description="Celebramos nuestro día anual de la familia con juegos, comida y mucha diversión."
          />
          <Card
            imageUrl="/news-3.jpg"
            title="Excursión al Museo de Ciencias"
            description="Los estudiantes de primaria visitaron el museo de ciencias para aprender sobre el universo."
          />
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className={styles.programsSection}>
        <h2>Programas Académicos</h2>
        <div className={styles.programsGrid}>
          <div className={styles.program}>
            <div className={styles.programIcon}><FaChild /></div>
            <h3>Inicial</h3>
            <p>Un ambiente de aprendizaje lúdico y seguro para los más pequeños.</p>
          </div>
          <div className={styles.program}>
            <div className={styles.programIcon}><FaBook /></div>
            <h3>Primaria</h3>
            <p>Fomentamos la curiosidad y el pensamiento crítico en nuestros estudiantes.</p>
          </div>
          <div className={styles.program}>
            <div className={styles.programIcon}><FaUserGraduate /></div>
            <h3>Bachillerato</h3>
            <p>Preparamos a los jóvenes para los desafíos de la universidad y el futuro.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
