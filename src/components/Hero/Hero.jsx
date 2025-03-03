import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  const handleDownload = () => {
    window.open("../assets/hero/cvku.pdf", "_blank");
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nurali</h1>
        <p className={styles.description}>
          I am Nurali, a graduate in Informatics Management with experience in
          IT Support, To transition into Web Development, I have built skills in
          Frontend and Backend Development through mini projects. I developed a
          frontend using PHP, ReactJS, HTML, CSS, and JavaScript, while on the
          backend, I implemented JWT authentication and CRUD features with
          Node.js and Express.
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
