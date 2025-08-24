import React, { FC, ReactElement } from "react";
import styles from "./PhotoColumn.module.css";

interface PhotoColumnProps {
  photoNames: string[];
  setCarousel: Function;
}

const PhotoColumn: FC<PhotoColumnProps> = ({ photoNames, setCarousel }) => (
  <div className={styles.PhotoColumn}>
    {photoNames.map((photoName) => (
      <img
        key={photoName}
        src={`/pictures/${photoName}`}
        onClick={() => setCarousel(photoName)}
      />
    ))}
  </div>
);

export default PhotoColumn;
