import React, { FC } from 'react';
import styles from './SidebarButton.module.css';

interface SidebarButtonProps {}

const SidebarButton: FC<SidebarButtonProps> = () => (
  <div className={styles.SidebarButton} data-testid="SidebarButton">
    SidebarButton Component
  </div>
);

export default SidebarButton;
