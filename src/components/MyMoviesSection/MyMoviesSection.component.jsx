import React from 'react';
import {array} from 'prop-types';
import {
  MyMoviesSectionWrapper,
  MyMoviesSectionTitle,
  MyMoviesCardWrapper,
} from './MyMoviesSection.styles';
import CardMovie from '../global/CardMovie/CardMovie.component';

const MyMoviesSection = ({myMovies}) => {
  return (
    <>
      {myMovies.length? (
        <MyMoviesSectionWrapper>
          <MyMoviesSectionTitle>Mis Películas</MyMoviesSectionTitle>
          <MyMoviesCardWrapper>
            {myMovies &&
              myMovies.map((movie, index) => {
                return <CardMovie key={movie.movieName + index} movie={movie} src={movie.image} />;
              })}
          </MyMoviesCardWrapper>
        </MyMoviesSectionWrapper>
      ):null}
    </>
  );
};

MyMoviesSection.propTypes = {
  myMovies: array,
};

export default MyMoviesSection;
