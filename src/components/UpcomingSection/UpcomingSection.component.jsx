import React from 'react'
import {array} from 'prop-types';
import {UpcomingContainer, UpcomingSubTitle} from './UpcomingSection.styles'

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
