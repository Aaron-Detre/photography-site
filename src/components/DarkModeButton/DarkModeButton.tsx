import React, { FC, ReactElement, useState } from "react";
import styles from "./DarkModeButton.module.css";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

interface DarkModeButtonProps {
  isDarkMode: boolean;
  setIsDarkMode: Function;
}

const DarkModeButton: FC<DarkModeButtonProps> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  let icon: ReactElement;
  if (isDarkMode) {
    icon = (
      <IoSunnyOutline
        className={styles.icon}
        onClick={() => setIsDarkMode(false)}
      />
    );
  } else {
    icon = (
      <IoMoonOutline
        className={styles.icon}
        onClick={() => setIsDarkMode(true)}
      />
    );
  }

  return <div className={styles.DarkModeButton}>{icon}</div>;
};

export default DarkModeButton;
