import React, { FC } from "react";
import styles from "./SidebarButton.module.css";

interface SidebarButtonProps {
  displayPage: string;
  displayText: string;
  isCurrentPage: boolean;
  onClick: Function;
  isDarkMode: boolean;
}

const SidebarButton: FC<SidebarButtonProps> = ({
  displayPage,
  displayText,
  isCurrentPage,
  onClick,
  isDarkMode,
}) => (
  <div className={styles.SidebarButton} data-testid="SidebarButton">
    <button
      onClick={() => onClick(displayPage)}
      className={`${isCurrentPage ? styles.currentPage : ""} ${
        isDarkMode ? styles.darkMode : ""
      }`}
    >
      {displayText}
    </button>
  </div>
);

export default SidebarButton;
