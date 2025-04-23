import React from 'react';
import styles from '../styles/blogpost.module.css';
import blogPost1Image from '../assets/blogpost1.png'; // Import blog post images
import blogPost2Image from '../assets/blogpost2.jpeg';

const blogPosts = [
  {
    title: 'How to Choose the right components for your projects',
    image: blogPost1Image,
    link: '#',
  },
  {
    title: 'Installation guide for industrial sensors',
    image: blogPost2Image,
    link: '#',
  },
];

function BlogPosts() {
  return (
    <section className={styles.blog}>
      <h2>Featured</h2>
      <div className={styles.grid}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.blogPostItem}>
            <a href={post.link}>
              <img src={post.image} alt={post.title} className={styles.blogPostImage} />
              <p className={styles.blogPostTitle}>{post.title}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPosts;