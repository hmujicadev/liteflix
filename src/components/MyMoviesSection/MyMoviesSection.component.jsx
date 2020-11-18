import React from 'react'
import {array} from 'prop-types';

const MyMoviesSection = ({myMovies}) => {
  return (
    <div>
      My movies
    </div>
  )
}

MyMoviesSection.propTypes = {
    myMovies: array,
}

export default MyMoviesSection
