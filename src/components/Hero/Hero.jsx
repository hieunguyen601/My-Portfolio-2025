import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Henry Nguyen</h1>
        <p className={styles.description}>
        I'm a passionate software engineer who builds fast, responsive, and user-friendly websites. Whether you need a personal portfolio, business site, or custom web app, I turn ideas into real, working products.
        </p>
      </div>
      <img
        src={getImageUrl("hero/mypicture.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
