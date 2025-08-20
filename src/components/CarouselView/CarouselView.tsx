import React, { FC } from "react";
import styles from "./CarouselView.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import photoOrdering from "../../photoOrdering.json";

interface CarouselViewProps {
  currentPhoto: string;
  setCarousel: Function; // Set carousel to "" when exit carousel view
}

const CarouselView: FC<CarouselViewProps> = ({ currentPhoto, setCarousel }) => {
  return (
    <div className={styles.CarouselView}>
      <IoIosArrowBack
        onClick={() => setCarousel(changePhoto(currentPhoto, -1))}
      />
      <img
        src={`/pictures/${currentPhoto}`}
        width={window.screen.width * 0.9}
        onClick={() => setCarousel("")}
      />
      <IoIosArrowForward
        onClick={() => setCarousel(changePhoto(currentPhoto, 1))}
      />
    </div>
  );
};

function changePhoto(currentPhoto: string, indexChange: number): string {
  const currentIndex = photoOrdering.findIndex(
    (photo) => photo.name === currentPhoto
  );
  console.assert(currentIndex !== -1);
  console.assert(currentIndex !== 0 || indexChange !== -1);
  console.assert(
    currentIndex !== photoOrdering.length - 1 || indexChange !== 1
  );

  const nextPhoto = photoOrdering.at(currentIndex + indexChange)?.name ?? "";
  console.log(nextPhoto);
  return nextPhoto;
}

export default CarouselView;
