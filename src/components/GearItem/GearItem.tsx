import React, { FC } from "react";
import styles from "./GearItem.module.css";

interface GearItemProps {
  photoUrl: string;
  photoAlt: string;
  name: string;
  text: string;
  photoFirst: boolean;
  photoWidth?: string;
}

const GearItem: FC<GearItemProps> = ({
  photoUrl,
  photoAlt,
  name,
  text,
  photoFirst,
  photoWidth,
}) => {
  const photo = <img src={photoUrl} alt={photoAlt} width={photoWidth} />;
  const textArea = (
    <div>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );

  return (
    <div className={styles.GearItem} data-testid="GearItem">
      {photoFirst ? photo : textArea}
      {photoFirst ? textArea : photo}
    </div>
  );
};

export default GearItem;
