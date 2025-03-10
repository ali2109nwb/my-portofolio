import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleDownload = () => {
    window.open("../assets/hero/cv_NURALI.pdf", "_blank");
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nurali</h1>
        <p className={styles.description}>
          I am a Full Stack Developer with an educational background in
          Information Management. I have experience in building scalable website
          applications, developing RESTful APIs, and optimizing database and
          query performance using PostgreSQL and MySQL.
        </p>
        <div className={styles.buttonContainer}>
          <a
            href="mailto:nuraliali2109@email.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <button className={styles.downloadBtn} onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
