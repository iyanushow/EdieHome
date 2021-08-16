import React, { Children } from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return <div className='layout__container'>{children}</div>;
};

export default Layout;
