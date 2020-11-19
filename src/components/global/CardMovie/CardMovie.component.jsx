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
} from './CardMovie.style';
import {BiLike} from 'react-icons/bi';
import {FiPlay} from 'react-icons/fi';
import {GoPlus} from 'react-icons/go';

const CardMovie = ({src, movie}) => {
  return (
    <CardMovieWrapper>
      <CardMovieImage src={src} />
      <CardMovieInfoWrapper>
        <CardMovieInfoTitle>{movie.title}</CardMovieInfoTitle>
        <CardMovieInfo>
          98% Coincidencia <CardMovieInfoPG>+16</CardMovieInfoPG> 1h 30 min suspenso
        </CardMovieInfo>
        <PlayIconWrapper>
          <FiPlay />
        </PlayIconWrapper>
        <PlussIconWrapper>
          <BiLike />
        </PlussIconWrapper>
        <LikeIconWrapper>
          <GoPlus />
        </LikeIconWrapper>
      </CardMovieInfoWrapper>
    </CardMovieWrapper>
  );
};

export default CardMovie;
