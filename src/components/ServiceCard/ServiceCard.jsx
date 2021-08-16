import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ heading, content, icon, color }) => {
  return (
    <div className={styles.card}>
      <span className={styles.span} style={{ background: color }}>
        <FontAwesomeIcon icon={icon} color='#fff' size='2x' />
      </span>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{content}</p>
      <button className={styles.button}>get started</button>
    </div>
  );
};

export default ServiceCard;
