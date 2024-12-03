import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Professional portrait"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/salesforceIcon.png")} alt="Salesforce icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Salesforce Administrator/Developer</h3><br></br>
              <p>
                Experienced in managing Salesforce environments, including
                customization, data management, and user support. Skilled in
                Apex, SOQL, Lightning Web Components, and process automation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/codeIcon.png")} alt="Code icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Technical Expertise</h3> <br></br>
              <p>
                Proficient in integrating Salesforce with third-party
                applications and developing custom solutions using Apex, Visualforce, and
                Lightning Web Components to optimize workflows and improve
                system performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/certificationIcon.png")} alt="Certification icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Certified Professional</h3><br></br>
              <p>
                Certified Salesforce Administrator and Platform Developer I,
                with a proven track record of delivering impactful CRM solutions
                for business success.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
