import '@babel/polyfill';
import React from 'react';
import {render} from 'react-dom';
import MoviesProvider from './context/moviesContext';
import {GlobalStyles} from './styles/global';
import {ThemeProvider} from 'styled-components';
import Colors from './styles/colors';
import Home from './components/Home/Home.component';

const App = () => {
  return (
    <ThemeProvider theme={Colors}>
      <MoviesProvider>
        <GlobalStyles />
        <Home />
      </MoviesProvider>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('root'));
