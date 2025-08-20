import React, { FC } from "react";
import styles from "./PhotoSection.module.css";
import photoOrdering from "../../photoOrdering.json";
import PhotoColumn from "../PhotoColumn/PhotoColumn";

interface PhotoSectionProps {
  setCarousel: Function;
}

const PhotoSection: FC<PhotoSectionProps> = ({ setCarousel }) => {
  const photoCol1 = getPhotoColumn(true);
  const photoCol2 = getPhotoColumn(false);

  return (
    <div className={styles.PhotoSection} data-testid="PhotoSection">
      <PhotoColumn photoNames={photoCol1} setCarousel={setCarousel} />
      <PhotoColumn photoNames={photoCol2} setCarousel={setCarousel} />
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
