import React, { useState, useEffect } from "react";
import styles from "./HeroCarousel.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function getSlidesPerView() {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 901) return 2;
  if (window.innerWidth < 1200) return 3;
  return 4;
}

const HeroCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const total = images.length;

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevImage = () => {
    setCurrent((prev) => (prev - slidesPerView + total) % total);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + slidesPerView) % total);
  };

  // Gera os índices das imagens visíveis
  const visibleImages = [];
  for (let i = 0; i < slidesPerView; i++) {
    visibleImages.push(images[(current + i) % total]);
  }

  return (
    <div className={styles["hero-carousel-container"]}>
      <button
        className={
          styles["carousel-arrow"] + " " + styles["carousel-arrow-left"]
        }
        onClick={prevImage}
        aria-label="Imagem anterior"
      >
        <FaChevronLeft size={32} />
      </button>
      {visibleImages.map((img, idx) => (
        <img
          key={idx}
          className={styles["hero-image"]}
          src={img.src}
          alt={img.alt || `Obra ${current + idx + 1}`}
        />
      ))}
      <button
        className={
          styles["carousel-arrow"] + " " + styles["carousel-arrow-right"]
        }
        onClick={nextImage}
        aria-label="Próxima imagem"
      >
        <FaChevronRight size={32} />
      </button>
    </div>
  );
};

export default HeroCarousel;
