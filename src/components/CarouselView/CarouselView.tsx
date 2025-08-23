import React, { FC } from "react";
import styles from "./CarouselView.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import photoOrdering from "../../photoOrdering.json";

interface CarouselViewProps {
  currentPhoto: string;
  setCarousel: Function;
}

const CarouselView: FC<CarouselViewProps> = ({ currentPhoto, setCarousel }) => {
  const currentPhotoIndex = findPhotoIndex(currentPhoto);

  const isLeftArrowActive = currentPhotoIndex !== 0;
  const isRightArrowActive = currentPhotoIndex !== photoOrdering.length - 1;

  return (
    <div className={styles.CarouselView}>
      <RxCross2
        className={styles.exit}
        onClick={() => updateCarousel(setCarousel, "")}
      />
      <div className={styles.flexContainer}>
        <IoIosArrowBack
          className={getArrowClassNames(isLeftArrowActive, true)}
          onClick={() => {
            if (isLeftArrowActive) {
              updateCarousel(setCarousel, changePhoto(currentPhotoIndex, -1));
            }
          }}
        />
        <img
          src={`/pictures/${currentPhoto}`}
          style={{
            maxWidth: window.innerWidth * 0.85,
            maxHeight: window.innerHeight * 0.9,
          }}
        />
        <IoIosArrowForward
          className={getArrowClassNames(isRightArrowActive, false)}
          onClick={() => {
            if (isRightArrowActive) {
              updateCarousel(setCarousel, changePhoto(currentPhotoIndex, 1));
            }
          }}
        />
      </div>
    </div>
  );
};

function findPhotoIndex(photoName: string): number {
  return photoOrdering.findIndex((photo) => photo.name === photoName);
}

function changePhoto(currentPhotoIndex: number, indexChange: number): string {
  console.assert(currentPhotoIndex !== -1);
  console.assert(currentPhotoIndex !== 0 || indexChange !== -1);
  console.assert(
    currentPhotoIndex !== photoOrdering.length - 1 || indexChange !== 1
  );

  const nextPhoto =
    photoOrdering.at(currentPhotoIndex + indexChange)?.name ?? "";
  console.log(nextPhoto);
  return nextPhoto;
}

function updateCarousel(setCarousel: Function, value: string): void {
  setCarousel(value);
}

function getArrowClassNames(isArrowActive: boolean, isLeft: boolean): string {
  return `${styles.arrow} ${
    isArrowActive ? styles.arrowActive : styles.arrowInactive
  } ${isLeft ? styles.leftArrow : styles.rightArrow}`;
}

export default CarouselView;
