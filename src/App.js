import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Categories from './components/categories';
import FeaturedProducts from './components/featuredProduct';
import BlogPosts from './components/blogPost';
import Subscription from './components/subscriptions';
import IndustrialGallery from './components/industrialGallery';
import ContactPage from './components/contactPage';
import InventoryPage from './components/inventory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industrial-gallery" element={<IndustrialGallery />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/featured-products" element={<FeaturedProducts />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
      </Routes>
    </Router>
  );
}

// eslint-disable-next-line
export default App;