import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Categories from './components/categories';
import QualityStatement from './components/qualityStatement';
import FeaturedProducts from './components/featuredProduct';
import BlogPosts from './components/blogPost';
import Subscription from './components/subscriptions';
import Footer from './components/footer';
import './App.css'; // You can add global styles here

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <QualityStatement />
      <FeaturedProducts />
      <BlogPosts />
      <Subscription />
      <Footer />
    </div>
  );
}

// eslint-disable-next-line
export default App;