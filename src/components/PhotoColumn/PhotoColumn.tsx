import React, { FC } from "react";
import styles from "./PhotoColumn.module.css";

interface PhotoColumnProps {
  photoNames: string[];
}

const PhotoColumn: FC<PhotoColumnProps> = ({ photoNames }) => (
  <div className={styles.PhotoColumn} data-testid="PhotoColumn">
    {photoNames.map((photoName) => (
      <img src={`/pictures/${photoName}`} />
    ))}
  </div>
);

export default PhotoColumn;
