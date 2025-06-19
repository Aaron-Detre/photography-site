import React, { FC } from "react";
import styles from "./PhotoSection.module.css";
import photoOrdering from "../../photoOrdering.json";
import PhotoColumn from "../PhotoColumn/PhotoColumn";

interface PhotoSectionProps {}

const PhotoSection: FC<PhotoSectionProps> = () => {
  const photosCol1 = photoOrdering.photoOrdering
    .filter((photo, index) => index % 2 === 0)
    .map((photo) => photo.name);
  const photosCol2 = photoOrdering.photoOrdering
    .filter((photo, index) => index % 2 !== 0)
    .map((photo) => photo.name);

  return (
    <div className={styles.PhotoSection} data-testid="PhotoSection">
      <PhotoColumn photoNames={photosCol1} />
      <PhotoColumn photoNames={photosCol2} />
    </div>
  );
};

export default PhotoSection;
