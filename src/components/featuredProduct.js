import React from 'react';
import styles from '../styles/featureProduct.module.css';
import product1Image from '../assets/blogpost1.png'; // Import product images
import product2Image from '../assets/blogpost2.jpeg';
import product3Image from '../assets/connectors-cables.jpeg';

const products = [
  { name: 'Product A-150', image: product1Image, link: '#' },
  { name: 'Product B-70', image: product2Image, link: '#' },
  { name: 'Product C-50', image: product3Image, link: '#' },
];

function FeaturedProducts() {
  return (
    <section className={styles.featured}>
      <div className={styles.header}>
        <h2>Featured</h2>
        <button className={styles.viewAllButton}>View All</button>
      </div>
      <p>Quality components for your needs</p>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productItem}>
            <a href={product.link}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3 className={styles.productName}>{product.name}</h3>
            </a>
          </div>
        ))}
      </div>
      <div className={styles.mobileViewAll}>
        <button className={styles.viewAllButton}>View All</button>
      </div>
    </section>
  );
}

export default FeaturedProducts;