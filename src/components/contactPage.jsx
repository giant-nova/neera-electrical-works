// ContactPage.jsx
import React from "react";
import styles from "../styles/contactPage.module.css";
import UserForm from "./userForm"

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>We would love to hear from you!</p>

      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <h2>Business Name:</h2>
          <p>Neera Electrical Works</p>
        </div>

        <div className={styles.infoItem}>
          <img src="" alt="profile"></img>
          <h2>Owner:</h2>
          <p>Mr. Raj Kumar</p>
        </div>

        <div className={styles.infoItem}>
          <h2>Physical Address:</h2>
          <p>Plot No. 45, Sector 10, Industrial Area, New Delhi, India - 110045</p>
        </div>

        <div className={styles.infoItem}>
          <h2>GST No.:</h2>
          <p>07ABCDE1234F1Z5</p>
        </div>

        <div className={styles.infoItem}>
          <h2>Contact No.:</h2>
          <p>+91 98765 43210</p>
        </div>

        <div className={styles.infoItem}>
          <h2>Email Address:</h2>
          <p>contact@neeraelectricals.com</p>
        </div>
      </div>

      <div className={styles.mapSection}>
        <iframe
          title="Business Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.5725497242142!2d75.93636958449316!3d30.87287677688655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9dbdb87b6ed3%3A0xf5d5741f72a88d1e!2sneeraelectricalworks!5e0!3m2!1sen!2sin!4v1745436150135!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <UserForm />
      </div>
    </div>
  );
}
