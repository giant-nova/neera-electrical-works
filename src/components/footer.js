import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
  const googleMapEmbedCode = `<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.5725497242142!2d75.93636958449316!3d30.87287677688655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9dbdb87b6ed3%3A0xf5d5741f72a88d1e!2sneeraelectricalworks!5e0!3m2!1sen!2sin!4v1745436150135!5m2!1sen!2sin"
  width="400" height="300"
  style="border:0;" allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.industrial}>Neera Electrical Works</div>
        <div className={styles.connect}>
          <h3>Connect</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        <div className={styles.resources}>
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Track An Order</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className={styles.aboutUs}>
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div className={styles.mapContainer}>
          {/* Dangerously set the HTML for the Google Map */}
          <div dangerouslySetInnerHTML={{ __html: googleMapEmbedCode }} />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>Made with ❤️ by Kunal</p>
      </div>
    </footer>
  );
}

export default Footer;