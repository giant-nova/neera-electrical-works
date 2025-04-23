import React from 'react';
import styles from '../styles/subscription.module.css';

function Subscription() {
  return (
    <section className={styles.subscription}>
      <p>Get 15% off your first order. Subscribe now</p>
      <div className={styles.form}>
        <input type="email" placeholder="Enter your email" className={styles.input} />
        <button className={styles.button}>Subscribe</button>
      </div>
    </section>
  );
}

export default Subscription;