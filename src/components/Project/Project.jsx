import React, { useContext } from 'react';
import styles from './Project.module.css';
import SizeContext from '../../context/sizeContext';

const Project = ({ image, title, heading }) => {
  const { size } = useContext(SizeContext);

  return (
    <div className={styles.project}>
      <img src={image} alt={title} className={styles.img} />
      <h5 className={`${size < 992 ? 'small' : 'medium'} ${styles.title}`}>{title}</h5>
      <h4 className={`${size < 992 ? 'meta-font' : 'large'} ${styles.heading}`}>{heading}</h4>
    </div>
  );
};

export default Project;
