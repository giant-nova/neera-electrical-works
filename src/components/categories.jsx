// CategoryCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/categories.module.css";
import { Link } from "react-router-dom";
import sampleImg from '../assets/sample_elec_image.jpg';

const categories = [
  {
    id: 1,
    name: "Industrial Electronic Components",
    image: sampleImg,
    link: "/industrial-gallery",
  },
  {
    id: 2,
    name: "Industrial Heaters",
    image: sampleImg,
    link: "/industrial-gallery",
  },
  {
    id: 3,
    name: "Insulated wires and cables",
    image: sampleImg,
    link: "/industrial-gallery",
  },
  {
    id: 4,
    name: "MCBs, Relay and contractors",
    image: sampleImg,
    link: "/industrial-gallery",
  },
];

export default function CategoryCarousel() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className={styles.swiper}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={category.image} alt={category.name} className={styles.image} />
                <Link to={'/inventory'} className={styles.overlay}>
                  {category.name}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
