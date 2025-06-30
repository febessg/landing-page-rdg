import React from "react";
import styles from "./HeroPage.module.css";
import HeroImages from "../../components/HeroImages/HeroImages";

const images = [
  { src: require("../../assets/images/hero-image-1.jpg"), alt: "Obra 1" },
  { src: require("../../assets/images/hero-image-2.jpg"), alt: "Obra 2" },
  { src: require("../../assets/images/hero-image-3.jpg"), alt: "Obra 3" },
  { src: require("../../assets/images/hero-image-4.jpg"), alt: "Obra 4" },
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
