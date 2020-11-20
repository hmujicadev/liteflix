import React from 'react';
import {array} from 'prop-types';
import CardMovie from '../global/CardMovie/CardMovie.component';
import {IMAGES_URL} from '../../constants/index';
import {
  PopularSectionWrapper,
  PopularSectionTitle,
  PopularCardWrapper,
} from './PopularSection.styles';

const PopularSection = ({popularMovies}) => {
  return (
    <PopularSectionWrapper>
      <PopularSectionTitle>Populares de Liteflix</PopularSectionTitle>
      <PopularCardWrapper>
        {popularMovies &&
          popularMovies.map(movie => {
            return (
              <CardMovie
                large
                key={movie.id}
                movie={movie}
                src={IMAGES_URL + 'original' + movie.poster_path}></CardMovie>
            );
          })}
      </PopularCardWrapper>
    </PopularSectionWrapper>
  );
};

PopularSection.propTypes = {
  popularMovies: array,
};

export default PopularSection;
