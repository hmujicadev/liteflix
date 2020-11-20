import React, {useContext} from 'react';
import Header from './Header/Header.component';
import {arrayOf, oneOfType, node} from 'prop-types';
import {MainLoaderWrapper,MainWrapper} from './Layout.styles';
import Loader from '../global/Loader/Loader.component';
import {MoviesContext} from '../../context/moviesContext';

const Layout = ({children}) => {
  const {loading} = useContext(MoviesContext);

  return (
    <>
      {loading ? (
        <MainLoaderWrapper>
          <Loader />
        </MainLoaderWrapper>
      ) : (
        <>
          <Header />
          <MainWrapper>{children}</MainWrapper>
        </>
      )}
    </>
  );
};

Layout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Layout;
