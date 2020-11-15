import '@babel/polyfill';
import React from 'react';

import {render} from 'react-dom';
import MoviesProvider from './context/moviesContext';

const App = () => {
  return (
    <MoviesProvider>
      <h1>Hola Mundo</h1>
    </MoviesProvider>
  );
};

render(<App />, document.getElementById('root'));
