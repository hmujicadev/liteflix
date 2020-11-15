import React from 'react';
import Header from './Header/Header.component';
import {arrayOf, oneOfType, node} from 'prop-types';

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Layout;
