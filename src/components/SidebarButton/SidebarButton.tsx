import React, { FC } from "react";
import styles from "./SidebarButton.module.css";

interface SidebarButtonProps {
  name: string;
  onClick: Function;
}

const SidebarButton: FC<SidebarButtonProps> = ({ name, onClick }) => (
  <div className={styles.SidebarButton} data-testid="SidebarButton">
    <button onClick={() => onClick(name)}>{name}</button>
  </div>
);

export default SidebarButton;
