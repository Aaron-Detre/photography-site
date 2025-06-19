import React, { FC } from "react";
import styles from "./Sidebar.module.css";
import ContactInfo from "../ContactInfo/ContactInfo";
import SidebarButton from "../SidebarButton/SidebarButton";

interface SidebarProps {
  selectPage: Function;
}

const Sidebar: FC<SidebarProps> = ({ selectPage }) => (
  <div className={styles.Sidebar} data-testid="Sidebar">
    <SidebarButton name="Aaron Detre" onClick={selectPage} />
    <br />
    <SidebarButton name="About" onClick={selectPage} />
    <SidebarButton name="Gear" onClick={selectPage} />
    <ContactInfo />
  </div>
);

export default Sidebar;
