import React, { FC } from "react";
import styles from "./SidebarButton.module.css";

interface SidebarButtonProps {
  displayPage: string;
  displayText: string;
  isCurrentPage: boolean;
  onClick: Function;
}

const SidebarButton: FC<SidebarButtonProps> = ({
  displayPage,
  displayText,
  isCurrentPage,
  onClick,
}) => (
  <div className={styles.SidebarButton} data-testid="SidebarButton">
    <button
      onClick={() => onClick(displayPage)}
      className={isCurrentPage ? styles.currentPage : ""}
    >
      {displayText}
    </button>
  </div>
);

export default SidebarButton;
