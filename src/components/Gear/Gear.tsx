import React, { FC } from 'react';
import styles from './Gear.module.css';

interface GearProps {}

const Gear: FC<GearProps> = () => (
  <div className={styles.Gear} data-testid="Gear">
    Gear Component
  </div>
);

export default Gear;
