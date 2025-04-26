import React, { useState } from 'react';
import img1 from '../assets/sample_elec_image.jpg'
import styles from '../styles/inventory.module.css'

export default function InventoryPage() {
      const inventoryData = [
    {
      id: 1,
      name: 'Circuit Board',
      description: 'High-quality circuit board for various applications.',
      category: 'Components',
      price: 15.99,
      stock: 100,
      image: img1, // Import your images
    },
    {
      id: 2,
      name: 'Power Supply Unit',
      description: 'Reliable power supply for industrial use.',
      category: 'Power Supplies',
      price: 49.99,
      stock: 50,
      image: img1,
    },
    {
      id: 3,
      name: 'Temperature Sensor',
      description: 'Accurate temperature sensor for monitoring.',
      category: 'Sensors',
      price: 9.99,
      stock: 150,
      image: img1,
    },
    {
      id: 4,
      name: 'Connector Cable',
      description: 'Durable connector cable for secure connections.',
      category: 'Cables',
      price: 5.99,
      stock: 200,
      image: img1,
    },
    {
      id: 5,
      name: 'Microcontroller',
      description: 'Powerful microcontroller for embedded systems.',
      category: 'Components',
      price: 29.99,
      stock: 75,
      image: img1,
    },
    {
      id: 6,
      name: 'Industrial Fan',
      description: 'Heavy-duty fan for cooling applications.',
      category: 'Power Supplies',
      price: 79.99,
      stock: 30,
      image: img1,
    },
    {
      id: 7,
      name: 'Pressure Sensor',
      description: 'High-precision pressure sensor for industrial control.',
      category: 'Sensors',
      price: 19.99,
      stock: 120,
      image: img1,
    },
    {
      id: 8,
      name: 'Ethernet Cable',
      description: 'Standard Ethernet cable for network connectivity.',
      category: 'Cables',
      price: 3.99,
      stock: 250,
      image: img1,
    },
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const allCategories = ['All Categories', ...new Set(inventoryData.map(item => item.category))];

  const filteredItems = inventoryData.filter(item => {
    const searchMatch =
      searchTerm === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch =
      selectedCategory === '' || item.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  return (
    <div className="container">
      <h1>Inventory</h1>
      <SearchBar onSearchChange={handleSearchChange} searchTerm={searchTerm} />
      <FilterBar
        categories={allCategories}
        onFilterChange={handleFilterChange}
        selectedCategory={selectedCategory}
      />
      <InventoryList items={filteredItems} />
      {/* <Pagination ... /> */} {/* Implement pagination if needed */}
    </div>
  );
}


function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className={styles.pagination}>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={currentPage === number ? styles.active : ''}
          >
            {number}
          </button>
        ))}
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  }

  function SearchBar({ onSearchChange, searchTerm }) {
    return (
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    );
  }

  function FilterBar({ categories, onFilterChange, selectedCategory }) {
    return (
      <div className={styles.filterBar}>
        <span>Filter by Category:</span>
        <select value={selectedCategory} onChange={onFilterChange}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    );
  }

  function InventoryList({ items }) {
    return (
      <div className={styles.list}>
        {items.map(item => (
          <InventoryItem key={item.id} item={item} />
        ))}
        {items.length === 0 && <p>No items found matching your criteria.</p>}
      </div>
    );
  }

  function InventoryItem({ item }) {
    return (
      <div className={styles.item}>
        <img src={item.image} alt={item.name} className={styles.image} />
        <div className={styles.details}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Stock: {item.stock}</p>
        </div>
      </div>
    );
  }

