import React, { FC } from 'react';
import styles from './Photo.module.css';

interface PhotoProps {}

const Photo: FC<PhotoProps> = () => (
  <div className={styles.Photo} data-testid="Photo">
    Photo Component
  </div>
);

export default Photo;
