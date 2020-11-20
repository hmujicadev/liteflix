import React, {useState} from 'react';
import {string, bool, object} from 'prop-types';
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
  DownIconWrapper,
} from './CardMovie.style';
import {BiLike} from 'react-icons/bi';
import {FiPlay} from 'react-icons/fi';
import {GoPlus} from 'react-icons/go';
import {BsChevronDown} from 'react-icons/bs';

const CardMovie = ({src, movie, large, custom, animate, initial, variants}) => {
  const [cardHover, setCardHover] = useState(false);
  const arrowVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <CardMovieWrapper
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      custom={custom}
      animate={animate}
      initial={initial}
      variants={variants}>
      <CardMovieImage src={src} />
      <CardMovieInfoWrapper>
        <CardMovieInfoTitle large={large}>{movie.title || movie.movieName}</CardMovieInfoTitle>
        <CardMovieInfo large={large}>
          98% Coincidencia <CardMovieInfoPG>+16</CardMovieInfoPG> 1h 30 min{' '}
          {movie.movieCategory || 'suspenso'}
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
        <DownIconWrapper
          animate={cardHover ? 'visible' : 'initial'}
          variants={arrowVariants}
          large={large}>
          <BsChevronDown size="43px" />
        </DownIconWrapper>
      </CardMovieInfoWrapper>
    </CardMovieWrapper>
  );
};

CardMovie.propTypes = {
  src: string,
  movie: object,
  large: bool,
  custom: string,
  animate: string,
  initial: string,
  variants: object,
};

export default CardMovie;
