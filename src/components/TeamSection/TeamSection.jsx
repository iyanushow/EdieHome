import React from 'react';
import styles from './TeamSection.module.css';
import Team from '../Team/Team';

const TeamSection = ({ children, teamlead }) => {
  return (
    <section className={`${styles.team}`}>
      <div className={styles.teamMembers}>
        <div className={styles.details}>
          <h3 className={`${styles.heading} meta-font`}>Meet the team</h3>
          <h3 className={styles.metaText}>We are a chilled and a laidback team</h3>
          <p className={`${styles.smallText} medium`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className={styles.teamImages}>
          {children.map((member) => (
            <Team key={member.id} {...member} />
          ))}
        </div>
      </div>
      <blockquote className='large'>
        Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and
        talented team.
      </blockquote>
      <Team key={teamlead.id} {...teamlead} />

      {/* <Team members={children} /> */}
    </section>
  );
};

export default TeamSection;
