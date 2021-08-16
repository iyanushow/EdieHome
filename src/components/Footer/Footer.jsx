import React from 'react';
import Form from '../Form';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <div className='layout__container'>
        <div className={styles.content}>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Our Works</li>
            <li>Clients</li>
            <li>Contact</li>
          </ul>

          <div className={styles.socials}>
            <h1>Edie</h1>
            <FontAwesomeIcon icon={faInstagramSquare} size='3x' />
            <FontAwesomeIcon icon={faLinkedin} size='3x' />
            <FontAwesomeIcon icon={faTwitterSquare} size='3x' />
          </div>
          <Form />
        </div>
        <p className='small'>
          created by <a href='https://github.com/iyanushow'>iyanuoluwa sowande</a>- devChallenge.io
        </p>
      </div>
    </footer>
  );
};

export default Footer;
