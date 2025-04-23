import React from 'react';
import styles from '../styles/categories.module.css';
import circuitComponentsImage from '../assets/circuit-components.jpeg'; // Import images
import powerSuppliesImage from '../assets/power-supplies.jpeg';
import sensorsDetectorsImage from '../assets/sensors-detectors.jpeg';
import connectorsCablesImage from '../assets/connectors-cables.jpeg';

const categories = [
  { name: 'Circuit Components', image: circuitComponentsImage },
  { name: 'Power Supplies', image: powerSuppliesImage },
  { name: 'Sensors and Detectors', image: sensorsDetectorsImage },
  { name: 'Connectors and Cables', image: connectorsCablesImage },
];

function Categories() {
  return (
    <section className={styles.categories}>
      <h2>Categories</h2>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryItem}>
            <img src={category.image} alt={category.name} className={styles.categoryImage} />
            <p className={styles.categoryName}>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;