import React, { FC } from "react";
import styles from "./GearItem.module.css";

interface GearItemProps {
  photoUrl: string;
  photoAlt: string;
  name: string;
  text: string;
}

const GearItem: FC<GearItemProps> = ({ photoUrl, photoAlt, name, text }) => (
  <div className={styles.GearItem} data-testid="GearItem">
    <img className="gearPhoto" src={photoUrl} alt={photoAlt} />
    <div className="gearBlurb">
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  </div>
);

export default GearItem;
