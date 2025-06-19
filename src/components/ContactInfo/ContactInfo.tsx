import React, { FC } from "react";
import styles from "./ContactInfo.module.css";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

interface ContactInfoProps {}

const ContactInfo: FC<ContactInfoProps> = () => (
  <div className={styles.ContactInfo} data-testid="ContactInfo">
    <a
      className="instagram"
      href="https://www.instagram.com/aaronscameraphotos/"
    >
      <FaInstagram />
    </a>
    <a className="email" href="mailto:aarondetre@gmail.com">
      <MdOutlineEmail />
    </a>
  </div>
);

export default ContactInfo;
