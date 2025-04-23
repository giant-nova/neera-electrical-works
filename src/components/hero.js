import React from 'react';
import styles from '../styles/hero.module.css';
import heroImage from '../assets/Image.png'; // Import your image

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Explore our range of electronic</h1>
        <p>Innovative solutions for your projects</p>
        <button className={styles.button}>Explore</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="Electronic Components" className={styles.image} />
      </div>
    </section>
  );
}

export default Hero;