import React, { FC } from "react";
import styles from "./Sidebar.module.css";
import ContactInfo from "../ContactInfo/ContactInfo";
import SidebarButton from "../SidebarButton/SidebarButton";

interface SidebarProps {
  selectPage: Function;
}

const Sidebar: FC<SidebarProps> = ({ selectPage }) => (
  <div className={styles.Sidebar} data-testid="Sidebar">
    <SidebarButton name="home" onClick={selectPage} />
    <SidebarButton name="about" onClick={selectPage} />
    <SidebarButton name="gear" onClick={selectPage} />
    <ContactInfo />
  </div>
);

export default Sidebar;
