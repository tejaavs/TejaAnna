import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:tejaavs9@gmail.com">Email Me</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/teja-anna/">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("skills/salesforce.png")} alt="Github icon"   style={{ width: "50px", height: "40px" }}  />
          <a href="https://www.salesforce.com/trailblazer/teja-anna">trailblazer</a>
        </li>
      </ul>
    </footer>
  );
};
