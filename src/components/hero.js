import styles from "../styles/hero.module.css"; // Assuming you're using module CSS
import HeroImg from "../assets/sample_elec_image.jpg"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>Empower Your Projects with Quality Electronics</h1>
        <p className={styles.subtitle}>Reliable components for industrial and retail solutions.</p>
        <button className={styles.exploreButton}>Explore Now</button>
      </div>

      <div className={styles.image}>
        <img src={HeroImg} alt="Electronic components" />
      </div>
    </section>
  );
}