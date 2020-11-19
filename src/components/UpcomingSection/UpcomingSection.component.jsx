import React from 'react';
import {array} from 'prop-types';
import {UpcomingContainer, UpcomingSubTitle, UpcomingCardWrapper} from './UpcomingSection.styles';
import CardMovie from '../global/CardMovie/CardMovie.component';

import {IMAGES_URL} from '../../constants';
const UpcomingSection = ({upcomingMovies}) => {
  console.log('Hector', upcomingMovies);
  return (
    <UpcomingContainer>
      <UpcomingSubTitle>Próximamente</UpcomingSubTitle>
      <UpcomingCardWrapper>
        {upcomingMovies &&
          upcomingMovies.map(movie => {
            return <CardMovie key={movie.id} movie={movie} src={IMAGES_URL +'/w300' + movie.backdrop_path}></CardMovie>;
          })}
      </UpcomingCardWrapper>
    </UpcomingContainer>
  );
};

UpcomingSection.propTypes = {
  upcomingMovies: array,
};

export default UpcomingSection;
