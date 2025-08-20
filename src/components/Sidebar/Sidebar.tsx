import React, { FC, ReactElement } from "react";
import styles from "./Sidebar.module.css";
import ContactInfo from "../ContactInfo/ContactInfo";
import SidebarButton from "../SidebarButton/SidebarButton";

interface SidebarProps {
  currentPage: string;
  selectPage: Function;
}

const Sidebar: FC<SidebarProps> = ({ currentPage, selectPage }) => {
  const home = getSidebarButton("Home", currentPage, selectPage);
  // const about = getSidebarButton("About", currentPage, selectPage);
  const gear = getSidebarButton("Gear", currentPage, selectPage);
  return (
    <div className={styles.Sidebar} data-testid="Sidebar">
      <SidebarButton
        displayPage="Home"
        displayText="Aaron Detre"
        onClick={selectPage}
        isCurrentPage={false}
      />
      <br />
      {home}
      {/* {about} */}
      {gear}
      <ContactInfo />
    </div>
  );
};

function getSidebarButton(
  buttonName: string,
  currentPage: string,
  selectPage: Function
): ReactElement {
  return (
    <SidebarButton
      displayPage={buttonName}
      displayText={buttonName}
      onClick={selectPage}
      isCurrentPage={currentPage === buttonName}
    />
  );
}

export default Sidebar;
