import styles from './Nav.module.css';
import React, { useContext, useState } from 'react';
import SizeContext from '../../context/sizeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const { size } = useContext(SizeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${styles.container} ${styles.flex} ${styles.header}`} id='home'>
      <p>Edie</p>
      {size < 768 && !isOpen && (
        <button className={styles.button}>
          <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} size='2x' />
        </button>
      )}
      <nav className={`${styles.nav} ${isOpen && styles.open}`}>
        {size < 768 && (
          <button className={styles.button}>
            <FontAwesomeIcon icon={faTimes} onClick={() => setIsOpen(!isOpen)} size='2x' />
          </button>
        )}
        <ul className={`${styles.flex}`}>
          <li>
            {' '}
            <a href='#home'> Home</a>
          </li>
          <li>
            {' '}
            <a href='#services'> Services</a>
          </li>
          <li>
            {' '}
            <a href='#projects'> Our Works</a>
          </li>
          <li>
            {' '}
            <a href='#'> Clients</a>
          </li>
          <li>
            {' '}
            <a href='#footer'> Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
