import React from "react";
import styles from "./HeroPage.module.css";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import img1 from "../../assets/images/hero-img-1.jpeg";
import img2 from "../../assets/images/hero-img-2.jpeg";
import img3 from "../../assets/images/hero-img-3.jpeg";
import img4 from "../../assets/images/hero-img-4.jpeg";
import img5 from "../../assets/images/hero-img-5.jpeg";
import { FaWhatsapp } from "react-icons/fa";

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
      <HeroCarousel images={images} />
      <div className={styles["hero-description"]}>
        <h3>
          RDG Construções: Sua Visão, Nossa Realidade. Construindo o Futuro com
          Solidez.
        </h3>
        <p>
          Desde 2016, a RDG Construções LTDA é a sua parceira ideal para
          transformar ideias em realidade. Com sede em Florianópolis, somos
          referência em qualidade, segurança e inovação no setor de engenharia e
          construção civil. Conte com quem entende do assunto para construir o
          futuro.{" "}
        </p>
      </div>
      <button className={styles["whatsapp-btn"]}>
        <FaWhatsapp size={22} style={{ marginRight: 8 }} />
        Solicite um orçamento
      </button>
    </section>
  );
};

export default HeroPage;
