import React, { FC } from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => (
  <div className={styles.Sidebar} data-testid="Sidebar">
    Sidebar Component
  </div>
);

export default Sidebar;
