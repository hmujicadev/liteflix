import '@babel/polyfill';
import React from 'react';
import {render} from 'react-dom';
import MoviesProvider from './context/moviesContext';
import {GlobalStyles} from './styles/global';
import {ThemeProvider} from 'styled-components';
import Colors from './styles/colors';

const App = () => {
  return (
    <ThemeProvider theme={Colors}>
      <MoviesProvider>
        <GlobalStyles />
        <h1>Hola Mundo</h1>
        <h1>
          <strong>Hola mundo</strong>
        </h1>
        <h2>Roboto Slab</h2>
      </MoviesProvider>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById('root'));
