import React from "react";
import styles from "./HeroImages.module.css";

const HeroImages = ({ images }) => {
  return (
    <div className={styles["hero-images-container"]}>
      {images.map((img, idx) => (
        <img
          key={idx}
          className={styles["hero-image"]}
          src={img.src}
          alt={img.alt || `Obra ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroImages;
