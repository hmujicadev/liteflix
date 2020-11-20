import React from 'react';
import {
  CardMovieImage,
  CardMovieWrapper,
  CardMovieInfoWrapper,
  CardMovieInfoTitle,
  CardMovieInfo,
  CardMovieInfoPG,
  PlayIconWrapper,
  PlussIconWrapper,
  LikeIconWrapper,
  DownIconWrapper
} from './CardMovie.style';
import {BiLike} from 'react-icons/bi';
import {FiPlay} from 'react-icons/fi';
import {GoPlus} from 'react-icons/go';
import {BsChevronDown} from 'react-icons/bs'

const CardMovie = ({src, movie, large,}) => {
  return (
    <CardMovieWrapper>
      <CardMovieImage src={src} />
      <CardMovieInfoWrapper>
        <CardMovieInfoTitle large={large}>{movie.title||movie.movieName}</CardMovieInfoTitle>
        <CardMovieInfo large={large}>
          98% Coincidencia <CardMovieInfoPG>+16</CardMovieInfoPG> 1h 30 min {movie.movieCategory||'suspenso'}
        </CardMovieInfo>
        <PlayIconWrapper large={large}>
          <FiPlay />
        </PlayIconWrapper>
        <LikeIconWrapper large={large}>
          <BiLike />
        </LikeIconWrapper>
        <PlussIconWrapper large={large}>
          <GoPlus />
        </PlussIconWrapper>
        <DownIconWrapper large={large}>
          <BsChevronDown size='43px'/>
          </DownIconWrapper>
      </CardMovieInfoWrapper>
    </CardMovieWrapper>
  );
};

export default CardMovie;
