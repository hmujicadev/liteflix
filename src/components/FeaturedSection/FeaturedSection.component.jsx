import React from 'react';
import {object} from 'prop-types';
import {
  FeaturedSectionWrapper,
  FeaturedSectionImage,
  FeaturedSectionOverlay,
  FeaturedContainer,
  FeaturedPreTitle,
  FeaturedTitle,
  FeaturedOptionsWrapper,
  FeaturedOption,
  OverviewWrapper,
  Overview,
  FeaturedSubTitle,
  FeaturedOptionMobile
} from './FeaturedSection.styles';
import {IMAGES_URL} from '../../constants';
import {FiPlay} from 'react-icons/fi';
import {FaPlus} from 'react-icons/fa';
import SpanText from '../global/SpanText/SpanText.component';

const FeaturedSection = ({featuredMovie}) => {
  console.log('Featured', featuredMovie);
  return (
    <>
      <FeaturedSectionWrapper>
        <FeaturedSectionOverlay />
        <FeaturedSectionImage src={`${IMAGES_URL}/original/${featuredMovie.backdrop_path}`} />
        <FeaturedContainer>
          <FeaturedPreTitle>
            ORIGINAL DE <strong>LITEFLIX</strong>
          </FeaturedPreTitle>
          <FeaturedTitle>{featuredMovie.title}</FeaturedTitle>
          <FeaturedOptionsWrapper>
            <FeaturedOption>
              <FiPlay />
              <SpanText font='16px' color="#fff" padding="0 0 0 10px">
                Reproducir
              </SpanText>
            </FeaturedOption>
            <FeaturedOption>
              <FaPlus />
              <SpanText font='16px' color="#fff" padding="0 0 0 10px">
                Mi lista
              </SpanText>
            </FeaturedOption>
            <FeaturedOptionMobile><FaPlus /></FeaturedOptionMobile>
          </FeaturedOptionsWrapper>

          <OverviewWrapper>
            <FeaturedSubTitle margin="0 0 10px 0">Ver Temporada 1</FeaturedSubTitle>
            <Overview>{featuredMovie.overview}</Overview>
          </OverviewWrapper>
        </FeaturedContainer>
      </FeaturedSectionWrapper>
    </>
  );
};
FeaturedSection.propTypes = {
  featuredMovie: object.isRequired,
};

export default FeaturedSection;
