import React from "react";
import Navbar from './Navbar';
import Hero from './hero';
import Categories from './categories';
import QualityStatement from './qualityStatement';
import FeaturedProducts from './featuredProduct';
import BlogPosts from './blogPost';
import Subscription from './subscriptions';
import Footer from './footer';
import homestyle from '../styles/home.module.css'
import { useState, useEffect } from "react";


// function Home() {
//     return (
//     <div className={homestyle.home}>
//        <Navbar />
//        <Hero />
//        <Categories />
//        <QualityStatement />
//        <FeaturedProducts />
//        <BlogPosts />
//        <Subscription />
//        <Footer />
//      </div>
//     );
// }


import styles from '../styles/home.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [text, setText] = useState('');
  const fullText = "Supplying Excellence in Industrial Electronics";
  const navigate = useNavigate();
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(timer);
      }
    }, 40); // Speed of typing (milliseconds)

    return () => clearInterval(timer);
  }, []);
  return (
    <div className={styles.homepage}>
      {/* NavBar */}
      <Navbar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{text}</h1>
          <p className={styles.fadeInSubtext}>Reliable components for industrial and retail solutions.</p>
          <Link to="/industrial-gallery" className={styles.heroButton}>Explore Products</Link>
        </div>
      </section>


      {/* Categories Carousel */}
      <section className={styles.categories}>
        <h2>Our Categories</h2>
        <Categories/>
      </section>

      {/* Industries We Serve */}
      <section className={styles.industries}>
        <h2>Industries We Serve</h2>
        <div className={styles.industryGrid}>
          <div className={styles.industryItem}>
            <span>🏭</span>
            <h3>Manufacturing</h3>
            <p>Precision motors and panels.</p>
          </div>
          <div className={styles.industryItem}>
            <span>⚡</span>
            <h3>Energy Sector</h3>
            <p>High-voltage switchgears.</p>
          </div>
          <div className={styles.industryItem}>
            <span>🚜</span>
            <h3>Construction</h3>
            <p>Heavy-duty wiring systems.</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className={styles.about}>
        <h2>About Neera Electrical Works</h2>
        <p>With over 15 years of experience, we supply high-quality industrial electronics across India with fast delivery and fair pricing.</p>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyUs}>
        <h2>Why Choose Us</h2>
        <div className={styles.whyGrid}>
          <div className={styles.whyItem}>✅ Genuine Products</div>
          <div className={styles.whyItem}>📦 Fast Delivery</div>
          <div className={styles.whyItem}>🏆 15+ Years Experience</div>
          <div className={styles.whyItem}>📞 24/7 Support</div>
        </div>
      </section>

      {/* Brands */}
      <section className={styles.brands}>
        <h2>Our Trusted Brands</h2>
        <div className={styles.brandLogos}>
          {/* Dummy brand logos */}
          <img src="/assets/brand1.png" alt="Brand 1" />
          <img src="/assets/brand2.png" alt="Brand 2" />
          <img src="/assets/brand3.png" alt="Brand 3" />
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ready for Bulk Orders?</h2>
        <Link to="/contact-page" className={styles.ctaButton}>Contact Us</Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;