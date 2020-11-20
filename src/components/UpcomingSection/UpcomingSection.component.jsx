import React from 'react';
import {array} from 'prop-types';
import {UpcomingContainer, UpcomingSubTitle, UpcomingCardWrapper} from './UpcomingSection.styles';
import CardMovie from '../global/CardMovie/CardMovie.component';

import {IMAGES_URL} from '../../constants';
const UpcomingSection = ({upcomingMovies}) => {
  
  const variantsSection = {
    initial: {
      opacity: 0,      
    },
    visible: {
      opacity: 1,
        transition: { duration: 2},
     
    },
  };
  const cardVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    },
    initial: { opacity: 0, scale: 1.1 },
  }

  return (
    <UpcomingContainer>
      <UpcomingSubTitle animate={'visible'} initial={'initial'} variants={variantsSection}>Próximamente</UpcomingSubTitle>
      <UpcomingCardWrapper >
        {upcomingMovies &&
          upcomingMovies.map((movie) => {
            return (
              <CardMovie
                key={movie.id}
                movie={movie}
                src={IMAGES_URL + '/w300' + movie.backdrop_path}
                variants={cardVariants}
                initial='initial'
                animate='visible'
                 ></CardMovie>
            );
          })}
      </UpcomingCardWrapper>
    </UpcomingContainer>
  );
};

UpcomingSection.propTypes = {
  upcomingMovies: array,
};

export default UpcomingSection;
