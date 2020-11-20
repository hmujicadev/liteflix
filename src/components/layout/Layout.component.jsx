import React, {useContext} from 'react';
import Header from './Header/Header.component';
import {arrayOf, oneOfType, node} from 'prop-types';
import {MainLoaderWrapper, MainWrapper, AnimatePresenceStyled} from './Layout.styles';
import Loader from '../global/Loader/Loader.component';
import {MoviesContext} from '../../context/moviesContext';

const Layout = ({children}) => {
  const {loading} = useContext(MoviesContext);

  const mainVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresenceStyled>
      {loading ? (
        <MainLoaderWrapper key={'PageAnimation'} {...mainVariants}>
          <Loader />
        </MainLoaderWrapper>
      ) : (
        <>
          <Header />
          <MainWrapper>{children}</MainWrapper>
        </>
      )}
    </AnimatePresenceStyled>
  );
};

Layout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Layout;
