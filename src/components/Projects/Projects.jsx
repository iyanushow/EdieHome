import React, { useContext } from 'react';
import Project from '../Project/Project';
import styles from './Projects.module.css';
import SizeContext from '../../context/sizeContext';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = ({ children }) => {
  const { size } = useContext(SizeContext);

  return (
    <section className='section' id='projects'>
      <div className='container'>
        <h3 className={`${size < 992 ? 'large' : 'tablet'} section-header`}>
          Good design means good business
        </h3>
      </div>
      <div className='flex'>
        {children.map((card) => (
          <Project key={card.id} {...card} />
        ))}
      </div>
      <a className={`${styles.moreBtn} meta-font`} href='#projects'>
        see more
        <FontAwesomeIcon icon={faArrowRight} color='#2d9cbd' />
      </a>
    </section>
  );
};

export default Projects;
