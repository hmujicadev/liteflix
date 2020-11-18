import React from 'react'
import {array} from 'prop-types';

const PopularSection = ({popularMovies}) => {
  return (
    <div>
      Popular movies
    </div>
  )
}

PopularSection.propTypes = {
    popularMovies: array,
}

export default PopularSection
