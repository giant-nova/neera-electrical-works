import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "../styles/industrialGallery.module.css";
import img1 from "../assets/sample_elec_image.jpg";

const products = [
  {
    id: 1,
    name: "Industrial Sensor",
    image: img1,
  },
  {
    id: 2,
    name: "Heavy Duty Relay",
    image: img1,
  },
  {
    id: 3,
    name: "PLC Controller",
    image: img1,
  },
  {
    id: 4,
    name: "Motor Driver",
    image: img1,
  },
  {
    id: 5,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 5,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 6,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 6,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 7,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 8,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 9,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 10,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 11,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 12,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 13,
    name: "Industrial Power Supply",
    image: img1,
  },
  {
    id: 14,
    name: "Industrial Power Supply",
    image: img1,
  }
];

export default function IndustrialGallery() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Industrial Electronics Components</h1>
      <div className={styles.carouselWrapper}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          className={styles.swiper}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className={styles.card}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <div className={styles.cardContent}>
                  <h2 className={styles.productName}>{product.name}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
