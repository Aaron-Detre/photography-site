import React, { FC } from "react";
import styles from "./ContactInfo.module.css";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";

interface ContactInfoProps {
  isDarkMode: boolean;
}

const ContactInfo: FC<ContactInfoProps> = ({ isDarkMode }) => {
  const darkModeClass = isDarkMode ? styles.darkMode : "";

  return (
    <div
      className={`${styles.ContactInfo} ${darkModeClass}`}
      data-testid="ContactInfo"
    >
      <a
        className={darkModeClass}
        href="https://www.instagram.com/aaronscameraphotos/"
      >
        <FaInstagram />
      </a>
      <a className={darkModeClass} href="mailto:aarondetre@gmail.com">
        <MdOutlineEmail />
      </a>
      <a className={darkModeClass} href="https://github.com/Aaron-Detre">
        <VscGithub />
      </a>
    </div>
  );
};

export default ContactInfo;
