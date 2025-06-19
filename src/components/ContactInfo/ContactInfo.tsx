import React, { FC } from "react";
import styles from "./ContactInfo.module.css";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";

interface ContactInfoProps {}

const ContactInfo: FC<ContactInfoProps> = () => (
  <div className={styles.ContactInfo} data-testid="ContactInfo">
    <a href="https://www.instagram.com/aaronscameraphotos/">
      <FaInstagram />
    </a>
    <a href="mailto:aarondetre@gmail.com">
      <MdOutlineEmail />
    </a>
    <a href="https://github.com/Aaron-Detre">
      <VscGithub />
    </a>
  </div>
);

export default ContactInfo;
