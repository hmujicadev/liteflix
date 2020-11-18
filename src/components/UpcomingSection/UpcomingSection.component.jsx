import React from 'react'
import {array} from 'prop-types';
import {UpcomingContainer, UpcomingSubTitle} from './UpcomingSection.styles'
import CardMovie from '../global/CardMovie/CardMovie.component'

const UpcomingSection = ({upcomingMovies}) => {
  console.log(upcomingMovies)
  return (
    <UpcomingContainer>
      <UpcomingSubTitle font='20px'>
        Próximamente
      </UpcomingSubTitle>
    </UpcomingContainer>
  )
}

UpcomingSection.propTypes = {
    upcomingMovies: array,
}

export default UpcomingSection
