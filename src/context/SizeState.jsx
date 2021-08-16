import React, { useReducer, useEffect } from 'react';
import SizeContext from './sizeContext';
import sizeReducer from './sizeReducer';

const SizeState = ({ children }) => {
  const size = window.innerWidth;

  const [state, dispatch] = useReducer(sizeReducer, size);

  useEffect(() => {
    window.addEventListener('resize', setSize);
  }, []);

  const setSize = () => {
    dispatch({ type: 'SET_SIZE', payload: window.innerWidth });
  };

  return (
    <SizeContext.Provider
      value={{
        size: state,
        setSize,
      }}
    >
      {children}
    </SizeContext.Provider>
  );
};

export default SizeState;
