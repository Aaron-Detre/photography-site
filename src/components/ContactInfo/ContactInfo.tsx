import React, { FC } from 'react';
import styles from './ContactInfo.module.css';

interface ContactInfoProps {}

const ContactInfo: FC<ContactInfoProps> = () => (
  <div className={styles.ContactInfo} data-testid="ContactInfo">
    ContactInfo Component
  </div>
);

export default ContactInfo;
