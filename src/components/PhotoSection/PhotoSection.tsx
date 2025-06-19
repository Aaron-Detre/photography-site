import React, { FC } from "react";
import styles from "./PhotoSection.module.css";
import photoOrdering from "../../photoOrdering.json";

interface PhotoSectionProps {}

const PhotoSection: FC<PhotoSectionProps> = () => {
  const photos = photoOrdering.photoOrdering.map((photo) => (
    <img src={`/pictures/${photo.name}`} />
  ));

  return (
    <div className={styles.PhotoSection} data-testid="PhotoSection">
      {photos}
    </div>
  );
};

export default PhotoSection;
