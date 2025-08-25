import React, { FC, ReactElement } from "react";
import styles from "./Sidebar.module.css";
import ContactInfo from "../ContactInfo/ContactInfo";
import SidebarButton from "../SidebarButton/SidebarButton";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

interface SidebarProps {
  currentPage: string;
  selectPage: Function;
  isDarkMode: boolean;
  setIsDarkMode: Function;
}

const Sidebar: FC<SidebarProps> = ({
  currentPage,
  selectPage,
  isDarkMode,
  setIsDarkMode,
}) => {
  const home = getSidebarButton("Home", currentPage, selectPage, isDarkMode);
  // const about = getSidebarButton("About", currentPage, selectPage);
  const gear = getSidebarButton("Gear", currentPage, selectPage, isDarkMode);
  return (
    <div className={styles.Sidebar} data-testid="Sidebar">
      <SidebarButton
        displayPage="Home"
        displayText="Aaron Detre"
        onClick={selectPage}
        isCurrentPage={false}
        isDarkMode={isDarkMode}
      />
      <br />
      {home}
      {/* {about} */}
      {gear}
      <ContactInfo isDarkMode={isDarkMode} />
      <div className={styles.darkModeButton}>
        <DarkModeButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </div>
    </div>
  );
};

function getSidebarButton(
  buttonName: string,
  currentPage: string,
  selectPage: Function,
  isDarkMode: boolean
): ReactElement {
  return (
    <SidebarButton
      displayPage={buttonName}
      displayText={buttonName}
      onClick={selectPage}
      isCurrentPage={currentPage === buttonName}
      isDarkMode={isDarkMode}
    />
  );
}

export default Sidebar;
