import React, {createContext, useState, useEffect} from 'react';
import {arrayOf, oneOfType, node} from 'prop-types';
import {
  getFeaturedMovie,
  getUpcomingMovies,
  getPopularMovies,
  saveLocalMovies,
  getLocalMovies,
} from '../services';

export const MoviesContext = createContext();

/* Componente principal, para manejo del estado por context */
const MoviesProvider = ({children}) => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const loadMovies = async () => {
    saveLocalMovies({
      title: 'Los caballos paraliticos',
      actors: ['mmoreno', 'nespina', 'osanchez'],
    });
    try {
      let movies = {
        features: await getFeaturedMovie(),
        upcomming: await getUpcomingMovies(),
        popular: await getPopularMovies(),
        myMovies: getLocalMovies(),
      };
      console.log(movies);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    /* loadMovies(); */
  }, []);

  return <MoviesContext.Provider value={{movies: 'test'}}>{children}</MoviesContext.Provider>;
};

MoviesProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MoviesProvider;
