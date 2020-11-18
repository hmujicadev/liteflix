import React from 'react'
import {CardMovieImage} from './CardMovie.style'

const CardMovie = ({large,src}) => {
  return (
    <CardMovieImage large={large} src={src} />
  )
}

export default CardMovie
