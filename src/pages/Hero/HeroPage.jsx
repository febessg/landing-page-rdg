import React from "react";
import styles from "./HeroPage.module.css";
import img1 from "../../assets/hero-img-1.jpeg";
import img2 from "../../assets/hero-img-2.jpeg";
import img3 from "../../assets/hero-img-3.jpeg";
import img4 from "../../assets/hero-img-4.jpeg";
import img5 from "../../assets/hero-img-5.jpeg";

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
      <div className={styles["hero-images-container"]}>
        {/* Substitua os src abaixo pelas imagens reais desejadas */}
        <img className={styles["hero-image"]} src={img1} alt="Obra 1" />
        <img className={styles["hero-image"]} src={img2} alt="Obra 2" />
        <img className={styles["hero-image"]} src={img3} alt="Obra 3" />
        <img className={styles["hero-image"]} src={img4} alt="Obra 4" />
        <img className={styles["hero-image"]} src={img5} alt="Obra 5" />
      </div>
    </section>
  );
};

export default HeroPage;
