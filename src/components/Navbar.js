import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Neera Electrical Works</div>
      <ul className={styles.navLinks}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/industry">Product</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      </ul>
      <ul className={styles.rightLinks}>
        <li><Link to="/industry">Industry</Link></li>
        <li><Link to="/contact-page">Contact</Link></li>
      </ul>
    </nav>
  );
  
}
// eslint-disable-next-line
export default Navbar;