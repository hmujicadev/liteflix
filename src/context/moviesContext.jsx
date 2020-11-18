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
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const loadMovies = async () => {
    try {
      setLoading(true);
      const featured = await getFeaturedMovie();
      const upcoming = await getUpcomingMovies();
      const popular = await getPopularMovies();
      const myMovies = getLocalMovies().length ? getLocalMovies(): [];
      setMovies({
        featured: featured.data.results[0],
        upcoming: upcoming.data.results.slice(0, 4),
        popular: popular.data.results.slice(0, 4),
        myMovies,
      });
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      return;
    }
  };
  return (
    <MoviesContext.Provider
      value={{
        movies,
        loading,
        loadMovies,
      }}>
      {children}
    </MoviesContext.Provider>
  );
};

MoviesProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MoviesProvider;
