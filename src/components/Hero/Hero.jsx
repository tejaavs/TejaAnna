import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Teja Anna</h1>
        <p className={styles.description}>
        Salesforce Administrator/Developer with 3 years of experience in managing and customizing Salesforce environments to enhance workflows, data accuracy, and user adoption. Skilled in CRM solutions, user training, and Salesforce best practices to drive business success.
        </p>
        <a href="mailto:tejaavs8@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/tejapic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
