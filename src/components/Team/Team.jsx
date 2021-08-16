import React from 'react';
import styles from './Team.module.css';

const Team = ({ id, img, name, tagline, type }) => {
  if (type === 'teamlead') {
    return (
      <div className={styles.teamlead}>
        <figure className={styles.figure}>
          <img src={img} alt={`teammember__${id}`} className={styles.img} />
        </figure>
        <div className={styles.details}>
          <h3 className='large'>{name}</h3>
          <p className='meta-font'>{tagline}</p>
        </div>
      </div>
    );
  }
  return (
    <figure className={styles.figure}>
      <img src={img} alt={`teammember__${id}`} className={styles.img} />
    </figure>
  );
};

export default Team;
