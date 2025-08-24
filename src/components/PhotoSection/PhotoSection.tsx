import React, { FC, ReactElement } from "react";
import styles from "./PhotoSection.module.css";
import photoOrdering from "../../photoOrdering.json";
import PhotoColumn from "../PhotoColumn/PhotoColumn";

interface PhotoSectionProps {
  setCarousel: Function;
}

const PhotoSection: FC<PhotoSectionProps> = ({ setCarousel }) => {
  return (
    <div className={styles.PhotoSection}>
      <PhotoColumn
        photoNames={getPhotoColumn(true)}
        setCarousel={setCarousel}
      />
      <PhotoColumn
        photoNames={getPhotoColumn(false)}
        setCarousel={setCarousel}
      />
    </div>
  );
};

function getPhotoColumn(evenIndexed: boolean): string[] {
  return filterPhotos(evenIndexed).map((photo) => photo.name);
}

function filterPhotos(evenIndexed: boolean): { name: string }[] {
  return photoOrdering.filter((photo, index) => {
    let includePhoto: boolean;
    if (evenIndexed) {
      includePhoto = index % 2 === 0;
    } else {
      includePhoto = index % 2 !== 0;
    }
    return includePhoto;
  });
}

export default PhotoSection;
