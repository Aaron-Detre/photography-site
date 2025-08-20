import React, { FC } from "react";
import styles from "./AboutMe.module.css";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => (
  <div className={styles.AboutMe} data-testid="AboutMe">
    AboutMe Component
  </div>
);

export default AboutMe;
