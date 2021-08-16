import React, { useContext } from 'react';
import ServiceCard from '../ServiceCard';
import SizeContext from '../../context/sizeContext';

const Services = ({ children }) => {
  const { size } = useContext(SizeContext);

  return (
    <section className='section' id='services'>
      <div className='container'>
        <h3 className={`${size < 992 ? 'large' : 'tablet'} section-header`}>
          we offer high demand services
        </h3>
      </div>
      <div className='flex'>
        {children.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Services;
