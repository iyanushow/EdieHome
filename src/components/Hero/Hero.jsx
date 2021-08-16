import React, { useContext } from 'react';
import Form from '../Form';
import styles from './Hero.module.css';
import SizeContext from '../../context/sizeContext';

const Hero = () => {
  const { size } = useContext(SizeContext);
  return (
    <>
      <div>
        <div className={`${styles.hero} container`}>
          <h4 className={`${size < 992 ? 'small' : 'meta-font'}`}>Unhappy with your website?</h4>
          <h3 className={`${size < 992 ? 'large' : 'desktop'} ${styles.heading} section-header`}>
            We create beautiful and fast web services
          </h3>
        </div>

        <figure className={styles.fig}>
          <img src='/heroImage.jpg' alt='hero-image' className={styles.heroImage} />
        </figure>

        <div className={`${styles.hero} container`}>
          <h3 className={`${size < 992 ? 'large' : 'desktop'}`}>Story, emotion and purpose</h3>
          <p className={`${size < 992 ? 'small' : 'meta-font'}`}>
            We help transform your ideas into real world applications that will outperform your
            toughest competition and help you achieve your strategic goals in short period of time.
          </p>

          <Form />
        </div>
      </div>
    </>
  );
};

export default Hero;
