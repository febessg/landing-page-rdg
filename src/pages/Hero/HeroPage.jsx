import React from "react";
import styles from "./HeroPage.module.css";
import HeroImages from "../../components/HeroImages/HeroImages";
import img1 from "../../assets/images/hero-img-1.jpeg";
import img2 from "../../assets/images/hero-img-2.jpeg";
import img3 from "../../assets/images/hero-img-3.jpeg";
import img4 from "../../assets/images/hero-img-4.jpeg";
import img5 from "../../assets/images/hero-img-5.jpeg";

const images = [
  { src: img1, alt: "Obra 1" },
  { src: img2, alt: "Obra 2" },
  { src: img3, alt: "Obra 3" },
  { src: img4, alt: "Obra 4" },
  { src: img5, alt: "Obra 5" },
];

const HeroPage = () => {
  return (
    <section className={styles["hero-page"]}>
      <div className={styles["hero-text-container"]}>
        <h1 className={styles["hero-title"]}>
          Construção Civil com Qualidade e Comprometimento
        </h1>
        <div className={styles["hero-subtitle"]}>
          Há mais de 8 anos entregando soluções completas em engenharia e
          construção civil, com <strong>qualidade</strong>,{" "}
          <strong>segurança</strong> e <strong>inovação</strong>.
        </div>
      </div>
      <HeroImages images={images} />
    </section>
  );
};

export default HeroPage;
