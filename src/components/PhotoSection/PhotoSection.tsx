import React, { FC } from 'react';
import styles from './PhotoSection.module.css';

interface PhotoSectionProps {}

const PhotoSection: FC<PhotoSectionProps> = () => (
  <div className={styles.PhotoSection} data-testid="PhotoSection">
    PhotoSection Component
  </div>
);

export default PhotoSection;
