import endpoints from '../api';
import axios from 'axios';

const LOCAL_MOVIES = 'LOCAL_MOVIES';

export const getFeaturedMovie = async () => {
  return await axios.get(endpoints.featuredMovie).catch(err => {
    throw new Error(err.response.data.status_message);
  });
};

export const getUpcomingMovies = async () => {
  return await axios.get(endpoints.upcomingMovies).catch(err => {
    throw new Error(err.response.data.status_message);
  });
};

export const getPopularMovies = async () => {
  return await axios.get(endpoints.popularMovies).catch(err => {
    throw new Error(err.response.data.status_message);
  });
};

export const saveLocalMovies = movies => {
  localStorage.setItem(LOCAL_MOVIES, JSON.stringify(movies));
};

export const getLocalMovies = () => {
  let localMovies = JSON.parse(localStorage.getItem(LOCAL_MOVIES));
  return localMovies ? localMovies : [];
};
