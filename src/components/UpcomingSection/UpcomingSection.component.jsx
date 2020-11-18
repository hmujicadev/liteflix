import React from 'react'
import {array} from 'prop-types';

const UpcomingSection = ({upcomingMovies}) => {
  return (
    <div>
      Upcoming movies
    </div>
  )
}

UpcomingSection.propTypes = {
    upcomingMovies: array,
}

export default UpcomingSection
